# `@trogonstack/trogon-eventstore-client`

TypeScript and JavaScript gRPC client for TrogonEventStore.

```bash
npm install @trogonstack/trogon-eventstore-client
```

```ts
import { TrogonEventStoreClient } from "@trogonstack/trogon-eventstore-client";

const client = TrogonEventStoreClient.connectionString(
  "esdb://localhost:2113?tls=false"
);
```

See the [repository documentation](https://github.com/TrogonStack/TrogonEventStore-Client-NodeJS/tree/main/docs/api) for usage guides.
