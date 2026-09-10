const trogonEventStore = "db.trogon_event_store";
const db = "db";
const server = "server";
const streams = "streams";

export const TrogonEventStoreAttributes = {
  DATABASE_USER: `${db}.user`,
  DATABASE_SYSTEM: `${db}.system`,
  DATABASE_OPERATION: `${db}.operation`,

  SERVER_ADDRESS: `${server}.address`,
  SERVER_PORT: `${server}.port`,

  STREAM_APPEND: `${streams}.append`,
  STREAM_SUBSCRIBE: `${streams}.subscribe`,

  TROGON_EVENT_STORE_STREAM: `${trogonEventStore}.stream`,
  TROGON_EVENT_STORE_SUBSCRIPTION_ID: `${trogonEventStore}.subscription.id`,
  TROGON_EVENT_STORE_EVENT_ID: `${trogonEventStore}.event.id`,
  TROGON_EVENT_STORE_EVENT_TYPE: `${trogonEventStore}.event.type`,
  TROGON_EVENT_STORE_AUTH_KIND: `${trogonEventStore}.auth.kind`,
};
