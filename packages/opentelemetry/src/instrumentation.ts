/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-this-alias */

import {
  Attributes,
  Context,
  context,
  Span,
  SpanKind,
  SpanStatusCode,
  trace,
  TraceFlags,
  Tracer,
} from "@opentelemetry/api";
import {
  InstrumentationBase,
  InstrumentationConfig,
  InstrumentationNodeModuleDefinition,
} from "@opentelemetry/instrumentation";
import type * as trogonEventStore from "@trogonstack/trogon-eventstore-client";
import type {
  AppendResult,
  BinaryEventType,
  EventData,
  EventType,
  JSONEventType,
  ResolvedEvent,
  SubscribeToAllOptions,
  SubscribeToPersistentSubscriptionToAllOptions,
  SubscribeToPersistentSubscriptionToStreamOptions,
  SubscribeToStreamOptions,
} from "@trogonstack/trogon-eventstore-client";
import type { ReadResp as StreamsReadResp } from "@trogonstack/trogon-eventstore-client/generated/event_store/protocols/v1/streams_pb";
import type { ReadResp as PersistentReadResp } from "@trogonstack/trogon-eventstore-client/generated/event_store/protocols/v1/persistentsubscriptions_pb";
import { TrogonEventStoreAttributes } from "./attributes";
import type { PersistentSubscriptionImpl } from "@trogonstack/trogon-eventstore-client/src/persistentSubscription/utils/PersistentSubscriptionImpl";
import type { Subscription } from "@trogonstack/trogon-eventstore-client/src/streams/utils/Subscription";
import { INSTRUMENTATION_NAME, INSTRUMENTATION_VERSION } from "./version";
import type {
  AppendToStreamParams,
  PersistentSubscribeParameters,
  SubscribeParameters,
} from "./types";
import {
  describeAuth,
  hasConvertGrpcEventMethod,
  isJSONEventData,
  type AuthContext,
} from "./utils";

const TRACE_ID = "$traceId" as any;
const SPAN_ID = "$spanId" as any;

export class Instrumentation extends InstrumentationBase {
  constructor(config: InstrumentationConfig = {}) {
    super(INSTRUMENTATION_NAME, INSTRUMENTATION_VERSION, config);
  }

  protected init() {
    return new InstrumentationNodeModuleDefinition(
      "@trogonstack/trogon-eventstore-client",
      ["0.*", "1.*"],
      this._onPatchMain(),
      this._onUnPatchMain()
    );
  }

  private _onPatchMain() {
    return (moduleExports: typeof trogonEventStore) => {
      this.wrap(
        moduleExports.TrogonEventStoreClient.prototype,
        "appendToStream",
        this._patchAppendToStream()
      );
      this.wrap(
        moduleExports.TrogonEventStoreClient.prototype,
        "subscribeToStream",
        this._patchCatchUpSubscription()
      );
      this.wrap(
        moduleExports.TrogonEventStoreClient.prototype,
        "subscribeToAll",
        this._patchCatchUpSubscription()
      );
      this.wrap(
        moduleExports.TrogonEventStoreClient.prototype,
        "subscribeToPersistentSubscriptionToStream",
        this._patchPersistentSubscription()
      );
      this.wrap(
        moduleExports.TrogonEventStoreClient.prototype,
        "subscribeToPersistentSubscriptionToAll",
        this._patchPersistentSubscription()
      );
      return moduleExports;
    };
  }

  private wrap<T extends object, K extends keyof T>(
    target: T,
    name: K,
    replacementFactory: (original: T[K], methodName: K) => T[K]
  ) {
    this._wrap(target, name, (originalMethod) =>
      replacementFactory(originalMethod, name)
    );
  }

  private _onUnPatchMain() {
    return (moduleExports: typeof trogonEventStore) => {
      this._diag.debug("un-patching");

      this._unwrap(
        moduleExports.TrogonEventStoreClient.prototype,
        "appendToStream"
      );
      this._unwrap(
        moduleExports.TrogonEventStoreClient.prototype,
        "subscribeToStream"
      );
      this._unwrap(
        moduleExports.TrogonEventStoreClient.prototype,
        "subscribeToPersistentSubscriptionToStream"
      );
      this._unwrap(
        moduleExports.TrogonEventStoreClient.prototype,
        "subscribeToPersistentSubscriptionToAll"
      );
    };
  }

