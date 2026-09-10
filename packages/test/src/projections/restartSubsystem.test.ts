import { createTestNode } from "@test-utils";

import { TrogonEventStoreClient } from "@trogonstack/trogon-eventstore-client";

describe("restartSubsystem", () => {
  const node = createTestNode();
  let client!: TrogonEventStoreClient;

  beforeAll(async () => {
    await node.up();
    client = TrogonEventStoreClient.connectionString(node.connectionString());
  });

  afterAll(async () => {
    await node.down();
  });

  test("Doesnt error", async () => {
    await expect(client.restartSubsystem()).resolves.toBeUndefined();
  });
});
