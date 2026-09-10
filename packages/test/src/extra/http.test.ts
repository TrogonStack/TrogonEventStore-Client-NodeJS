import {
  ConnectionFeatures,
  createInsecureTestNode,
  createTestNode,
} from "@test-utils";
import { TrogonEventStoreClient } from "@trogonstack/trogon-eventstore-client";

describe("http api", () => {
  interface QueueDashboard {
    queues: unknown[];
  }
  function queueDashboard(this: TrogonEventStoreClient) {
    return this.HTTPRequest<QueueDashboard>(
      "GET",
      "/ui/queue-dashboard/payload",
      {}
    );
  }
  const validDashboard = { queues: expect.any(Array) };

  describe("secure", () => {
    const cluster = createTestNode();

    beforeAll(async () => {
      await cluster.up();
    });

    afterAll(async () => {
      await cluster.down();
    });

    test("dns", async () => {
      const client = TrogonEventStoreClient.connectionString(
        cluster.connectionString()
      );

      const result = await queueDashboard.call(client);
      expect(result).toMatchObject(validDashboard);
    });

    test("ip", async () => {
      const overrides: ConnectionFeatures = {
        endpoints: cluster.endpoints.map(({ address: _, port }) => ({
          address: "127.0.0.1",
          port,
        })),
      };
      const client = TrogonEventStoreClient.connectionString(
        cluster.connectionStringWithOverrides(overrides)
      );

      const result = await queueDashboard.call(client);
      expect(result).toMatchObject(validDashboard);
    });

    test("error transform", async () => {
      const client = TrogonEventStoreClient.connectionString(
        cluster.connectionString()
      );

      class TestError extends Error {
        public code: number;
        constructor(code: number, message: string) {
          super(message);
          this.code = code;
        }
      }

      function nonsense(this: TrogonEventStoreClient) {
        return this.HTTPRequest<string>("POST", "/asdpoijsad", {
          transformError: (statusCode, statusMessage) => {
            if (statusCode === 404) {
              return new TestError(statusCode, statusMessage);
            }
          },
        });
      }

      try {
        const response = await nonsense.call(client);
        expect(response).toBe("unreachable");
      } catch (error) {
        expect(error).toBeInstanceOf(TestError);
        expect(error).toMatchInlineSnapshot(`[Error: Not Found]`);
      }
    });
  });

  describe("insecure", () => {
    const cluster = createInsecureTestNode();

    beforeAll(async () => {
      await cluster.up();
    });

    afterAll(async () => {
      await cluster.down();
    });

    test("dns", async () => {
      const client = TrogonEventStoreClient.connectionString(
        cluster.connectionString()
      );
      const result = await queueDashboard.call(client);
      expect(result).toMatchObject(validDashboard);
    });

    test("ip", async () => {
      const overrides: ConnectionFeatures = {
        endpoints: cluster.endpoints.map(({ address: _, port }) => ({
          address: "127.0.0.1",
          port,
        })),
      };
      const client = TrogonEventStoreClient.connectionString(
        cluster.connectionStringWithOverrides(overrides)
      );

      const result = await queueDashboard.call(client);
      expect(result).toMatchObject(validDashboard);
    });

    test("error transform", async () => {
      const client = TrogonEventStoreClient.connectionString(
        cluster.connectionString()
      );

      class TestError extends Error {
        public code: number;
        constructor(code: number, message: string) {
          super(message);
          this.code = code;
        }
      }

      function nonsense(this: TrogonEventStoreClient) {
        return this.HTTPRequest<string>("POST", "/asdpoijsad", {
          transformError: (statusCode, statusMessage) => {
            if (statusCode === 404) {
              return new TestError(statusCode, statusMessage);
            }
          },
        });
      }

      try {
        const response = await nonsense.call(client);
        expect(response).toBe("unreachable");
      } catch (error) {
        expect(error).toBeInstanceOf(TestError);
        expect(error).toMatchInlineSnapshot(`[Error: Not Found]`);
      }
    });
  });
});
