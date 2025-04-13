# Shikimori GraphQL API Lightweight Client

![Language Shield](https://img.shields.io/badge/language-typescript-blue?style=for-the-badge)
![GitHub License](https://img.shields.io/github/license/tutkli/jikan-ts?style=for-the-badge&color=blueviolet)
![Code Style Shield](https://img.shields.io/badge/code%20style-eslint:recommended-00A5F0?style=for-the-badge&logo=eslint)

This is typed lightweight client for GraphQL. It contains only methods and types
and exports only `fetch` calls to make requests.

## Installation

```bash
npm install shikimori-graphql-api-lightweight-client
```

## Usage

The library provides 2 types of methods: api endpoints and the `client_` methods.

### Client methods

The `client_` methods are used to set up the client. They are:

- `client_setUserAgent(agent: string)`: Sets the user agent for the client (required, according to Shikimori API).
- `client_setAuthToken(token: string)`: Sets the authentication token for the client.
- `client_setCustomFetch(callback)`: Sets a custom fetch function for the client.

### API methods

The API methods are used to make requests to the Shikimori API. They accepts 2 arguments:

1. `args` - The arguments for the request (e.g. `search`, `page`, `limit`, etc.).
2. `resultDescription` - The description of the result.
   This is an _object_, where the keys are the names of the fields in the result and the values are always `1`. For
   nested objects, the value is an object with the same structure.

Available API methods are:

- animes
- characters
- contests
- currentUser
- genres
- mangas
- people
- userRates
- users

### Examples

```typescript
import { animes, client_setUserAgent } from 'shikimori-graphql-api-lightweight-client';
import { client_setAuthToken } from './core';

client_setUserAgent('my-app/1.0');
// client_setAuthToken('your_auth_token'); - optional, for authenticated requests

const result = await animes(
    { ids: '1' },
    { malId: 1, genres: { name: 1 } });
console.log(result);
```

## Features

- No dependencies.
- When using code minifiers, only the fetch command is exported.
- Can be used in browser and Node.js.
- Fully compatible with AWS LLRT.
- Fully typed API.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
