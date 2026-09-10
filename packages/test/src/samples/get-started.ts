import {
  TrogonEventStoreClient,
  jsonEvent,
  START,
  FORWARDS,
  JSONEventType,
} from "@trogonstack/trogon-eventstore-client";
import { optionalDescribe } from "@test-utils";
import { randomUUID as uuid } from "crypto";

const DNS_ENDPOINT = process.env.TROGON_EVENTSTORE_DNS_ENDPOINT!;
const STREAM_NAME = uuid();

/*
// region createClient
const client = TrogonEventStoreClient.connectionString`{connectionString}`;
// endregion createClient
*/

optionalDescribe(!!DNS_ENDPOINT)("[sample] get-started", () => {
  test("get-started", async () => {
    const client = TrogonEventStoreClient.connectionString`esdb+discover://${DNS_ENDPOINT}`;

    // region createEvent
    type TestEvent = JSONEventType<
      "TestEvent",
      {
        entityId: string;
        importantData: string;
      }
    >;

    const event = jsonEvent<TestEvent>({
      type: "TestEvent",
      data: {
        entityId: uuid(),
        importantData: "I wrote my first event!",
      },
    });
    // endregion createEvent

    // region appendEvents
    await client.appendToStream(STREAM_NAME, event);
    // endregion appendEvents

    // region readStream
    const events = client.readStream<TestEvent>(STREAM_NAME, {
      direction: FORWARDS,
      fromRevision: START,
      maxCount: 10,
    });
    // endregion readStream

    for await (const resolvedEvent of events) {
      expect(resolvedEvent.event?.data.importantData).toBe(
        event.data.importantData
      );
    }
  });
});
