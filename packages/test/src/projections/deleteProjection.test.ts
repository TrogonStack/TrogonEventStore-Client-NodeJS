/** @jest-environment ./src/utils/enableVersionCheck.ts */

import { createTestNode, matchServerVersion } from "@test-utils";

import {
  TrogonEventStoreClient,
  RUNNING,
  DELETING,
  STOPPED,
  ABORTED,
  NotFoundError,
  UnknownError,
} from "@trogonstack/trogon-eventstore-client";

describe("deleteProjection", () => {
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

  test("delete the projection", async () => {
    const PROJECTION_NAME = "projection_to_delete_everything";

    await client.createProjection(PROJECTION_NAME, projection);

    const beforeDetails = await client.getProjectionStatus(PROJECTION_NAME);

    expect(beforeDetails).toBeDefined();
    expect(beforeDetails.projectionStatus).toBe(RUNNING);

    await client.disableProjection(PROJECTION_NAME);

    const disabledDetails = await client.getProjectionStatus(PROJECTION_NAME);

    expect(disabledDetails).toBeDefined();

    // Incorrect projection status was switched (ABORTED -> STOPPED) in
    expect([STOPPED, ABORTED]).toContain(disabledDetails.projectionStatus);

    if (disabledDetails.projectionStatus === ABORTED) {
      // writeCheckpoint had to be false to stop the projection
      await client.abortProjection(PROJECTION_NAME);

      const stoppedDetails = await client.getProjectionStatus(PROJECTION_NAME);

      expect(stoppedDetails).toBeDefined();
      expect(stoppedDetails.projectionStatus).toBe(STOPPED);
    }

    await client.deleteProjection(PROJECTION_NAME, {
      deleteCheckpointStream: true,
      deleteStateStream: true,
    });

    try {
      const afterDetails = await client.getProjectionStatus(PROJECTION_NAME);

      expect(afterDetails).toBeDefined();
      expect(afterDetails.projectionStatus).toBe(DELETING);
    } catch (error) {
      // projection is already deleted
      expect(error).toBeInstanceOf(
        matchServerVersion`>=24.6` ? NotFoundError : UnknownError
      );
    }
  });

  describe("errors", () => {
    test("projection doesnt exist", async () => {
      const PROJECTION_NAME = "doesnt exist";

      await expect(
        client.deleteProjection(PROJECTION_NAME)
      ).rejects.toThrowError(
        matchServerVersion`>=24.6` ? NotFoundError : UnknownError
      );
    });
  });
});
