const {
  TrogonEventStoreClient,
  jsonEvent,
} = require("@trogonstack/trogon-eventstore-client");

(async () => {
  const client = TrogonEventStoreClient.connectionString(
    "esdb://localhost:2113?tls=false"
  );

  const events = Array.from({ length: 10_000 }, (_, i) =>
    jsonEvent({ type: "test", data: { i, hello: "hi" } })
  );

  await client.appendToStream("my_stream_10_000", events);
  await client.dispose();
})();
