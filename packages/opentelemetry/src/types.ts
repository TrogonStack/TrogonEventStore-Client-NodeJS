import type * as trogonEventStore from "@trogonstack/trogon-eventstore-client";

export type SubscribeToStreamParameters = Parameters<
  trogonEventStore.TrogonEventStoreClient["subscribeToStream"]
>;
export type SubscribeToAllParameters = Parameters<
  trogonEventStore.TrogonEventStoreClient["subscribeToAll"]
>;
export type PersistentSubscribeToAllParameters = Parameters<
  trogonEventStore.TrogonEventStoreClient["subscribeToPersistentSubscriptionToAll"]
>;
export type PersistentSubscribeToStreamParameters = Parameters<
  trogonEventStore.TrogonEventStoreClient["subscribeToPersistentSubscriptionToStream"]
>;

export type SubscribeParameters =
  | SubscribeToStreamParameters
  | SubscribeToAllParameters;
export type PersistentSubscribeParameters =
  | PersistentSubscribeToStreamParameters
  | PersistentSubscribeToAllParameters;

export type AppendToStreamParams = Parameters<
  trogonEventStore.TrogonEventStoreClient["appendToStream"]
>;
