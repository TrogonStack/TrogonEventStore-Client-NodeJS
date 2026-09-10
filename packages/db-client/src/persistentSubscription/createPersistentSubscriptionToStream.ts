import { CreateReq } from "../../generated/event_store/protocols/v1/persistentsubscriptions_pb";
import { PersistentSubscriptionsClient } from "../../generated/event_store/protocols/v1/persistentsubscriptions_grpc_pb";
import { Empty } from "../../generated/event_store/protocols/v1/shared_pb";

import type { BaseOptions } from "../types";
import { debug, convertToCommandError, createStreamIdentifier } from "../utils";
import { Client } from "../Client";
import { END, START } from "../constants";

import { settingsToGRPC } from "./utils/settingsToGRPC";
import type { PersistentSubscriptionToStreamSettings } from "./utils/persistentSubscriptionSettings";

declare module "../Client" {
  interface Client {
    /**
     * Creates a persistent subscription on a stream. Persistent subscriptions are special kind of subscription where the
     * server remembers where the read offset is at. This allows for many different modes of operations compared to a
     * regular subscription where the client holds the read offset. The pair stream name and group must be unique.
     * @param streamName - A stream name.
     * @param groupName - A group name.
     * @param settings - PersistentSubscription settings.
     * @see {@link persistentSubscriptionToStreamSettingsFromDefaults}
     * @param options - Command options.
     */
    createPersistentSubscriptionToStream(
      streamName: string,
      groupName: string,
      settings: PersistentSubscriptionToStreamSettings,
      options?: BaseOptions
    ): Promise<void>;
  }
}

Client.prototype.createPersistentSubscriptionToStream = async function (
  this: Client,
  streamName: string,
  groupName: string,
  settings: PersistentSubscriptionToStreamSettings,
  baseOptions: BaseOptions = {}
): Promise<void> {
  const req = new CreateReq();
  const options = new CreateReq.Options();
  const identifier = createStreamIdentifier(streamName);
  const reqSettings = settingsToGRPC(settings, CreateReq.Settings);
  const streamOptions = new CreateReq.StreamOptions();

  streamOptions.setStreamIdentifier(identifier);
  switch (settings.startFrom) {
    case START:
      streamOptions.setStart(new Empty());
      break;
    case END:
      streamOptions.setEnd(new Empty());
      break;
    default:
      streamOptions.setRevision(settings.startFrom.toString(10));
      break;
  }

  options.setGroupName(groupName);
  options.setStream(streamOptions);
  options.setSettings(reqSettings);

  req.setOptions(options);

  debug.command("createPersistentSubscriptionToStream: %O", {
    streamName,
    groupName,
    settings,
    options: baseOptions,
  });
  debug.command_grpc("createPersistentSubscriptionToStream: %g", req);

  return this.execute(
    PersistentSubscriptionsClient,
    "createPersistentSubscriptionToStream",
    (client) =>
      new Promise<void>((resolve, reject) => {
        client.create(req, ...this.callArguments(baseOptions), (error) => {
          if (error) return reject(convertToCommandError(error));
          return resolve();
        });
      })
  );
};
