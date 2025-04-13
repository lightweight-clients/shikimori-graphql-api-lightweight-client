import { internal_client_fetch } from './core';
import {
    Anime,
    Character,
    Contest,
    Genre,
    Manga,
    Person,
    QueryAnimesArgs,
    QueryCharactersArgs,
    QueryContestsArgs,
    QueryGenresArgs,
    QueryMangasArgs,
    QueryPeopleArgs,
    QueryUserRatesArgs,
    QueryUsersArgs,
    User,
    UserRate,
} from './types-api';
import { QueryResultDescription } from './types-client';

export const animes = (args: QueryAnimesArgs, resultDescription: QueryResultDescription<Anime>): Promise<Anime[]> => {
    return internal_client_fetch<QueryAnimesArgs, Anime, Anime[]>('animes', args, resultDescription);
};

export const characters = (args: QueryCharactersArgs, resultDescription: QueryResultDescription<Character>): Promise<Character[]> => {
    return internal_client_fetch<QueryCharactersArgs, Character, Character[]>('characters', args, resultDescription);
};

export const contests = (args: QueryContestsArgs, resultDescription: QueryResultDescription<Contest>): Promise<Contest[]> => {
    return internal_client_fetch<QueryContestsArgs, Contest, Contest[]>('contests', args, resultDescription);
};

export const currentUser = (args: QueryUsersArgs, resultDescription: QueryResultDescription<User>): Promise<User> => {
    return internal_client_fetch<QueryUsersArgs, User, User>('currentUser', args, resultDescription);
};

export const genres = (args: QueryGenresArgs, resultDescription: QueryResultDescription<Genre>): Promise<Genre[]> => {
    return internal_client_fetch<QueryGenresArgs, Genre, Genre[]>('genres', args, resultDescription);
};

export const mangas = (args: QueryMangasArgs, resultDescription: QueryResultDescription<Manga>): Promise<Manga[]> => {
    return internal_client_fetch<QueryMangasArgs, Manga, Manga[]>('mangas', args, resultDescription);
};

export const people = (args: QueryPeopleArgs, resultDescription: QueryResultDescription<Person>): Promise<Person[]> => {
    return internal_client_fetch<QueryPeopleArgs, Person, Person[]>('people', args, resultDescription);
};

export const userRates = (args: QueryUserRatesArgs, resultDescription: QueryResultDescription<UserRate>): Promise<UserRate[]> => {
    return internal_client_fetch<QueryUserRatesArgs, UserRate, UserRate[]>('userRates', args, resultDescription);
};

export const users = (args: QueryUsersArgs, resultDescription: QueryResultDescription<User>): Promise<User[]> => {
    return internal_client_fetch<QueryUsersArgs, User, User[]>('users', args, resultDescription);
};

