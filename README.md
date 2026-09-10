# TrogonEventStore Node.js Client

[![CI](https://github.com/TrogonStack/TrogonEventStore-Client-NodeJS/actions/workflows/ci.yml/badge.svg)](https://github.com/TrogonStack/TrogonEventStore-Client-NodeJS/actions/workflows/ci.yml)

Community-maintained TypeScript and JavaScript gRPC client for [TrogonEventStore](https://github.com/TrogonStack/TrogonEventStore).

## Packages

| Package | Purpose |
| --- | --- |
| `@trogonstack/trogon-eventstore-client` | Database client |
| `@trogonstack/trogon-eventstore-opentelemetry` | OpenTelemetry instrumentation |

Packages are published to GitHub Packages. Configure the `@trogonstack` npm scope before installing:

```ini
@trogonstack:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

```bash
npm install @trogonstack/trogon-eventstore-client
```

Do not commit registry credentials or tokens.

## Quick start

```ts
import {
  jsonEvent,
  NO_STREAM,
  TrogonEventStoreClient,
} from "@trogonstack/trogon-eventstore-client";

const client = TrogonEventStoreClient.connectionString(
  "esdb://localhost:2113?tls=false"
);

await client.appendToStream(
  "orders-1",
  jsonEvent({ type: "OrderCreated", data: { orderId: "1" } }),
  { streamState: NO_STREAM }
);
```

## Development

```bash
corepack enable
yarn install --immutable
yarn build
yarn lint
```

Integration tests use `ghcr.io/trogonstack/trogoneventstore:ci` by default. Override it with `TROGON_EVENTSTORE_IMAGE`.

## License

Licensed under Apache-2.0. This derivative preserves the original copyright notice and identifies modifications by Straw Hat, LLC in [LICENSE](LICENSE).
