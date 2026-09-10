/** @jest-environment ./src/utils/enableVersionCheck.ts */

import { createTestNode, matchServerVersion } from "@test-utils";

import {
  TrogonEventStoreClient,
  NotFoundError,
  UnknownError,
} from "@trogonstack/trogon-eventstore-client";

describe("resetProjection", () => {
  const node = createTestNode();
  let client!: TrogonEventStoreClient;

  const projection = `
    fromAll()
      .when({
        $init: function (state, ev) {
          return {
            last: ev,
          };
        },
      });
  `;

  beforeAll(async () => {
    await node.up();
    client = TrogonEventStoreClient.connectionString(node.connectionString());
  });

  afterAll(async () => {
    await node.down();
  });

  describe("resets the projection", () => {
    test("change query", async () => {
      const PROJECTION_NAME = "projection_to_update_query";
      const after = `
        fromAll()
          .when({
            $init: function (state, ev) {
              return {
                last: ev,
                updated: true,
              };
            },
          });
      `;
      await client.createProjection(PROJECTION_NAME, projection);
      await client.updateProjection(PROJECTION_NAME, after);
    });

    test("Emit enabled", async () => {
      const PROJECTION_NAME = "projection_to_update_tracking";
      await client.createProjection(PROJECTION_NAME, projection);
      await client.updateProjection(PROJECTION_NAME, projection, {
        emitEnabled: true,
      });
    });
  });

  describe("errors", () => {
    test("projection doesnt exist", async () => {
      const PROJECTION_NAME = "doesnt exist";
      await expect(
        client.updateProjection(PROJECTION_NAME, projection)
      ).rejects.toThrowError(
        matchServerVersion`>=24.6` ? NotFoundError : UnknownError
      );
    });
  });
});
