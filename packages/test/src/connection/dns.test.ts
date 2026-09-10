import { collect, jsonTestEvents, optionalDescribe } from "@test-utils";
import {
  TrogonEventStoreClient,
  jsonEvent,
  NodePreference,
  NotLeaderError,
} from "@trogonstack/trogon-eventstore-client";

optionalDescribe(!!process.env.TROGON_EVENTSTORE_DNS_ENDPOINT)(
  "dns discover",
  () => {
    const STREAM_NAME = "test_stream_name";
    const { TROGON_EVENTSTORE_DNS_ENDPOINT } = process.env;
    const event = jsonEvent({
      type: "test",
      data: { message: "test" },
    });

    describe.each([
      [
        "connectionString",
        (nodePreference?: NodePreference) =>
          TrogonEventStoreClient.connectionString`esdb+discover://${TROGON_EVENTSTORE_DNS_ENDPOINT!}${
            nodePreference ? `?nodePreference=${nodePreference}` : ""
          }`,
      ],
    ])("%s", (clientType, createClient) => {
      test("should successfully connect", async () => {
        const client = createClient();

        const appendResult = await client.appendToStream(STREAM_NAME, event);
        const readResult = await collect(
          client.readStream(STREAM_NAME, { maxCount: 10 })
        );

        expect(appendResult).toBeDefined();
        expect(readResult).toBeDefined();
      });

      describe("should connect to specified preference", () => {
        test("leader", async () => {
          const client = createClient("leader");
          const appendResult = await client.appendToStream(
            `${clientType}-leader-test`,
            jsonTestEvents(),
            { requiresLeader: true }
          );

          expect(appendResult).toBeDefined();
        });

        test("follower", async () => {
          const client = createClient("follower");

          try {
            const appendResult = await client.appendToStream(
              `${clientType}-leader-test`,
              jsonTestEvents(),
              { requiresLeader: true }
            );
            expect(appendResult).toBe("unreachable");
          } catch (error) {
            expect(error).toBeInstanceOf(NotLeaderError);
          }
        });
      });
    });
  }
);
