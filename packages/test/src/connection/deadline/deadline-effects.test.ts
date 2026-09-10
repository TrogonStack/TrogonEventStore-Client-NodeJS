import { createTestCluster, jsonTestEvents } from "@test-utils";
import {
  TrogonEventStoreClient,
  DeadlineExceededError,
} from "@trogonstack/trogon-eventstore-client";

describe("deadline", () => {
  const cluster = createTestCluster();

  beforeAll(async () => {
    await cluster.up();
  });

  afterAll(async () => {
    await cluster.down();
  });

  describe("should time out a call", () => {
    test.each([
      [
        "client settings",
        () =>
          TrogonEventStoreClient.connectionString(
            cluster.connectionStringWithOverrides({
              defaultDeadline: 1,
            })
          ).listProjections(),
      ],
      [
        "call options",
        () =>
          TrogonEventStoreClient.connectionString(
            cluster.connectionString()
          ).listProjections({
            deadline: 1,
          }),
      ],
      [
        "call options override",
        () =>
          TrogonEventStoreClient.connectionString(
            cluster.connectionStringWithOverrides({
              defaultDeadline: 200_000,
            })
          ).listProjections({
            deadline: 1,
          }),
      ],
      [
        "append",
        () =>
          TrogonEventStoreClient.connectionString(
            cluster.connectionStringWithOverrides({
              defaultDeadline: 200_000,
            })
          ).appendToStream("deadline", jsonTestEvents(), {
            deadline: 1,
          }),
      ],
    ])("%s", async (_, makeCall) => {
      try {
        await makeCall();
      } catch (error) {
        expect(error).toBeInstanceOf(DeadlineExceededError);
      }
    });
  });
});
