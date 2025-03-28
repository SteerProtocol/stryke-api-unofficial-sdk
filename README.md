# @steerprotocol/stryke-api-client

TypeScript client for the Stryke API, generated using OpenAPI Generator.

## Installation

```bash
npm install @steerprotocol/stryke-api-client
```

## Usage

```typescript
import { ExerciseApi } from '@steerprotocol/stryke-api-client';

// Initialize the API client
const api = new ExerciseApi();

// Example: Get exercise history
const history = await api.exerciseControllerGetHistory({
  chainId: 42161, // Arbitrum
  user: '0x...',
  optionMarket: '0x...',
  first: 100,
  skip: 0
});

// Example: Get exercise transaction data
const exerciseTx = await api.exerciseControllerGetExerciseTx({
  chainId: 42161,
  optionMarket: '0x...',
  optionId: 1,
  swapperId: '1inch',
  slippage: 0.5
});
```

## Development

This package is generated using OpenAPI Generator with the following command:

```bash
docker run --rm \
-v ${PWD}:/local openapitools/openapi-generator-cli generate \
-i /local/stryke-api-swagger.yaml \
-g typescript-fetch \
-o /local/generated-api \
--additional-properties=typescriptThreePlus=true,supportsES6=true,nullSafeAdditionalProps=true
```

## Building

```bash
npm run build
```

## License

MIT 