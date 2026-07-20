import { beforeAll, describe, expect, it, vi } from 'vitest';
import {
  animes,
  characters,
  client_setUserAgent,
  mangas,
  people,
} from '../src';

describe('requests integration tests', () => {
  beforeAll(() => {
    const baseFetch = global.fetch;
    global.fetch = vi.fn((...args) => {
      // @ts-expect-error - spread args are fine here
      return baseFetch(...args);
    });

    client_setUserAgent('shikimori-graphql-api-lightweight-client/tests');
  });

  it('animes', async () => {
    const result = await animes({ ids: '1' }, { malId: 1 });

    expect(result.length).toBe(1);
    const anime = result[0];
    expect(Object.keys(anime).length).toBe(1);
    expect(anime.malId).toBeDefined();
    if (anime.malId === undefined || anime.malId === null) {
      throw new Error('Expected anime.malId to be defined');
    }
    expect(Number.parseInt(anime.malId, 10)).toEqual(1);
  });

  it('mangas', async () => {
    const result = await mangas({ search: 'Naruto' }, { malId: 1, volumes: 1 });

    expect(result.length).toBeGreaterThan(0);
    for (const manga of result) {
      expect(Object.keys(manga).length).toBe(2);
      expect(manga.malId).toBeDefined();
      if (manga.malId === undefined || manga.malId === null) {
        throw new Error('Expected manga.malId to be defined');
      }
      expect(Number.parseInt(manga.malId, 10)).toBeGreaterThanOrEqual(1);
      expect(manga.volumes).toBeDefined();
    }
  });

  it('characters', async () => {
    const result = await characters(
      { page: 1, limit: 3 },
      {
        malId: 1,
        descriptionSource: 1,
        poster: { originalUrl: 1, previewUrl: 1 },
      },
    );

    expect(result.length).toBe(3);
    for (const character of result) {
      expect(Object.keys(character).length).toBe(3);

      expect(character.malId).toBeDefined();
      if (character.malId === undefined || character.malId === null) {
        throw new Error('Expected character.malId to be defined');
      }
      expect(Number.parseInt(character.malId, 10)).toBeGreaterThanOrEqual(1);

      expect(character.descriptionSource).toBeDefined();

      const { poster } = character;
      expect(poster).toBeDefined();
      if (poster === undefined || poster === null) {
        throw new Error('Expected character.poster to be defined');
      }
      expect(Object.keys(poster).length).toBe(2);
      expect(poster.id).not.toBeDefined();
      expect(poster.originalUrl).toMatch(/https:\/\/shikimori.io\/uploads.+/);
      expect(poster.previewUrl).toMatch(/https:\/\/shikimori.io\/uploads.+/);
    }
  });

  it('people', async () => {
    const result = await people({ isMangaka: true, limit: 3 }, { isSeyu: 1 });

    expect(result.length).toBe(3);
    for (const person of result) {
      expect(Object.keys(person).length).toBe(1);
      expect(person.isSeyu).toBeDefined();
      expect(typeof person.isSeyu).toBe('boolean');
    }
  });
});
