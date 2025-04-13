import { animes, characters, client_setUserAgent, mangas, people } from '../src';

describe('requests integration tests', () => {
    beforeAll(() => {
        const baseFetch = global.fetch;
        global.fetch = jest.fn((...args) => {
            console.log('fetch called with URL:', JSON.stringify(args));
            return baseFetch(...args);
        });

        client_setUserAgent('shikimori-graphql-api-lightweight-client/tests');
    });

    it('animes', async () => {
        const result = await animes({ ids: '1' }, { malId: 1 });

        console.log('result', result);
        expect(result.length).toBe(1);
        expect(Object.keys(result[0]).length).toBe(1);
        expect(result[0].malId).toBeDefined();
        expect(parseInt(result[0].malId!)).toEqual(1);
    });

    it('mangas', async () => {
        const result = await mangas({ search: 'Naruto' }, { malId: 1, volumes: 1 });

        console.log('result', result);
        expect(result.length).toBeGreaterThan(0);
        for (const manga of result) {
            expect(Object.keys(manga).length).toBe(2);
            expect(manga.malId).toBeDefined();
            expect(parseInt(manga.malId!)).toBeGreaterThanOrEqual(1);
            expect(manga.volumes).toBeDefined();
        }
    });

    it('characters', async () => {
        const result = await characters({ page: 1, limit: 3 }, {
            malId: 1,
            descriptionSource: 1,
            poster: { originalUrl: 1, previewUrl: 1 },
        });

        console.log('result', result);
        expect(result.length).toBe(3);
        for (const character of result) {
            expect(Object.keys(character).length).toBe(3);

            expect(character.malId).toBeDefined();
            expect(parseInt(character.malId!)).toBeGreaterThanOrEqual(1);

            expect(character.descriptionSource).toBeDefined();

            expect(character.poster).toBeDefined();
            expect(Object.keys(character.poster!).length).toBe(2);
            expect(character.poster!.id).not.toBeDefined();
            expect(character.poster!.originalUrl).toMatch(/https:\/\/shikimori.one\/uploads.+/);
            expect(character.poster!.previewUrl).toMatch(/https:\/\/shikimori.one\/uploads.+/);
        }
    });

    it('people', async () => {
        const result = await people({ isMangaka: true, limit: 3 }, { isSeyu: 1 });

        console.log('result', result);
        expect(result.length).toBe(3);
        for (const person of result) {
            expect(Object.keys(person).length).toBe(1);
            expect(person.isSeyu).toBeDefined();
            expect(typeof person.isSeyu).toBe('boolean');
        }
    });
});
