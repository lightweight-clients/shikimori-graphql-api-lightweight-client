# Shikimori GraphQL API Lightweight Client

[![NPM Version](https://img.shields.io/npm/v/shikimori-graphql-api-lightweight-client)](https://www.npmjs.com/package/@lightweight-clients/shikimori-graphql-api-lightweight-client)
[![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Flightweight-clients%2Fshikimori-graphql-api-lightweight-client%2Factions%2Fworkflows%2Fcreate-new-version-when-it-is-released.yml%2Fruns%3Fstatus%3Dcompleted%26per_page%3D1&query=%24.workflow_runs%5B0%5D.run_started_at&style=flat&label=Last%20API%20version%20check)](https://github.com/lightweight-clients/shikimori-graphql-api-lightweight-client/actions/workflows/create-new-version-when-it-is-released.yml)
![NPM Downloads](https://img.shields.io/npm/dm/@lightweight-clients/shikimori-graphql-api-lightweight-client)
![GitHub License](https://img.shields.io/github/license/lightweight-clients/shikimori-graphql-api-lightweight-client)

This is a typed lightweight client for Shikimori GraphQL API. It contains only methods and types
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

## Versioning

GraphQL API is not versioned, so the client is updated to the latest API version
when a new version of the client is released.

- Major version updates of the client may include breaking changes in either GraphQL API or the client itself.
- Minor version updates of the client may include new features or improvements, but should not break existing
  functionality. Minor version can also include changes in the GraphQL API that do not break existing functionality.
- Patch version updates of the client are for bug fixes and should not introduce any new features or breaking changes.

## Schema

The schema for the Shikimori GraphQL API is available in the
[lightweight-clients/schemas](https://github.com/lightweight-clients/schemas) repository.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
Types are generated from Shikimori GraphQL API documentation
by [graphql-codegen](https://www.graphql-code-generator.com/).
