import { createTestNode } from "@test-utils";

import { TrogonEventStoreClient } from "@trogonstack/trogon-eventstore-client";

describe("list projections", () => {
  const node = createTestNode();
  let client!: TrogonEventStoreClient;

  const basicProjection = `
  fromAll()
    .when({
      $init: function (state, ev) {
        return {};
      }
    });
  `;

  const projectionNames = ["projection-1", "projection-2", "projection-3"];

  beforeAll(async () => {
    await node.up();
    client = TrogonEventStoreClient.connectionString(node.connectionString());

    for (const name of projectionNames) {
      await client.createProjection(name, basicProjection);
    }
  });

  afterAll(async () => {
    await node.down();
  });

  test("lists projections", async () => {
    const projections = await client.listProjections();

    // includes system projections
    expect(projections.length).toBeGreaterThan(projectionNames.length);

    projections.forEach((details) => {
      expect(details).toBeDefined();

      if (!details.name.startsWith("$")) {
        expect(projectionNames).toContain(details.name);
      }
    });
  });
});
