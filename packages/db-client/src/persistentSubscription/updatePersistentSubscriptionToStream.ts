import { UpdateReq } from "../../generated/event_store/protocols/v1/persistentsubscriptions_pb";
import { PersistentSubscriptionsClient } from "../../generated/event_store/protocols/v1/persistentsubscriptions_grpc_pb";
import { Empty } from "../../generated/event_store/protocols/v1/shared_pb";

import { debug, convertToCommandError, createStreamIdentifier } from "../utils";
import { END, START } from "../constants";
import { Client } from "../Client";
import type { BaseOptions } from "../types";

import type { PersistentSubscriptionToStreamSettings } from "./utils/persistentSubscriptionSettings";
import { settingsToGRPC } from "./utils/settingsToGRPC";

declare module "../Client" {
  interface Client {
    /**
     * Updates a persistent subscription configuration.
     * @param streamName - A stream name.
     * @param groupName - A group name.
     * @param settings - PersistentSubscription settings.
     * @see {@link persistentSubscriptionToStreamSettingsFromDefaults}
     * @param options - Command options.
     */
    updatePersistentSubscriptionToStream(
      streamName: string,
      groupName: string,
      settings: PersistentSubscriptionToStreamSettings,
      options?: BaseOptions
    ): Promise<void>;
  }
}

Client.prototype.updatePersistentSubscriptionToStream = async function (
  this: Client,
  streamName: string,
  groupName: string,
  settings: PersistentSubscriptionToStreamSettings,
  baseOptions: BaseOptions = {}
): Promise<void> {
  const req = new UpdateReq();
  const options = new UpdateReq.Options();
  const identifier = createStreamIdentifier(streamName);
  const reqSettings = settingsToGRPC(settings, UpdateReq.Settings);
  const streamOptions = new UpdateReq.StreamOptions();

  streamOptions.setStreamIdentifier(identifier);
  switch (settings.startFrom) {
    case START: {
      streamOptions.setStart(new Empty());
      break;
    }
    case END: {
      streamOptions.setEnd(new Empty());
      break;
    }
    default: {
      streamOptions.setRevision(settings.startFrom.toString(10));
      break;
    }
  }

  options.setGroupName(groupName);
  options.setStream(streamOptions);
  options.setSettings(reqSettings);

  req.setOptions(options);

  debug.command("updatePersistentSubscriptionToStream: %O", {
    streamName,
    groupName,
    settings,
    options: baseOptions,
  });
  debug.command_grpc("updatePersistentSubscriptionToStream: %g", req);

  return this.execute(
    PersistentSubscriptionsClient,
    "updatePersistentSubscriptionToStream",
    (client) =>
      new Promise<void>((resolve, reject) => {
        client.update(req, ...this.callArguments(baseOptions), (error) => {
          if (error) return reject(convertToCommandError(error));
          return resolve();
        });
      })
  );
};