  private _patchAppendToStream(): (
    original: Function,
    operation: keyof trogonEventStore.TrogonEventStoreClient
  ) => (...args: AppendToStreamParams) => Promise<AppendResult> {
    const instrumentation = this;
    const tracer = instrumentation.tracer;

    return function appendToStream(
      original: Function,
      operation: keyof trogonEventStore.TrogonEventStoreClient
    ) {
      return async function (
        this: trogonEventStore.TrogonEventStoreClient,
        ...args: AppendToStreamParams
      ): Promise<AppendResult> {
        const [streamName, events, options] = [...args];
        let actualEvents: EventData<JSONEventType | BinaryEventType>[];

        const uri = await this.resolveUri();
        const { hostname, port } = Instrumentation.getServerAddress(uri);

        const attributes: Attributes = {
          [TrogonEventStoreAttributes.TROGON_EVENT_STORE_STREAM]: streamName,
          [TrogonEventStoreAttributes.SERVER_ADDRESS]: hostname,
          [TrogonEventStoreAttributes.SERVER_PORT]: port,
          [TrogonEventStoreAttributes.DATABASE_SYSTEM]: INSTRUMENTATION_NAME,
          [TrogonEventStoreAttributes.DATABASE_OPERATION]: operation,
        };

        const auth = describeAuth(
          options?.credentials,
          Boolean(this.credentialsProvider)
        );
        if (auth.username !== undefined) {
          attributes[TrogonEventStoreAttributes.DATABASE_USER] = auth.username;
        }
        if (auth.kind !== undefined) {
          attributes[TrogonEventStoreAttributes.TROGON_EVENT_STORE_AUTH_KIND] =
            auth.kind;
        }

        const span = tracer.startSpan(
          TrogonEventStoreAttributes.STREAM_APPEND,
          {
            kind: SpanKind.CLIENT,
            attributes,
          }
        );

        if (Array.isArray(events)) {
          actualEvents = events;
        } else {
          actualEvents = [events];
        }

        const traceId = span.spanContext().traceId;
        const spanId = span.spanContext().spanId;

        actualEvents.forEach((event) => {
          const metadata = (event.metadata = event.metadata || {});
          if (isJSONEventData(event) && typeof metadata === "object") {
            event.metadata = {
              ...metadata,
              [TRACE_ID]: traceId,
              [SPAN_ID]: spanId,
            };
          }
        });

        try {
          const result = await original.apply(this, [
            streamName,
            actualEvents,
            options,
          ]);
          return result;
        } catch (error) {
          throw Instrumentation.handleError(error, span);
        } finally {
          span.end();
        }
      };
    };
  }

  static applySubscriptionInstrumentation<KnownEventType>(
    spanName: string,
    subscription:
      | Subscription<KnownEventType>
      | PersistentSubscriptionImpl<KnownEventType>,
    uri: string,
    operation: string,
    authContext: AuthContext,
    tracer: Tracer
  ) {
    if (!hasConvertGrpcEventMethod(subscription)) return;

    const originalConvertGrpcEvent = subscription.convertGrpcEvent;

    subscription.convertGrpcEvent = function (
      grpcEvent: StreamsReadResp.ReadEvent | PersistentReadResp.ReadEvent
    ) {
      const resolved = originalConvertGrpcEvent.apply(subscription, [
        grpcEvent,
      ]);

      const resolvedEvent = resolved as ResolvedEvent;
      const metadata = resolvedEvent?.event?.metadata;

      if (typeof metadata !== "object" || metadata === null) return resolved;

      const parentContext = Instrumentation.restoreContext(metadata);

      const { hostname, port } = Instrumentation.getServerAddress(uri);

      const subscriptionId = subscription.id;

      const attributes: Attributes = {
        [TrogonEventStoreAttributes.TROGON_EVENT_STORE_STREAM]:
          resolvedEvent?.event?.streamId,
        [TrogonEventStoreAttributes.TROGON_EVENT_STORE_EVENT_ID]:
          resolvedEvent?.event?.id,
        [TrogonEventStoreAttributes.TROGON_EVENT_STORE_EVENT_TYPE]:
          resolvedEvent?.event?.type,
        [TrogonEventStoreAttributes.TROGON_EVENT_STORE_SUBSCRIPTION_ID]:
          subscriptionId,
        [TrogonEventStoreAttributes.SERVER_ADDRESS]: hostname,
        [TrogonEventStoreAttributes.SERVER_PORT]: port,
        [TrogonEventStoreAttributes.DATABASE_SYSTEM]: INSTRUMENTATION_NAME,
        [TrogonEventStoreAttributes.DATABASE_OPERATION]: operation,
      };

      if (authContext.username !== undefined) {
        attributes[TrogonEventStoreAttributes.DATABASE_USER] =
          authContext.username;
      }
      if (authContext.kind !== undefined) {
        attributes[TrogonEventStoreAttributes.TROGON_EVENT_STORE_AUTH_KIND] =
          authContext.kind;
      }

      const span = tracer.startSpan(
        spanName,
        {
          attributes,
          kind: SpanKind.CONSUMER,
        },
        parentContext
      );

      try {
        return resolved;
      } catch (error) {
        throw Instrumentation.handleError(error, span);
      } finally {
        span.end();
      }
    };
  }

