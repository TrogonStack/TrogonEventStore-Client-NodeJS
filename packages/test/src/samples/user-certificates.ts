import { TrogonEventStoreClient } from "@trogonstack/trogon-eventstore-client";
import { createTestNode, jsonTestEvents } from "@test-utils";
import { randomUUID as uuid } from "crypto";

const STREAM_NAME = uuid();

describe("[sample] user certificates", () => {
  const node = createTestNode();

  beforeAll(async () => {
    await node.up();
  });

  afterAll(async () => {
    await node.down();
  });

  test("connection string", async () => {
    const connectionStringTemplate = `esdb://admin:changeit@{endpoint}?tls=true&userCertFile={pathToCaFile}&userKeyFile={pathToKeyFile}`;

    try {
      // region client-with-user-certificates
      const connectionString = `esdb://admin:changeit@{endpoint}?tls=true&userCertFile={pathToCaFile}&userKeyFile={pathToKeyFile}`;
      const client = TrogonEventStoreClient.connectionString(connectionString);
      // endregion client-with-user-certificates

      expect(connectionString).toBe(connectionStringTemplate);
    } catch (error) {
      // do nothing.
    }

    const endpoints = node.endpoints
      .map((endpoint) => `${endpoint.address}:${endpoint.port}`)
      .join(",");
    let connectionStringTest = connectionStringTemplate
      .replace("{endpoint}", endpoints)
      .replace("{pathToCaFile}", node.certPath.admin.certPath)
      .replace("{pathToKeyFile}", node.certPath.admin.certKeyPath);

    connectionStringTest = `${connectionStringTest}&tlsCaFile=${node.certPath.root}`;

    const client =
      TrogonEventStoreClient.connectionString(connectionStringTest);

    const result = await client.appendToStream(STREAM_NAME, jsonTestEvents(2));
    expect(result).toBeDefined();
  });
});
