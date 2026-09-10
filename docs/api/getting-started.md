---
order: 1
---

# Getting started

This guide will help you get started with TrogonEventStore in your Node.js application.
It covers the basic steps to connect to TrogonEventStore, create events, append them
to streams, and read them back.

## Required packages

Add the `@trogonstack/trogon-eventstore-client` dependency to your project:

::: tabs
@tab NPM
```bash
npm install --save @trogonstack/trogon-eventstore-client@~1.1
```
@tab Yarn
```bash
yarn add @trogonstack/trogon-eventstore-client@~1.1
```
:::

## Connecting to TrogonEventStore

To connect your application to TrogonEventStore, you need to configure and create a client instance.

::: tip Insecure clusters
The recommended way to connect to TrogonEventStore is using secure mode (which is
the default). However, if your TrogonEventStore instance is running in insecure
mode, you must explicitly set `tls=false` in your connection string or client configuration.
:::

TrogonEventStore uses connection strings to configure the client connection. The connection string supports two protocols:

- **`esdb://`** - for connecting to a single node, or to a multi-node cluster using multiple gossip seed endpoints
- **`esdb+discover://`** - for connecting using DNS discovery with a single DNS endpoint

When using `esdb://` with multiple endpoints separated by commas, the client will query each node's Gossip API to get cluster information, then picks a node based on the URI's node preference. If one of the nodes is down, the client will try another endpoint.

With `esdb+discover://`, the client resolves a single DNS endpoint to discover the cluster topology. This is useful when you have a DNS `A` record pointing to your cluster nodes.

::: warning Only one host with +discover
When using `esdb+discover://`, only a single host should be provided. If multiple hosts are specified, only the first one will be used for discovery and the rest will be ignored. If you need to specify multiple endpoints for redundancy, use `esdb://` without `+discover` instead.
:::

::: info Gossip support
Since version 22.10, trogonEventStore supports gossip on single-node deployments, so
`esdb+discover://` can be used for any topology, including single-node setups.
:::

For multi-node clusters where you know the individual node addresses, use multiple gossip seed endpoints:

```
esdb://admin:changeit@node1.dns.name:2113,node2.dns.name:2113,node3.dns.name:2113
```

The client will use the Gossip API to discover the cluster topology and select the best node based on the configured node preference.

For cluster connections using DNS discovery, use a single DNS endpoint:

```
esdb+discover://admin:changeit@cluster.dns.name:2113
```

Where `cluster.dns.name` is a DNS `A` record that points to all cluster nodes.

For a single node:

```
esdb://admin:changeit@localhost:2113
```

There are a number of query parameters that can be used in the connection string to instruct the cluster how and where the connection should be established. All query parameters are optional.

| Parameter             | Accepted values                                   | Default  | Description                                                                                                                                    |
|-----------------------|---------------------------------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------|
| `tls`                 | `true`, `false`                                   | `true`   | Use secure connection, set to `false` when connecting to a non-secure server or cluster.                                                       |
| `connectionName`      | Any string                                        | None     | Connection name                                                                                                                                |
| `maxDiscoverAttempts` | Number                                            | `10`     | Number of attempts to discover the cluster.                                                                                                    |
| `discoveryInterval`   | Number                                            | `100`    | Cluster discovery polling interval in milliseconds.                                                                                            |
| `gossipTimeout`       | Number                                            | `5`      | Timeout in seconds for each gossip request during cluster discovery.                                                                           |
| `nodePreference`      | `leader`, `follower`, `random`, `readOnlyReplica` | `leader` | Preferred node role. When creating a client for write operations, always use `leader`.                                                         |
| `tlsVerifyCert`       | `true`, `false`                                   | `true`   | In secure mode, set to `false` when connecting to an untrusted node if you don't have the CA file available. Don't use in production.          |
| `tlsCaFile`           | String, file path                                 | None     | Path to the CA file when connecting to a secure cluster with a certificate that's not signed by a trusted CA.                                  |
| `defaultDeadline`     | Number                                            | `10000`  | Default timeout for client operations, in milliseconds.                                                                                        |
| `keepAliveInterval`   | Number                                            | `10000`  | Interval between keep-alive ping calls, in milliseconds.                                                                                       |
| `keepAliveTimeout`    | Number                                            | `10000`  | Keep-alive ping call timeout, in milliseconds.                                                                                                 |
| `userCertFile`        | String, file path                                 | None     | User certificate file for X.509 authentication.                                                                                                |
| `userKeyFile`         | String, file path                                 | None     | Key file for the user certificate used for X.509 authentication.                                                                               |

When connecting to an insecure instance, specify `tls=false` parameter. For example, for a node running locally use `esdb://localhost:2113?tls=false`. Note that usernames and passwords aren't provided there because insecure deployments don't support authentication and authorisation.

## Creating a client

First, create a client and get it connected to the database.

```ts
const client = TrogonEventStoreClient.connectionString`esdb://localhost:2113?tls=false`;
```

The client instance can be used as a singleton across the whole application. It doesn't need to open or close the connection.

## Creating an event

You can write anything to TrogonEventStore as events. The client needs a byte array as the event payload. Normally, you'd use a serialized object, and it's up to you to choose the serialization method.

The code snippet below creates an event object instance, serializes it, and adds it as a payload to the `EventData` structure, which the client can then write to the database.

```ts
type OrderCreated = JSONEventType<
  "OrderCreated",
  {
    orderId: string;
    customerId: string;
    items: Array<{
      productId: string;
      productName: string;
      quantity: number;
      price: number;
    }>;
    totalAmount: number;
    orderDate: string;
  }
>;

const event = jsonEvent({
  type: "OrderCreated",
  data: {
    orderId: uuid(),
    customerId: "customer-123",
    items: [
      {
        productId: "product-456",
        productName: "Wireless Headphones",
        quantity: 1,
        price: 99.99
      },
      {
        productId: "product-789",
        productName: "USB Cable",
        quantity: 2,
        price: 15.99
      }
    ],
    totalAmount: 131.97,
    orderDate: new Date().toISOString(),
  },
});
```

## Appending events

Each event in the database has its own unique identifier (UUID). The database uses it to ensure idempotent writes, but it only works if you specify the stream revision when appending events to the stream.

In the snippet below, we append the event to the stream `order-123`.

```ts
await client.appendToStream("order-123", event);
```

Here we are appending events without checking if the stream exists or if the stream version matches the expected event version. See more advanced scenarios in [appending events documentation](./appending-events.md).

## Reading events

Finally, we can read events back from the `order-123` stream.

```ts
const events = client.readStream("order-123", {
  direction: FORWARDS,
  fromRevision: START,
  maxCount: 10,
});

for await (const resolvedEvent of events) {
  console.log(events);
}
```
