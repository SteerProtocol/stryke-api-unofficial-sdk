# @steerprotocol/stryke-api-client

TypeScript client for the Stryke API, generated using OpenAPI Generator.

## Installation

```bash
npm install @steerprotocol/stryke-api-client
```

## Usage

The package exports several API clients for different endpoints:

```typescript
import { 
  ExerciseApi, 
  PurchaseApi, 
  StatsApi, 
  StrikesChainApi, 
  WithdrawApi,
  Configuration
} from '@steerprotocol/stryke-api-client';

// Optional: Configure the API client with custom settings
const config = new Configuration({
  basePath: 'https://your-api-base-url', // Override base path if needed
  apiKey: 'your-api-key', // If required
  headers: { 'Custom-Header': 'value' } // Add custom headers
});

// Initialize API clients
const exerciseApi = new ExerciseApi(config);
const purchaseApi = new PurchaseApi(config);
const statsApi = new StatsApi(config);
const strikesChainApi = new StrikesChainApi(config);
const withdrawApi = new WithdrawApi(config);

// Example: Get exercise history
const history = await exerciseApi.exerciseControllerGetHistory({
  chainId: 42161, // Arbitrum
  user: '0x...',
  optionMarket: '0x...',
  first: 100,
  skip: 0
});

// Example: Get exercise transaction data
const exerciseTx = await exerciseApi.exerciseControllerGetExerciseTx({
  chainId: 42161,
  optionMarket: '0x...',
  optionId: 1,
  swapperId: '1inch',
  slippage: 0.5
});

// Example: Get strikes chain data
const strikesChain = await strikesChainApi.strikesChainControllerGetStrikesChain({
  chainId: 42161,
  optionMarket: '0x...'
});

// Example: Get stats
const stats = await statsApi.statsControllerGetStats({
  chainId: 42161,
  optionMarket: '0x...'
});

// Example: Purchase options
const purchaseTx = await purchaseApi.purchaseControllerGetPurchaseTx({
  chainId: 42161,
  optionMarket: '0x...',
  amount: '1000000000000000000', // Amount in wei
  strikeId: 1
});
```

## Advanced Configuration

The client supports various configuration options:

```typescript
const config = new Configuration({
  // Base URL for API requests
  basePath: 'https://api.example.com',
  
  // Custom fetch implementation
  fetchApi: customFetchFunction,
  
  // Middleware for request/response processing
  middleware: [{
    pre: async ({ url, init }) => {
      // Modify request before sending
      return { url, init };
    },
    post: async ({ response }) => {
      // Process response
      return response;
    },
    onError: async ({ error }) => {
      // Handle errors
      console.error(error);
    }
  }],
  
  // Authentication
  apiKey: 'your-api-key',
  username: 'basic-auth-username',
  password: 'basic-auth-password',
  
  // Custom headers
  headers: {
    'Custom-Header': 'value'
  },
  
  // Request credentials mode
  credentials: 'include'
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