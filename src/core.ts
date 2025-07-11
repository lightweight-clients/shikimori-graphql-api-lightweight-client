// noinspection JSUnusedGlobalSymbols

import type { QueryResultDescription } from './types-client';

const BASE_URL: string = 'https://shikimori.one/api/graphql';
const headers: HeadersInit | undefined = { 'Content-Type': 'application/json' };

const getResultFields = <TResultDescription>(resultDescription: QueryResultDescription<TResultDescription>): string => {
  const resultParts = [];
  for (const [key, value] of Object.entries(resultDescription)) {
    if (typeof value === 'object') {
      const nestedResult = getResultFields(value as QueryResultDescription<TResultDescription>);
      resultParts.push(`${key} { ${nestedResult} }`);
    } else {
      resultParts.push(key);
    }
  }

  return resultParts.join(' ');
};

/*
 * Internal. Fetches data from the Shikimori API using GraphQL.
 */
export let internal_client_fetch = async <
  TArgs extends Record<string, unknown>,
  TResultDescription,
  TQueryResult = TResultDescription | TResultDescription[],
>(
  datatype: string,
  args: TArgs,
  resultDescription: QueryResultDescription<TResultDescription>,
): Promise<TQueryResult> => {
  const queryArgs = Object.entries(args)
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
    .join(', ');
  const queryResult = getResultFields(resultDescription);
  const query = `{ ${datatype}(${queryArgs}) { ${queryResult} } }`;

  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query }),
  });

  return (await response.json())['data'][datatype];
};

/*
 * Sets the 'User-Agent' header for the client.
 * Providing a proper user agent is mandatory for the API.
 */
export const client_setUserAgent = (userAgent: string): void => {
  headers['User-Agent'] = userAgent;
};

/*
 * Sets the 'Authorization' header for the client.
 */
export const client_setAuthToken = (token: string): void => {
  headers['Authorization'] = `Bearer ${token}`;
};

/*
 * Sets a custom fetch function for the client.
 */
export const client_setCustomFetch = (customFetch: typeof internal_client_fetch): void => {
  internal_client_fetch = customFetch;
};