  private _patchCatchUpSubscription(): (
    original: Function,
    operation: keyof trogonEventStore.TrogonEventStoreClient
  ) => (...args: any) => any {
    const instrumentation = this;
    const tracer = instrumentation.tracer;

    return function subscribe<KnownEventType extends EventType = EventType>(
      original: Function,
      operation: keyof trogonEventStore.TrogonEventStoreClient
    ) {
      return function (
        this: trogonEventStore.TrogonEventStoreClient,
        ...args: SubscribeParameters
      ) {
        let options:
          | SubscribeToStreamOptions
          | SubscribeToAllOptions
          | undefined;

        if (operation == "subscribeToStream") {
          options = args[1] as SubscribeToStreamOptions;
        } else {
          options = args[0] as SubscribeToAllOptions;
        }

        const subscription: Subscription<KnownEventType> = original.apply(
          this,
          args
        );

        const authContext = describeAuth(
          options?.credentials,
          Boolean(this.credentialsProvider)
        );

        this.resolveUri().then((uri) =>
          Instrumentation.applySubscriptionInstrumentation(
            TrogonEventStoreAttributes.STREAM_SUBSCRIBE,
            subscription,
            uri,
            operation,
            authContext,
            tracer
          )
        );

        return subscription;
      };
    };
  }

  private _patchPersistentSubscription(): (
    original: Function,
    operation: keyof trogonEventStore.TrogonEventStoreClient
  ) => (...args: any) => any {
    const instrumentation = this;
    const tracer = instrumentation.tracer;

    return function subscribe<E>(
      original: Function,
      operation: keyof trogonEventStore.TrogonEventStoreClient
    ) {
      return function (
        this: trogonEventStore.TrogonEventStoreClient,
        ...args: PersistentSubscribeParameters
      ) {
        let options:
          | SubscribeToPersistentSubscriptionToAllOptions
          | SubscribeToPersistentSubscriptionToStreamOptions
          | undefined;

        if (operation === "subscribeToPersistentSubscriptionToStream") {
          options = args[2] as SubscribeToPersistentSubscriptionToStreamOptions;
        } else {
          options = args[1] as SubscribeToPersistentSubscriptionToStreamOptions;
        }

        const subscription: PersistentSubscriptionImpl<E> = original.apply(
          this,
          args
        );

        const authContext = describeAuth(
          options?.credentials,
          Boolean(this.credentialsProvider)
        );

        this.resolveUri().then((uri) =>
          Instrumentation.applySubscriptionInstrumentation(
            TrogonEventStoreAttributes.STREAM_SUBSCRIBE,
            subscription,
            uri,
            operation,
            authContext,
            tracer
          )
        );
        return subscription;
      };
    };
  }

  private static restoreContext = (
    metadata: trogonEventStore.MetadataType,
    isRemote = true
  ): Context => {
    const traceId = metadata[TRACE_ID] as string;
    const spanId = metadata[SPAN_ID] as string;

    return trace.setSpanContext(context.active(), {
      traceId,
      spanId,
      traceFlags: TraceFlags.SAMPLED,
      isRemote,
    });
  };

  private static handleError = (error: any, span: Span) => {
    span.recordException(error);
    span.setStatus({ code: SpanStatusCode.ERROR, message: error.message });
    throw error;
  };

  private static getServerAddress = (resolvedUri: string) => {
    const uri = new URL(`http://${resolvedUri}`); // the protocol is not important because we are only interested in the hostname and port

    const hostname = uri.hostname;
    const port = uri.port;

    return { hostname, port };
  };
}
