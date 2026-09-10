import { createTestNode, Defer, delay, jsonTestEvents } from "@test-utils";
import {
  NodeTracerProvider,
  InMemorySpanExporter,
  SimpleSpanProcessor,
} from "@opentelemetry/sdk-trace-node";
import {
  ATTR_EXCEPTION_STACKTRACE,
  ATTR_EXCEPTION_TYPE,
} from "@opentelemetry/semantic-conventions";
import { TrogonEventStoreInstrumentation } from "@trogonstack/trogon-eventstore-opentelemetry";
import { TrogonEventStoreAttributes } from "@trogonstack/trogon-eventstore-opentelemetry/dist/attributes";
import { randomUUID as v4 } from "node:crypto";
import { collect } from "@test-utils";

const tracerProvider = new NodeTracerProvider();
tracerProvider.register();

const instrumentation = new TrogonEventStoreInstrumentation();
instrumentation.disable();

import * as trogonEventStore from "@trogonstack/trogon-eventstore-client";
import {
  AppendToStreamOptions,
  ResolvedEvent,
  streamNameFilter,
  WrongExpectedVersionError,
} from "@trogonstack/trogon-eventstore-client";

describe("instrumentation", () => {
  const node = createTestNode();
  const moduleName = "@trogonstack/trogon-eventstore-opentelemetry";

  const memoryExporter = new InMemorySpanExporter();
  instrumentation.setTracerProvider(tracerProvider);
  tracerProvider.addSpanProcessor(new SimpleSpanProcessor(memoryExporter));

  test("supports the current pre-1.0 client line", () => {
    // @ts-expect-error Keep version gating covered despite OpenTelemetry hiding its definition.
    expect(instrumentation._modules[0].supportedVersions).toContain("0.*");
  });

  // @ts-expect-error the moduleExports property is private. This is needed to make the test work with auto-mocking
  instrumentation._modules[0].moduleExports = trogonEventStore;

  beforeAll(async () => {
    await node.up();
    instrumentation.enable();
  });

  afterAll(async () => {
    instrumentation.disable();
    await node.down();
  });

  afterEach(() => {
    memoryExporter.reset();
  });

  describe("append", () => {
    test.each([
      { withCredentials: false, credentials: undefined },
      {
        withCredentials: true,
        credentials: { username: "admin", password: "changeit" },
      },
    ])(
      "should create a span for append operation, withCredentials: $withCredentials",
      async ({ withCredentials, credentials }) => {
        const { TrogonEventStoreClient, jsonEvent } = await import(
          "@trogonstack/trogon-eventstore-client"
        );

        const STREAM = v4();

        const client = TrogonEventStoreClient.connectionString(
          node.connectionString()
        );

        const appendOptions: AppendToStreamOptions = {
          streamState: "any",
        };

        if (withCredentials) {
          appendOptions.credentials = credentials;
        }

        await client.appendToStream(
          STREAM,
          jsonEvent({
            type: "test",
            data: {},
          }),
          appendOptions
        );

        const spans = memoryExporter.getFinishedSpans();
        const span = spans[0];

        const events = await collect(client.readStream(STREAM));
        const event = events[0];

        expect(events.length).toBe(1);
        expect(event.event?.metadata).toStrictEqual({
          $traceId: expect.any(String),
          $spanId: expect.any(String),
        });

        const expectedAttributes = {
          [TrogonEventStoreAttributes.TROGON_EVENT_STORE_STREAM]: STREAM,
          [TrogonEventStoreAttributes.SERVER_ADDRESS]:
            node.endpoints[0].address,
          [TrogonEventStoreAttributes.SERVER_PORT]:
            node.endpoints[0].port.toString(),
          [TrogonEventStoreAttributes.DATABASE_SYSTEM]: moduleName,
          [TrogonEventStoreAttributes.DATABASE_OPERATION]: "appendToStream",
        };

        if (withCredentials) {
          expectedAttributes[TrogonEventStoreAttributes.DATABASE_USER] =
            credentials!.username;
          expectedAttributes[
            TrogonEventStoreAttributes.TROGON_EVENT_STORE_AUTH_KIND
          ] = "basic";
        }

        expect(spans.length).toBe(1);
        expect(span.attributes).toStrictEqual(expectedAttributes);
      }
    );

    test("span contains error when append fails", async () => {
      const { TrogonEventStoreClient } = await import(
        "@trogonstack/trogon-eventstore-client"
      );

      const client = TrogonEventStoreClient.connectionString(
        node.connectionString()
      );

      const STREAM_NAME = v4();

      await client.appendToStream(STREAM_NAME, jsonTestEvents());

      try {
        const result = await client.appendToStream(
          STREAM_NAME,
          jsonTestEvents(),
          {
            streamState: "no_stream",
          }
        );

        expect(result).toBe("unreachable");
      } catch (error) {
        const spans = memoryExporter.getFinishedSpans();
        expect(spans.length).toBe(2);

        const failedSpan = spans[1];

        const failedEvents = failedSpan.events;

        expect(failedEvents.length).toBe(1);

        const failedEvent = failedEvents[0];

        if (error instanceof WrongExpectedVersionError) {
          expect(error).toBeInstanceOf(WrongExpectedVersionError);
          expect(failedEvent).toEqual(
            expect.objectContaining({
              name: "exception",
              attributes: {
                [ATTR_EXCEPTION_TYPE]: "Error",
                [ATTR_EXCEPTION_STACKTRACE]: error.stack,
              },
            })
          );
        }
      }
    });
  });

  describe("catch up subscriptions", () => {
    test("should create child span in subscription to stream", async () => {
      const defer = new Defer();
      const { TrogonEventStoreClient, jsonEvent } = await import(
        "@trogonstack/trogon-eventstore-client"
      );

      const STREAM = v4();

      const client = TrogonEventStoreClient.connectionString(
        node.connectionString()
      );

      const handleError = jest.fn((error) => {
        defer.reject(error);
      });
      const handleEvent = jest.fn((event: ResolvedEvent) => {
        if (event.event?.streamId == STREAM) {
          subscription.unsubscribe();
        }
      });
      const handleEnd = jest.fn(defer.resolve);
      const handleConfirmation = jest.fn();

      const event = jsonEvent({
        type: "SomeType",
        data: {},
      });

      await client.appendToStream(STREAM, event);

      const subscription = client
        .subscribeToStream(STREAM, {
          credentials: {
            username: "admin",
            password: "changeit",
          },
        })
        .on("error", handleError)
        .on("data", handleEvent)
        .on("end", handleEnd)
        .on("confirmation", handleConfirmation);

      await delay(500);
      await defer.promise;

      const spans = memoryExporter.getFinishedSpans();

      const parentSpan = spans.find(
        (span) => span.name === TrogonEventStoreAttributes.STREAM_APPEND
      );
      const childSpan = spans.find(
        (span) => span.name === TrogonEventStoreAttributes.STREAM_SUBSCRIBE
      );

      expect(handleConfirmation).toHaveBeenCalledTimes(1);

      expect(parentSpan).toBeDefined();
      expect(childSpan).toBeDefined();
      expect(parentSpan?.spanContext().spanId).toBe(childSpan?.parentSpanId);

      expect(childSpan?.attributes).toMatchObject({
        [TrogonEventStoreAttributes.TROGON_EVENT_STORE_STREAM]: STREAM,
        [TrogonEventStoreAttributes.TROGON_EVENT_STORE_EVENT_ID]: event.id,
        [TrogonEventStoreAttributes.TROGON_EVENT_STORE_EVENT_TYPE]: event.type,
        [TrogonEventStoreAttributes.TROGON_EVENT_STORE_SUBSCRIPTION_ID]:
          subscription.id,
        [TrogonEventStoreAttributes.SERVER_ADDRESS]: node.endpoints[0].address,
        [TrogonEventStoreAttributes.SERVER_PORT]:
          node.endpoints[0].port.toString(),
        [TrogonEventStoreAttributes.DATABASE_SYSTEM]: moduleName,
        [TrogonEventStoreAttributes.DATABASE_OPERATION]: "subscribeToStream",
        [TrogonEventStoreAttributes.DATABASE_USER]: "admin",
      });

      expect(parentSpan?.attributes).toMatchObject({
        [TrogonEventStoreAttributes.TROGON_EVENT_STORE_STREAM]: STREAM,
        [TrogonEventStoreAttributes.SERVER_ADDRESS]: node.endpoints[0].address,
        [TrogonEventStoreAttributes.SERVER_PORT]:
          node.endpoints[0].port.toString(),
        [TrogonEventStoreAttributes.DATABASE_SYSTEM]: moduleName,
        [TrogonEventStoreAttributes.DATABASE_OPERATION]: "appendToStream",
      });
    });

    test("events with non-json metadata are not traced in subscriptions", async () => {
      const defer = new Defer();
      const { TrogonEventStoreClient, jsonEvent, binaryEvent } = await import(
        "@trogonstack/trogon-eventstore-client"
      );

      const STREAM = v4();

      const client = TrogonEventStoreClient.connectionString(
        node.connectionString()
      );

      const handleError = jest.fn((error) => {
        defer.reject(error);
      });
      const handleEvent = jest.fn((event: ResolvedEvent) => {
        if (event.event?.streamId == STREAM) {
          subscription.unsubscribe();
        }
      });
      const handleEnd = jest.fn(defer.resolve);
      const handleConfirmation = jest.fn();

      const event1 = binaryEvent({
        type: "SomeType",
        data: Buffer.from("hello"),
        metadata: {
          "some-data": "some-value",
        },
      });
      const event2 = jsonEvent({
        type: "SomeType",
        data: {
          "some-data": "some-value",
        },
        metadata: 2,
      });

      await client.appendToStream(STREAM, [event1, event2]);

      const subscription = client
        .subscribeToStream(STREAM, {
          credentials: {
            username: "admin",
            password: "changeit",
          },
        })
        .on("error", handleError)
        .on("data", handleEvent)
        .on("end", handleEnd)
        .on("confirmation", handleConfirmation);

      await delay(500);
      await defer.promise;

      const spans = memoryExporter.getFinishedSpans();

      const parentSpans = spans.filter(
        (span) => span.name === TrogonEventStoreAttributes.STREAM_APPEND
      );

      const childSpans = spans.filter(
        (span) => span.name === TrogonEventStoreAttributes.STREAM_SUBSCRIBE
      );

      expect(handleConfirmation).toHaveBeenCalledTimes(1);

      expect(parentSpans.length).toBe(1);

      expect(childSpans).toBeDefined();

      expect(childSpans).toHaveLength(1);

      expect(
        childSpans[0].attributes[
          TrogonEventStoreAttributes.TROGON_EVENT_STORE_EVENT_ID
        ]
      ).toBe(event1.id);
      expect(
        childSpans[0].attributes[
          TrogonEventStoreAttributes.TROGON_EVENT_STORE_EVENT_TYPE
        ]
      ).toBe(event1.type);
    });
  });

  describe("persistent subscriptions", () => {
    test("should create child span in persistent subscription to stream", async () => {
      const {
        TrogonEventStoreClient,
        jsonEvent,
        persistentSubscriptionToStreamSettingsFromDefaults,
        START,
      } = await import("@trogonstack/trogon-eventstore-client");

      const STREAM = v4();
      const GROUP = v4();

      const client = TrogonEventStoreClient.connectionString(
        node.connectionString()
      );

      await client.createPersistentSubscriptionToStream(
        STREAM,
        GROUP,
        persistentSubscriptionToStreamSettingsFromDefaults({
          startFrom: START,
        })
      );

      const defer = new Defer();

      const handleError = jest.fn((error) => {
        defer.reject(error);
      });
      const handleEvent = jest.fn(async (event: ResolvedEvent) => {
        if (event.event) {
          await subscription.ack(event);
          defer.resolve();
        }
      });
      const handleEnd = jest.fn(defer.resolve);
      const onConfirmation = jest.fn();

      const subscription = client
        .subscribeToPersistentSubscriptionToStream(STREAM, GROUP)
        .on("error", handleError)
        .on("data", handleEvent)
        .on("confirmation", onConfirmation)
        .on("end", handleEnd);

      const event = jsonEvent({
        type: "SomeEvent",
        data: {},
      });

      await client.appendToStream(STREAM, event);

      await delay(500);
      await defer.promise;

      const spans = memoryExporter.getFinishedSpans();

      expect(handleEvent).toHaveBeenCalledTimes(1);

      const parentSpan = spans.find(
        (span) => span.name === TrogonEventStoreAttributes.STREAM_APPEND
      );
      const childSpan = spans.find(
        (span) => span.name === TrogonEventStoreAttributes.STREAM_SUBSCRIBE
      );

      expect(parentSpan).toBeDefined();
      expect(childSpan).toBeDefined();
      expect(parentSpan?.spanContext().spanId).toBe(childSpan?.parentSpanId);

      expect(childSpan?.attributes).toMatchObject({
        [TrogonEventStoreAttributes.TROGON_EVENT_STORE_STREAM]: STREAM,
        [TrogonEventStoreAttributes.TROGON_EVENT_STORE_EVENT_ID]: event.id,
        [TrogonEventStoreAttributes.TROGON_EVENT_STORE_EVENT_TYPE]: event.type,
        [TrogonEventStoreAttributes.TROGON_EVENT_STORE_SUBSCRIPTION_ID]:
          subscription.id,
        [TrogonEventStoreAttributes.SERVER_ADDRESS]: node.endpoints[0].address,
        [TrogonEventStoreAttributes.SERVER_PORT]:
          node.endpoints[0].port.toString(),
        [TrogonEventStoreAttributes.DATABASE_SYSTEM]: moduleName,
        [TrogonEventStoreAttributes.DATABASE_OPERATION]:
          "subscribeToPersistentSubscriptionToStream",
      });

      expect(parentSpan?.attributes).toMatchObject({
        [TrogonEventStoreAttributes.TROGON_EVENT_STORE_STREAM]: STREAM,
        [TrogonEventStoreAttributes.SERVER_ADDRESS]: node.endpoints[0].address,
        [TrogonEventStoreAttributes.SERVER_PORT]:
          node.endpoints[0].port.toString(),
        [TrogonEventStoreAttributes.DATABASE_SYSTEM]: moduleName,
        [TrogonEventStoreAttributes.DATABASE_OPERATION]: "appendToStream",
      });
    });

    test("should create child span in persistent subscription to all", async () => {
      const {
        TrogonEventStoreClient,
        jsonEvent,
        persistentSubscriptionToAllSettingsFromDefaults,
        START,
      } = await import("@trogonstack/trogon-eventstore-client");

      const GROUP = v4();
      const STREAM = v4();

      const client = TrogonEventStoreClient.connectionString(
        node.connectionString()
      );

      await client.createPersistentSubscriptionToAll(
        GROUP,
        persistentSubscriptionToAllSettingsFromDefaults({
          startFrom: START,
        }),
        {
          filter: streamNameFilter({
            prefixes: [STREAM],
          }),
        }
      );

      const defer = new Defer();

      const handleError = jest.fn((error) => {
        defer.reject(error);
      });
      const handleEvent = jest.fn(async (event: ResolvedEvent) => {
        if (event.event) {
          await subscription.ack(event);
        }

        if (event.event?.streamId == STREAM) {
          defer.resolve();
        }
      });
      const handleEnd = jest.fn(defer.resolve);
      const onConfirmation = jest.fn();

      const subscription = client
        .subscribeToPersistentSubscriptionToAll(GROUP, {
          credentials: {
            username: "admin",
            password: "changeit",
          },
        })
        .on("error", handleError)
        .on("data", handleEvent)
        .on("confirmation", onConfirmation)
        .on("end", handleEnd);

      const event = jsonEvent({
        type: "SomeEvent",
        data: {},
      });

      await client.appendToStream(STREAM, event);

      await delay(500);
      await defer.promise;

      const spans = memoryExporter.getFinishedSpans();

      const parentSpan = spans.find(
        (span) => span.name === TrogonEventStoreAttributes.STREAM_APPEND
      );
      const childSpan = spans.find(
        (span) => span.name === TrogonEventStoreAttributes.STREAM_SUBSCRIBE
      );

      expect(parentSpan).toBeDefined();
      expect(childSpan).toBeDefined();
      expect(parentSpan?.spanContext().spanId).toBe(childSpan?.parentSpanId);

      expect(childSpan?.attributes).toMatchObject({
        [TrogonEventStoreAttributes.TROGON_EVENT_STORE_STREAM]: STREAM,
        [TrogonEventStoreAttributes.TROGON_EVENT_STORE_EVENT_ID]: event.id,
        [TrogonEventStoreAttributes.TROGON_EVENT_STORE_EVENT_TYPE]: event.type,
        [TrogonEventStoreAttributes.TROGON_EVENT_STORE_SUBSCRIPTION_ID]:
          subscription.id,
        [TrogonEventStoreAttributes.SERVER_ADDRESS]: node.endpoints[0].address,
        [TrogonEventStoreAttributes.SERVER_PORT]:
          node.endpoints[0].port.toString(),
        [TrogonEventStoreAttributes.DATABASE_SYSTEM]: moduleName,
        [TrogonEventStoreAttributes.DATABASE_OPERATION]:
          "subscribeToPersistentSubscriptionToAll",
        [TrogonEventStoreAttributes.DATABASE_USER]: "admin",
      });

      expect(parentSpan?.attributes).toMatchObject({
        [TrogonEventStoreAttributes.TROGON_EVENT_STORE_STREAM]: STREAM,
        [TrogonEventStoreAttributes.SERVER_ADDRESS]: node.endpoints[0].address,
        [TrogonEventStoreAttributes.SERVER_PORT]:
          node.endpoints[0].port.toString(),
        [TrogonEventStoreAttributes.DATABASE_SYSTEM]: moduleName,
        [TrogonEventStoreAttributes.DATABASE_OPERATION]: "appendToStream",
      });
    });
  });
});
