import { describe, expect, test, beforeEach, vi } from 'vitest';
import { animes, client_setAuthToken, client_setCustomFetch, client_setUserAgent } from '../src';

describe('client setup tests', () => {
  const EXPECTED_URL = 'https://shikimori.one/api/graphql';
  const TEST_ANIME_ID = '1';
  const TEST_USER_AGENT = 'test-user-agent';
  const TEST_AUTH_TOKEN = 'test-token';

  const fetchMock = global.fetch = vi.fn(url => {
    console.log('fetch called', String(url));
    return Promise.resolve({
      json: () => Promise.resolve({ data: { animes: [] } }),
    });
  }) as unknown as typeof global.fetch;

  beforeEach(() => vi.clearAllMocks());

  test('should build correct plain query', async () => {
    await animes({ ids: TEST_ANIME_ID }, { malId: 1 });

    expect(fetchMock).toHaveBeenCalledWith(
      EXPECTED_URL,
      {
        'method': 'POST',
        'headers': { 'Content-Type': 'application/json' },
        'body': '{"query":"{ animes(ids: \\"1\\") { malId } }"}',
      });
  });

  test('should build correct nested query', async () => {
    await animes({ ids: TEST_ANIME_ID }, { malId: 1, genres: { name: 1 } });

    expect(fetchMock).toHaveBeenCalledWith(
      EXPECTED_URL,
      {
        'method': 'POST',
        'headers': { 'Content-Type': 'application/json' },
        'body': '{"query":"{ animes(ids: \\"1\\") { malId genres { name } } }"}',
      });
  });

  test('should set User-Agent header', async () => {
    client_setUserAgent(TEST_USER_AGENT);

    await animes({ ids: TEST_ANIME_ID }, { malId: 1 });

    expect(fetchMock).toHaveBeenCalledWith(
      EXPECTED_URL,
      {
        'method': 'POST',
        'headers': {
          'Content-Type': 'application/json',
          'User-Agent': TEST_USER_AGENT,
        },
        'body': '{"query":"{ animes(ids: \\"1\\") { malId } }"}',
      });
  });

  test('should set Authorization header', async () => {
    client_setUserAgent(TEST_USER_AGENT);
    client_setAuthToken(TEST_AUTH_TOKEN);

    await animes({ ids: TEST_ANIME_ID }, { malId: 1 });

    expect(fetchMock).toHaveBeenCalledWith(
      EXPECTED_URL,
      {
        'method': 'POST',
        'headers': {
          'Content-Type': 'application/json',
          'User-Agent': TEST_USER_AGENT,
          'Authorization': `Bearer ${TEST_AUTH_TOKEN}`,
        },
        'body': '{"query":"{ animes(ids: \\"1\\") { malId } }"}',
      });
  });

  test('should set custom fetch function', async () => {
    const customFetch = vi.fn();
    client_setCustomFetch(customFetch);

    await animes({ ids: TEST_ANIME_ID }, { malId: 1 });

    expect(customFetch).toHaveBeenCalledWith('animes', { ids: TEST_ANIME_ID }, { malId: 1 });
  });
});
