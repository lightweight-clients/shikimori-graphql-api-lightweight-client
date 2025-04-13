import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string; }
    String: { input: string; output: string; }
    Boolean: { input: boolean; output: boolean; }
    Int: { input: number; output: number; }
    Float: { input: number; output: number; }
    AnimeKindString: { input: any; output: any; }
    AnimeStatusString: { input: any; output: any; }
    DurationString: { input: any; output: any; }
    ISO8601Date: { input: any; output: any; }
    ISO8601DateTime: { input: any; output: any; }
    MangaKindString: { input: any; output: any; }
    MangaStatusString: { input: any; output: any; }
    MylistString: { input: any; output: any; }
    OriginString: { input: any; output: any; }
    PositiveInt: { input: any; output: any; }
    RatingString: { input: any; output: any; }
    SeasonString: { input: any; output: any; }
};

export type Anime = {
    __typename?: 'Anime';
    airedOn?: Maybe<IncompleteDate>;
    characterRoles?: Maybe<Array<CharacterRole>>;
    chronology?: Maybe<Array<Anime>>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    descriptionHtml?: Maybe<Scalars['String']['output']>;
    descriptionSource?: Maybe<Scalars['String']['output']>;
    duration?: Maybe<Scalars['Int']['output']>;
    english?: Maybe<Scalars['String']['output']>;
    episodes: Scalars['Int']['output'];
    episodesAired: Scalars['Int']['output'];
    externalLinks?: Maybe<Array<ExternalLink>>;
    fandubbers: Array<Scalars['String']['output']>;
    fansubbers: Array<Scalars['String']['output']>;
    franchise?: Maybe<Scalars['String']['output']>;
    genres?: Maybe<Array<Genre>>;
    id: Scalars['ID']['output'];
    isCensored?: Maybe<Scalars['Boolean']['output']>;
    japanese?: Maybe<Scalars['String']['output']>;
    kind?: Maybe<AnimeKindEnum>;
    licenseNameRu?: Maybe<Scalars['String']['output']>;
    licensors?: Maybe<Array<Scalars['String']['output']>>;
    malId?: Maybe<Scalars['ID']['output']>;
    name: Scalars['String']['output'];
    nextEpisodeAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    opengraphImageUrl?: Maybe<Scalars['String']['output']>;
    origin?: Maybe<AnimeOriginEnum>;
    personRoles?: Maybe<Array<PersonRole>>;
    poster?: Maybe<Poster>;
    rating?: Maybe<AnimeRatingEnum>;
    related?: Maybe<Array<Related>>;
    releasedOn?: Maybe<IncompleteDate>;
    russian?: Maybe<Scalars['String']['output']>;
    score?: Maybe<Scalars['Float']['output']>;
    scoresStats?: Maybe<Array<ScoreStat>>;
    screenshots: Array<Screenshot>;
    season?: Maybe<Scalars['String']['output']>;
    status?: Maybe<AnimeStatusEnum>;
    statusesStats?: Maybe<Array<StatusStat>>;
    studios: Array<Studio>;
    synonyms: Array<Scalars['String']['output']>;
    topic?: Maybe<Topic>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    url: Scalars['String']['output'];
    userRate?: Maybe<UserRate>;
    videos: Array<Video>;
};

export type AnimeKindEnum =
    | 'cm'
    | 'movie'
    | 'music'
    | 'ona'
    | 'ova'
    | 'pv'
    | 'special'
    | 'tv'
    | 'tv_special';

export type AnimeOriginEnum =
    | 'book'
    | 'card_game'
    | 'four_koma_manga'
    | 'game'
    | 'light_novel'
    | 'manga'
    | 'mixed_media'
    | 'music'
    | 'novel'
    | 'original'
    | 'other'
    | 'picture_book'
    | 'radio'
    | 'unknown'
    | 'visual_novel'
    | 'web_manga'
    | 'web_novel';

export type AnimeRatingEnum =
    | 'g'
    | 'none'
    | 'pg'
    | 'pg_13'
    | 'r'
    | 'r_plus'
    | 'rx';

export type AnimeStatusEnum =
    | 'anons'
    | 'ongoing'
    | 'released';

export type Character = {
    __typename?: 'Character';
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    descriptionHtml?: Maybe<Scalars['String']['output']>;
    descriptionSource?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    isAnime: Scalars['Boolean']['output'];
    isManga: Scalars['Boolean']['output'];
    isRanobe: Scalars['Boolean']['output'];
    japanese?: Maybe<Scalars['String']['output']>;
    malId?: Maybe<Scalars['ID']['output']>;
    name: Scalars['String']['output'];
    poster?: Maybe<Poster>;
    russian?: Maybe<Scalars['String']['output']>;
    synonyms: Array<Scalars['String']['output']>;
    topic?: Maybe<Topic>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    url: Scalars['String']['output'];
};

export type CharacterRole = {
    __typename?: 'CharacterRole';
    character: Character;
    id: Scalars['ID']['output'];
    rolesEn: Array<Scalars['String']['output']>;
    rolesRu: Array<Scalars['String']['output']>;
};

export type Contest = {
    __typename?: 'Contest';
    description?: Maybe<Scalars['String']['output']>;
    descriptionHtml?: Maybe<Scalars['String']['output']>;
    descriptionSource?: Maybe<Scalars['String']['output']>;
    finishedOn?: Maybe<Scalars['ISO8601Date']['output']>;
    id: Scalars['ID']['output'];
    matchDuration?: Maybe<Scalars['Int']['output']>;
    matchesInterval?: Maybe<Scalars['Int']['output']>;
    matchesPerRound?: Maybe<Scalars['Int']['output']>;
    memberType: ContestMemberTypeEnum;
    name: Scalars['String']['output'];
    rounds: Array<ContestRound>;
    startedOn?: Maybe<Scalars['ISO8601Date']['output']>;
    state: ContestStateEnum;
    strategyType: ContestStrategyTypeEnum;
};

export type ContestMatch = {
    __typename?: 'ContestMatch';
    id: Scalars['ID']['output'];
    leftAnime?: Maybe<Anime>;
    leftCharacter?: Maybe<Character>;
    leftId?: Maybe<Scalars['Int']['output']>;
    leftVotes?: Maybe<Scalars['Int']['output']>;
    rightAnime?: Maybe<Anime>;
    rightCharacter?: Maybe<Character>;
    rightId?: Maybe<Scalars['Int']['output']>;
    rightVotes?: Maybe<Scalars['Int']['output']>;
    state: ContestMatchStateEnum;
    winnerId?: Maybe<Scalars['Int']['output']>;
};

export type ContestMatchStateEnum =
    | 'created'
    | 'finished'
    | 'freezed'
    | 'started';

export type ContestMemberTypeEnum =
    | 'anime'
    | 'character';

export type ContestRound = {
    __typename?: 'ContestRound';
    id: Scalars['ID']['output'];
    isAdditional: Scalars['Boolean']['output'];
    matches: Array<ContestMatch>;
    name: Scalars['String']['output'];
    number: Scalars['Int']['output'];
    state: ContestRoundStateEnum;
};

export type ContestRoundStateEnum =
    | 'created'
    | 'finished'
    | 'started';

export type ContestStateEnum =
    | 'created'
    | 'finished'
    | 'proposing'
    | 'started';

export type ContestStrategyTypeEnum =
    | 'double_elimination'
    | 'play_off'
    | 'swiss';

export type ExternalLink = {
    __typename?: 'ExternalLink';
    createdAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    id?: Maybe<Scalars['ID']['output']>;
    kind: ExternalLinkKindEnum;
    updatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    url: Scalars['String']['output'];
};

export type ExternalLinkKindEnum =
    | 'amazon'
    | 'anime_db'
    | 'anime_news_network'
    | 'crunchyroll'
    | 'hidive'
    | 'hulu'
    | 'ivi'
    | 'kage_project'
    | 'kinopoisk'
    | 'kinopoisk_hd'
    | 'mangachan'
    | 'mangadex'
    | 'mangafox'
    | 'mangahub'
    | 'mangalib'
    | 'mangaupdates'
    | 'myanimelist'
    | 'netflix'
    | 'novel_tl'
    | 'novelupdates'
    | 'official_site'
    | 'okko'
    | 'ranobelib'
    | 'readmanga'
    | 'remanga'
    | 'ruranobe'
    | 'smotret_anime'
    | 'twitter'
    | 'wikipedia'
    | 'wink'
    | 'world_art'
    | 'youtube';

export type Genre = {
    __typename?: 'Genre';
    entryType: GenreEntryTypeEnum;
    id: Scalars['ID']['output'];
    kind: GenreKindEnum;
    name: Scalars['String']['output'];
    russian: Scalars['String']['output'];
};

export type GenreEntryTypeEnum =
    | 'Anime'
    | 'Manga';

export type GenreKindEnum =
    | 'demographic'
    | 'genre'
    | 'theme';

export type IncompleteDate = {
    __typename?: 'IncompleteDate';
    date?: Maybe<Scalars['ISO8601Date']['output']>;
    day?: Maybe<Scalars['Int']['output']>;
    month?: Maybe<Scalars['Int']['output']>;
    year?: Maybe<Scalars['Int']['output']>;
};

export type Manga = {
    __typename?: 'Manga';
    airedOn?: Maybe<IncompleteDate>;
    chapters: Scalars['Int']['output'];
    characterRoles?: Maybe<Array<CharacterRole>>;
    chronology?: Maybe<Array<Manga>>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    descriptionHtml?: Maybe<Scalars['String']['output']>;
    descriptionSource?: Maybe<Scalars['String']['output']>;
    english?: Maybe<Scalars['String']['output']>;
    externalLinks?: Maybe<Array<ExternalLink>>;
    franchise?: Maybe<Scalars['String']['output']>;
    genres?: Maybe<Array<Genre>>;
    id: Scalars['ID']['output'];
    isCensored?: Maybe<Scalars['Boolean']['output']>;
    japanese?: Maybe<Scalars['String']['output']>;
    kind?: Maybe<MangaKindEnum>;
    licenseNameRu?: Maybe<Scalars['String']['output']>;
    licensors?: Maybe<Array<Scalars['String']['output']>>;
    malId?: Maybe<Scalars['ID']['output']>;
    name: Scalars['String']['output'];
    opengraphImageUrl?: Maybe<Scalars['String']['output']>;
    personRoles?: Maybe<Array<PersonRole>>;
    poster?: Maybe<Poster>;
    publishers: Array<Publisher>;
    related?: Maybe<Array<Related>>;
    releasedOn?: Maybe<IncompleteDate>;
    russian?: Maybe<Scalars['String']['output']>;
    score?: Maybe<Scalars['Float']['output']>;
    scoresStats?: Maybe<Array<ScoreStat>>;
    status?: Maybe<MangaStatusEnum>;
    statusesStats?: Maybe<Array<StatusStat>>;
    synonyms: Array<Scalars['String']['output']>;
    topic?: Maybe<Topic>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    url: Scalars['String']['output'];
    userRate?: Maybe<UserRate>;
    volumes: Scalars['Int']['output'];
};

export type MangaKindEnum =
    | 'doujin'
    | 'light_novel'
    | 'manga'
    | 'manhua'
    | 'manhwa'
    | 'novel'
    | 'one_shot';

export type MangaStatusEnum =
    | 'anons'
    | 'discontinued'
    | 'ongoing'
    | 'paused'
    | 'released';

export type Mutation = {
    __typename?: 'Mutation';
    testField: Scalars['String']['output'];
};

export type OrderEnum =
    | 'aired_on'
    | 'created_at'
    | 'created_at_desc'
    | 'episodes'
    | 'id'
    | 'id_desc'
    | 'kind'
    | 'name'
    | 'popularity'
    | 'random'
    | 'ranked'
    | 'ranked_random'
    | 'ranked_shiki'
    | 'status';

export type Person = {
    __typename?: 'Person';
    birthOn?: Maybe<IncompleteDate>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    deceasedOn?: Maybe<IncompleteDate>;
    id: Scalars['ID']['output'];
    isMangaka: Scalars['Boolean']['output'];
    isProducer: Scalars['Boolean']['output'];
    isSeyu: Scalars['Boolean']['output'];
    japanese?: Maybe<Scalars['String']['output']>;
    malId?: Maybe<Scalars['ID']['output']>;
    name: Scalars['String']['output'];
    poster?: Maybe<Poster>;
    russian?: Maybe<Scalars['String']['output']>;
    synonyms: Array<Scalars['String']['output']>;
    topic?: Maybe<Topic>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    url: Scalars['String']['output'];
    website?: Maybe<Scalars['String']['output']>;
};

export type PersonRole = {
    __typename?: 'PersonRole';
    id: Scalars['ID']['output'];
    person: Person;
    rolesEn: Array<Scalars['String']['output']>;
    rolesRu: Array<Scalars['String']['output']>;
};

export type Poster = {
    __typename?: 'Poster';
    id: Scalars['ID']['output'];
    main2xUrl: Scalars['String']['output'];
    mainAlt2xUrl: Scalars['String']['output'];
    mainAltUrl: Scalars['String']['output'];
    mainUrl: Scalars['String']['output'];
    mini2xUrl: Scalars['String']['output'];
    miniAlt2xUrl: Scalars['String']['output'];
    miniAltUrl: Scalars['String']['output'];
    miniUrl: Scalars['String']['output'];
    originalUrl: Scalars['String']['output'];
    preview2xUrl: Scalars['String']['output'];
    previewAlt2xUrl: Scalars['String']['output'];
    previewAltUrl: Scalars['String']['output'];
    previewUrl: Scalars['String']['output'];
};

export type Publisher = {
    __typename?: 'Publisher';
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
};

export type Query = {
    __typename?: 'Query';
    animes: Array<Anime>;
    characters: Array<Character>;
    contests: Array<Contest>;
    currentUser?: Maybe<User>;
    genres: Array<Genre>;
    mangas: Array<Manga>;
    people: Array<Person>;
    userRates: Array<UserRate>;
    users: Array<User>;
};

export type QueryAnimesArgs = {
    censored?: InputMaybe<Scalars['Boolean']['input']>;
    duration?: InputMaybe<Scalars['DurationString']['input']>;
    excludeIds?: InputMaybe<Scalars['String']['input']>;
    franchise?: InputMaybe<Scalars['String']['input']>;
    genre?: InputMaybe<Scalars['String']['input']>;
    ids?: InputMaybe<Scalars['String']['input']>;
    kind?: InputMaybe<Scalars['AnimeKindString']['input']>;
    limit?: InputMaybe<Scalars['PositiveInt']['input']>;
    mylist?: InputMaybe<Scalars['MylistString']['input']>;
    order?: InputMaybe<OrderEnum>;
    origin?: InputMaybe<Scalars['OriginString']['input']>;
    page?: InputMaybe<Scalars['PositiveInt']['input']>;
    rating?: InputMaybe<Scalars['RatingString']['input']>;
    score?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    season?: InputMaybe<Scalars['SeasonString']['input']>;
    status?: InputMaybe<Scalars['AnimeStatusString']['input']>;
    studio?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCharactersArgs = {
    ids?: InputMaybe<Array<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['PositiveInt']['input']>;
    page?: InputMaybe<Scalars['PositiveInt']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryContestsArgs = {
    ids?: InputMaybe<Array<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['PositiveInt']['input']>;
    page?: InputMaybe<Scalars['PositiveInt']['input']>;
};


export type QueryGenresArgs = {
    entryType: GenreEntryTypeEnum;
};


export type QueryMangasArgs = {
    censored?: InputMaybe<Scalars['Boolean']['input']>;
    excludeIds?: InputMaybe<Scalars['String']['input']>;
    franchise?: InputMaybe<Scalars['String']['input']>;
    genre?: InputMaybe<Scalars['String']['input']>;
    ids?: InputMaybe<Scalars['String']['input']>;
    kind?: InputMaybe<Scalars['MangaKindString']['input']>;
    limit?: InputMaybe<Scalars['PositiveInt']['input']>;
    mylist?: InputMaybe<Scalars['MylistString']['input']>;
    order?: InputMaybe<OrderEnum>;
    page?: InputMaybe<Scalars['PositiveInt']['input']>;
    publisher?: InputMaybe<Scalars['String']['input']>;
    score?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    season?: InputMaybe<Scalars['SeasonString']['input']>;
    status?: InputMaybe<Scalars['MangaStatusString']['input']>;
};


export type QueryPeopleArgs = {
    ids?: InputMaybe<Array<Scalars['ID']['input']>>;
    isMangaka?: InputMaybe<Scalars['Boolean']['input']>;
    isProducer?: InputMaybe<Scalars['Boolean']['input']>;
    isSeyu?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['PositiveInt']['input']>;
    page?: InputMaybe<Scalars['PositiveInt']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserRatesArgs = {
    limit?: InputMaybe<Scalars['PositiveInt']['input']>;
    order?: InputMaybe<UserRateOrderInputType>;
    page?: InputMaybe<Scalars['PositiveInt']['input']>;
    status?: InputMaybe<UserRateStatusEnum>;
    targetType?: InputMaybe<UserRateTargetTypeEnum>;
    userId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersArgs = {
    ids?: InputMaybe<Array<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['PositiveInt']['input']>;
    page?: InputMaybe<Scalars['PositiveInt']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
};

export type Related = {
    __typename?: 'Related';
    anime?: Maybe<Anime>;
    id: Scalars['ID']['output'];
    manga?: Maybe<Manga>;
    /** @deprecated use relation_kind/relation_text instead. This field will be deleted after 2025-01-01 */
    relationEn: Scalars['String']['output'];
    relationKind: RelationKindEnum;
    /** @deprecated use relation_kind/relation_text instead. This field will be deleted after 2025-01-01 */
    relationRu: Scalars['String']['output'];
    relationText: Scalars['String']['output'];
};

export type RelationKindEnum =
    | 'adaptation'
    | 'alternative_setting'
    | 'alternative_version'
    | 'character'
    | 'full_story'
    | 'other'
    | 'parent_story'
    | 'prequel'
    | 'sequel'
    | 'side_story'
    | 'spin_off'
    | 'summary';

export type ScoreStat = {
    __typename?: 'ScoreStat';
    count: Scalars['Int']['output'];
    score: Scalars['Int']['output'];
};

export type Screenshot = {
    __typename?: 'Screenshot';
    id: Scalars['ID']['output'];
    originalUrl: Scalars['String']['output'];
    x166Url: Scalars['String']['output'];
    x332Url: Scalars['String']['output'];
};

export type SortOrderEnum =
    | 'asc'
    | 'desc';

export type StatusStat = {
    __typename?: 'StatusStat';
    count: Scalars['Int']['output'];
    status: UserRateStatusEnum;
};

export type Studio = {
    __typename?: 'Studio';
    id: Scalars['ID']['output'];
    imageUrl?: Maybe<Scalars['String']['output']>;
    name: Scalars['String']['output'];
};

export type Topic = {
    __typename?: 'Topic';
    body: Scalars['String']['output'];
    commentsCount: Scalars['Int']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    htmlBody: Scalars['String']['output'];
    id?: Maybe<Scalars['ID']['output']>;
    tags: Array<Scalars['String']['output']>;
    title: Scalars['String']['output'];
    type: Scalars['String']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    url: Scalars['String']['output'];
};

export type User = {
    __typename?: 'User';
    avatarUrl: Scalars['String']['output'];
    id: Scalars['ID']['output'];
    lastOnlineAt: Scalars['ISO8601DateTime']['output'];
    nickname: Scalars['String']['output'];
    url: Scalars['String']['output'];
};

export type UserRate = {
    __typename?: 'UserRate';
    anime?: Maybe<Anime>;
    chapters: Scalars['Int']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    episodes: Scalars['Int']['output'];
    id: Scalars['ID']['output'];
    manga?: Maybe<Manga>;
    rewatches: Scalars['Int']['output'];
    score: Scalars['Int']['output'];
    status: UserRateStatusEnum;
    text?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    volumes: Scalars['Int']['output'];
};

export type UserRateOrderFieldEnum =
    | 'id'
    | 'updated_at';

export type UserRateOrderInputType = {
    field: UserRateOrderFieldEnum;
    order: SortOrderEnum;
};

export type UserRateStatusEnum =
    | 'completed'
    | 'dropped'
    | 'on_hold'
    | 'planned'
    | 'rewatching'
    | 'watching';

export type UserRateTargetTypeEnum =
    | 'Anime'
    | 'Manga';

export type Video = {
    __typename?: 'Video';
    id: Scalars['ID']['output'];
    imageUrl: Scalars['String']['output'];
    kind: VideoKindEnum;
    name?: Maybe<Scalars['String']['output']>;
    playerUrl: Scalars['String']['output'];
    url: Scalars['String']['output'];
};

export type VideoKindEnum =
    | 'character_trailer'
    | 'clip'
    | 'cm'
    | 'ed'
    | 'episode_preview'
    | 'op'
    | 'op_ed_clip'
    | 'other'
    | 'pv';



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
    | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
    | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
    | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
    | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
    parent: TParent,
    context: TContext,
    info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
    next: NextResolverFn<TResult>,
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
    Anime: ResolverTypeWrapper<Anime>;
    AnimeKindEnum: AnimeKindEnum;
    AnimeKindString: ResolverTypeWrapper<Scalars['AnimeKindString']['output']>;
    AnimeOriginEnum: AnimeOriginEnum;
    AnimeRatingEnum: AnimeRatingEnum;
    AnimeStatusEnum: AnimeStatusEnum;
    AnimeStatusString: ResolverTypeWrapper<Scalars['AnimeStatusString']['output']>;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
    Character: ResolverTypeWrapper<Character>;
    CharacterRole: ResolverTypeWrapper<CharacterRole>;
    Contest: ResolverTypeWrapper<Contest>;
    ContestMatch: ResolverTypeWrapper<ContestMatch>;
    ContestMatchStateEnum: ContestMatchStateEnum;
    ContestMemberTypeEnum: ContestMemberTypeEnum;
    ContestRound: ResolverTypeWrapper<ContestRound>;
    ContestRoundStateEnum: ContestRoundStateEnum;
    ContestStateEnum: ContestStateEnum;
    ContestStrategyTypeEnum: ContestStrategyTypeEnum;
    DurationString: ResolverTypeWrapper<Scalars['DurationString']['output']>;
    ExternalLink: ResolverTypeWrapper<ExternalLink>;
    ExternalLinkKindEnum: ExternalLinkKindEnum;
    Float: ResolverTypeWrapper<Scalars['Float']['output']>;
    Genre: ResolverTypeWrapper<Genre>;
    GenreEntryTypeEnum: GenreEntryTypeEnum;
    GenreKindEnum: GenreKindEnum;
    ID: ResolverTypeWrapper<Scalars['ID']['output']>;
    ISO8601Date: ResolverTypeWrapper<Scalars['ISO8601Date']['output']>;
    ISO8601DateTime: ResolverTypeWrapper<Scalars['ISO8601DateTime']['output']>;
    IncompleteDate: ResolverTypeWrapper<IncompleteDate>;
    Int: ResolverTypeWrapper<Scalars['Int']['output']>;
    Manga: ResolverTypeWrapper<Manga>;
    MangaKindEnum: MangaKindEnum;
    MangaKindString: ResolverTypeWrapper<Scalars['MangaKindString']['output']>;
    MangaStatusEnum: MangaStatusEnum;
    MangaStatusString: ResolverTypeWrapper<Scalars['MangaStatusString']['output']>;
    Mutation: ResolverTypeWrapper<{}>;
    MylistString: ResolverTypeWrapper<Scalars['MylistString']['output']>;
    OrderEnum: OrderEnum;
    OriginString: ResolverTypeWrapper<Scalars['OriginString']['output']>;
    Person: ResolverTypeWrapper<Person>;
    PersonRole: ResolverTypeWrapper<PersonRole>;
    PositiveInt: ResolverTypeWrapper<Scalars['PositiveInt']['output']>;
    Poster: ResolverTypeWrapper<Poster>;
    Publisher: ResolverTypeWrapper<Publisher>;
    Query: ResolverTypeWrapper<{}>;
    RatingString: ResolverTypeWrapper<Scalars['RatingString']['output']>;
    Related: ResolverTypeWrapper<Related>;
    RelationKindEnum: RelationKindEnum;
    ScoreStat: ResolverTypeWrapper<ScoreStat>;
    Screenshot: ResolverTypeWrapper<Screenshot>;
    SeasonString: ResolverTypeWrapper<Scalars['SeasonString']['output']>;
    SortOrderEnum: SortOrderEnum;
    StatusStat: ResolverTypeWrapper<StatusStat>;
    String: ResolverTypeWrapper<Scalars['String']['output']>;
    Studio: ResolverTypeWrapper<Studio>;
    Topic: ResolverTypeWrapper<Topic>;
    User: ResolverTypeWrapper<User>;
    UserRate: ResolverTypeWrapper<UserRate>;
    UserRateOrderFieldEnum: UserRateOrderFieldEnum;
    UserRateOrderInputType: UserRateOrderInputType;
    UserRateStatusEnum: UserRateStatusEnum;
    UserRateTargetTypeEnum: UserRateTargetTypeEnum;
    Video: ResolverTypeWrapper<Video>;
    VideoKindEnum: VideoKindEnum;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
    Anime: Anime;
    AnimeKindString: Scalars['AnimeKindString']['output'];
    AnimeStatusString: Scalars['AnimeStatusString']['output'];
    Boolean: Scalars['Boolean']['output'];
    Character: Character;
    CharacterRole: CharacterRole;
    Contest: Contest;
    ContestMatch: ContestMatch;
    ContestRound: ContestRound;
    DurationString: Scalars['DurationString']['output'];
    ExternalLink: ExternalLink;
    Float: Scalars['Float']['output'];
    Genre: Genre;
    ID: Scalars['ID']['output'];
    ISO8601Date: Scalars['ISO8601Date']['output'];
    ISO8601DateTime: Scalars['ISO8601DateTime']['output'];
    IncompleteDate: IncompleteDate;
    Int: Scalars['Int']['output'];
    Manga: Manga;
    MangaKindString: Scalars['MangaKindString']['output'];
    MangaStatusString: Scalars['MangaStatusString']['output'];
    Mutation: {};
    MylistString: Scalars['MylistString']['output'];
    OriginString: Scalars['OriginString']['output'];
    Person: Person;
    PersonRole: PersonRole;
    PositiveInt: Scalars['PositiveInt']['output'];
    Poster: Poster;
    Publisher: Publisher;
    Query: {};
    RatingString: Scalars['RatingString']['output'];
    Related: Related;
    ScoreStat: ScoreStat;
    Screenshot: Screenshot;
    SeasonString: Scalars['SeasonString']['output'];
    StatusStat: StatusStat;
    String: Scalars['String']['output'];
    Studio: Studio;
    Topic: Topic;
    User: User;
    UserRate: UserRate;
    UserRateOrderInputType: UserRateOrderInputType;
    Video: Video;
};

export type AnimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Anime'] = ResolversParentTypes['Anime']> = {
    airedOn?: Resolver<Maybe<ResolversTypes['IncompleteDate']>, ParentType, ContextType>;
    characterRoles?: Resolver<Maybe<Array<ResolversTypes['CharacterRole']>>, ParentType, ContextType>;
    chronology?: Resolver<Maybe<Array<ResolversTypes['Anime']>>, ParentType, ContextType>;
    createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    descriptionHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    descriptionSource?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    english?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    episodes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    episodesAired?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    externalLinks?: Resolver<Maybe<Array<ResolversTypes['ExternalLink']>>, ParentType, ContextType>;
    fandubbers?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
    fansubbers?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
    franchise?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    genres?: Resolver<Maybe<Array<ResolversTypes['Genre']>>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    isCensored?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    japanese?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    kind?: Resolver<Maybe<ResolversTypes['AnimeKindEnum']>, ParentType, ContextType>;
    licenseNameRu?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    licensors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
    malId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    nextEpisodeAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
    opengraphImageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    origin?: Resolver<Maybe<ResolversTypes['AnimeOriginEnum']>, ParentType, ContextType>;
    personRoles?: Resolver<Maybe<Array<ResolversTypes['PersonRole']>>, ParentType, ContextType>;
    poster?: Resolver<Maybe<ResolversTypes['Poster']>, ParentType, ContextType>;
    rating?: Resolver<Maybe<ResolversTypes['AnimeRatingEnum']>, ParentType, ContextType>;
    related?: Resolver<Maybe<Array<ResolversTypes['Related']>>, ParentType, ContextType>;
    releasedOn?: Resolver<Maybe<ResolversTypes['IncompleteDate']>, ParentType, ContextType>;
    russian?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    scoresStats?: Resolver<Maybe<Array<ResolversTypes['ScoreStat']>>, ParentType, ContextType>;
    screenshots?: Resolver<Array<ResolversTypes['Screenshot']>, ParentType, ContextType>;
    season?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['AnimeStatusEnum']>, ParentType, ContextType>;
    statusesStats?: Resolver<Maybe<Array<ResolversTypes['StatusStat']>>, ParentType, ContextType>;
    studios?: Resolver<Array<ResolversTypes['Studio']>, ParentType, ContextType>;
    synonyms?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
    topic?: Resolver<Maybe<ResolversTypes['Topic']>, ParentType, ContextType>;
    updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
    url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    userRate?: Resolver<Maybe<ResolversTypes['UserRate']>, ParentType, ContextType>;
    videos?: Resolver<Array<ResolversTypes['Video']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface AnimeKindStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AnimeKindString'], any> {
    name: 'AnimeKindString';
}

export interface AnimeStatusStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AnimeStatusString'], any> {
    name: 'AnimeStatusString';
}

export type CharacterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Character'] = ResolversParentTypes['Character']> = {
    createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    descriptionHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    descriptionSource?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    isAnime?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    isManga?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    isRanobe?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    japanese?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    malId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    poster?: Resolver<Maybe<ResolversTypes['Poster']>, ParentType, ContextType>;
    russian?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    synonyms?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
    topic?: Resolver<Maybe<ResolversTypes['Topic']>, ParentType, ContextType>;
    updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
    url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CharacterRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['CharacterRole'] = ResolversParentTypes['CharacterRole']> = {
    character?: Resolver<ResolversTypes['Character'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    rolesEn?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
    rolesRu?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContestResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contest'] = ResolversParentTypes['Contest']> = {
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    descriptionHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    descriptionSource?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    finishedOn?: Resolver<Maybe<ResolversTypes['ISO8601Date']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    matchDuration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    matchesInterval?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    matchesPerRound?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    memberType?: Resolver<ResolversTypes['ContestMemberTypeEnum'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    rounds?: Resolver<Array<ResolversTypes['ContestRound']>, ParentType, ContextType>;
    startedOn?: Resolver<Maybe<ResolversTypes['ISO8601Date']>, ParentType, ContextType>;
    state?: Resolver<ResolversTypes['ContestStateEnum'], ParentType, ContextType>;
    strategyType?: Resolver<ResolversTypes['ContestStrategyTypeEnum'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContestMatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContestMatch'] = ResolversParentTypes['ContestMatch']> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    leftAnime?: Resolver<Maybe<ResolversTypes['Anime']>, ParentType, ContextType>;
    leftCharacter?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>;
    leftId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    leftVotes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    rightAnime?: Resolver<Maybe<ResolversTypes['Anime']>, ParentType, ContextType>;
    rightCharacter?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>;
    rightId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    rightVotes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    state?: Resolver<ResolversTypes['ContestMatchStateEnum'], ParentType, ContextType>;
    winnerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContestRoundResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContestRound'] = ResolversParentTypes['ContestRound']> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    isAdditional?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    matches?: Resolver<Array<ResolversTypes['ContestMatch']>, ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    state?: Resolver<ResolversTypes['ContestRoundStateEnum'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DurationStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DurationString'], any> {
    name: 'DurationString';
}

export type ExternalLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExternalLink'] = ResolversParentTypes['ExternalLink']> = {
    createdAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
    kind?: Resolver<ResolversTypes['ExternalLinkKindEnum'], ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
    url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenreResolvers<ContextType = any, ParentType extends ResolversParentTypes['Genre'] = ResolversParentTypes['Genre']> = {
    entryType?: Resolver<ResolversTypes['GenreEntryTypeEnum'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    kind?: Resolver<ResolversTypes['GenreKindEnum'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    russian?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface Iso8601DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISO8601Date'], any> {
    name: 'ISO8601Date';
}

export interface Iso8601DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISO8601DateTime'], any> {
    name: 'ISO8601DateTime';
}

export type IncompleteDateResolvers<ContextType = any, ParentType extends ResolversParentTypes['IncompleteDate'] = ResolversParentTypes['IncompleteDate']> = {
    date?: Resolver<Maybe<ResolversTypes['ISO8601Date']>, ParentType, ContextType>;
    day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MangaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Manga'] = ResolversParentTypes['Manga']> = {
    airedOn?: Resolver<Maybe<ResolversTypes['IncompleteDate']>, ParentType, ContextType>;
    chapters?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    characterRoles?: Resolver<Maybe<Array<ResolversTypes['CharacterRole']>>, ParentType, ContextType>;
    chronology?: Resolver<Maybe<Array<ResolversTypes['Manga']>>, ParentType, ContextType>;
    createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    descriptionHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    descriptionSource?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    english?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    externalLinks?: Resolver<Maybe<Array<ResolversTypes['ExternalLink']>>, ParentType, ContextType>;
    franchise?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    genres?: Resolver<Maybe<Array<ResolversTypes['Genre']>>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    isCensored?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    japanese?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    kind?: Resolver<Maybe<ResolversTypes['MangaKindEnum']>, ParentType, ContextType>;
    licenseNameRu?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    licensors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
    malId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    opengraphImageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    personRoles?: Resolver<Maybe<Array<ResolversTypes['PersonRole']>>, ParentType, ContextType>;
    poster?: Resolver<Maybe<ResolversTypes['Poster']>, ParentType, ContextType>;
    publishers?: Resolver<Array<ResolversTypes['Publisher']>, ParentType, ContextType>;
    related?: Resolver<Maybe<Array<ResolversTypes['Related']>>, ParentType, ContextType>;
    releasedOn?: Resolver<Maybe<ResolversTypes['IncompleteDate']>, ParentType, ContextType>;
    russian?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    scoresStats?: Resolver<Maybe<Array<ResolversTypes['ScoreStat']>>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['MangaStatusEnum']>, ParentType, ContextType>;
    statusesStats?: Resolver<Maybe<Array<ResolversTypes['StatusStat']>>, ParentType, ContextType>;
    synonyms?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
    topic?: Resolver<Maybe<ResolversTypes['Topic']>, ParentType, ContextType>;
    updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
    url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    userRate?: Resolver<Maybe<ResolversTypes['UserRate']>, ParentType, ContextType>;
    volumes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface MangaKindStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['MangaKindString'], any> {
    name: 'MangaKindString';
}

export interface MangaStatusStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['MangaStatusString'], any> {
    name: 'MangaStatusString';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
    testField?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export interface MylistStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['MylistString'], any> {
    name: 'MylistString';
}

export interface OriginStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['OriginString'], any> {
    name: 'OriginString';
}

export type PersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = {
    birthOn?: Resolver<Maybe<ResolversTypes['IncompleteDate']>, ParentType, ContextType>;
    createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
    deceasedOn?: Resolver<Maybe<ResolversTypes['IncompleteDate']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    isMangaka?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    isProducer?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    isSeyu?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    japanese?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    malId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    poster?: Resolver<Maybe<ResolversTypes['Poster']>, ParentType, ContextType>;
    russian?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    synonyms?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
    topic?: Resolver<Maybe<ResolversTypes['Topic']>, ParentType, ContextType>;
    updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
    url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonRole'] = ResolversParentTypes['PersonRole']> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    person?: Resolver<ResolversTypes['Person'], ParentType, ContextType>;
    rolesEn?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
    rolesRu?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface PositiveIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PositiveInt'], any> {
    name: 'PositiveInt';
}

export type PosterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Poster'] = ResolversParentTypes['Poster']> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    main2xUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    mainAlt2xUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    mainAltUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    mainUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    mini2xUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    miniAlt2xUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    miniAltUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    miniUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    originalUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    preview2xUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    previewAlt2xUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    previewAltUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    previewUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublisherResolvers<ContextType = any, ParentType extends ResolversParentTypes['Publisher'] = ResolversParentTypes['Publisher']> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
    animes?: Resolver<Array<ResolversTypes['Anime']>, ParentType, ContextType, RequireFields<QueryAnimesArgs, 'limit' | 'order' | 'page'>>;
    characters?: Resolver<Array<ResolversTypes['Character']>, ParentType, ContextType, RequireFields<QueryCharactersArgs, 'limit' | 'page'>>;
    contests?: Resolver<Array<ResolversTypes['Contest']>, ParentType, ContextType, RequireFields<QueryContestsArgs, 'limit' | 'page'>>;
    currentUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    genres?: Resolver<Array<ResolversTypes['Genre']>, ParentType, ContextType, RequireFields<QueryGenresArgs, 'entryType'>>;
    mangas?: Resolver<Array<ResolversTypes['Manga']>, ParentType, ContextType, RequireFields<QueryMangasArgs, 'limit' | 'order' | 'page'>>;
    people?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<QueryPeopleArgs, 'limit' | 'page'>>;
    userRates?: Resolver<Array<ResolversTypes['UserRate']>, ParentType, ContextType, RequireFields<QueryUserRatesArgs, 'limit' | 'page'>>;
    users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUsersArgs, 'limit' | 'page'>>;
};

export interface RatingStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RatingString'], any> {
    name: 'RatingString';
}

export type RelatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['Related'] = ResolversParentTypes['Related']> = {
    anime?: Resolver<Maybe<ResolversTypes['Anime']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    manga?: Resolver<Maybe<ResolversTypes['Manga']>, ParentType, ContextType>;
    relationEn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    relationKind?: Resolver<ResolversTypes['RelationKindEnum'], ParentType, ContextType>;
    relationRu?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    relationText?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScoreStatResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScoreStat'] = ResolversParentTypes['ScoreStat']> = {
    count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    score?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScreenshotResolvers<ContextType = any, ParentType extends ResolversParentTypes['Screenshot'] = ResolversParentTypes['Screenshot']> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    originalUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    x166Url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    x332Url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface SeasonStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['SeasonString'], any> {
    name: 'SeasonString';
}

export type StatusStatResolvers<ContextType = any, ParentType extends ResolversParentTypes['StatusStat'] = ResolversParentTypes['StatusStat']> = {
    count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    status?: Resolver<ResolversTypes['UserRateStatusEnum'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudioResolvers<ContextType = any, ParentType extends ResolversParentTypes['Studio'] = ResolversParentTypes['Studio']> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TopicResolvers<ContextType = any, ParentType extends ResolversParentTypes['Topic'] = ResolversParentTypes['Topic']> = {
    body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    commentsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
    htmlBody?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
    tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
    title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
    url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
    avatarUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    lastOnlineAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
    nickname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserRateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserRate'] = ResolversParentTypes['UserRate']> = {
    anime?: Resolver<Maybe<ResolversTypes['Anime']>, ParentType, ContextType>;
    chapters?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
    episodes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    manga?: Resolver<Maybe<ResolversTypes['Manga']>, ParentType, ContextType>;
    rewatches?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    score?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    status?: Resolver<ResolversTypes['UserRateStatusEnum'], ParentType, ContextType>;
    text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
    volumes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Video'] = ResolversParentTypes['Video']> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    kind?: Resolver<ResolversTypes['VideoKindEnum'], ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    playerUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
    Anime?: AnimeResolvers<ContextType>;
    AnimeKindString?: GraphQLScalarType;
    AnimeStatusString?: GraphQLScalarType;
    Character?: CharacterResolvers<ContextType>;
    CharacterRole?: CharacterRoleResolvers<ContextType>;
    Contest?: ContestResolvers<ContextType>;
    ContestMatch?: ContestMatchResolvers<ContextType>;
    ContestRound?: ContestRoundResolvers<ContextType>;
    DurationString?: GraphQLScalarType;
    ExternalLink?: ExternalLinkResolvers<ContextType>;
    Genre?: GenreResolvers<ContextType>;
    ISO8601Date?: GraphQLScalarType;
    ISO8601DateTime?: GraphQLScalarType;
    IncompleteDate?: IncompleteDateResolvers<ContextType>;
    Manga?: MangaResolvers<ContextType>;
    MangaKindString?: GraphQLScalarType;
    MangaStatusString?: GraphQLScalarType;
    Mutation?: MutationResolvers<ContextType>;
    MylistString?: GraphQLScalarType;
    OriginString?: GraphQLScalarType;
    Person?: PersonResolvers<ContextType>;
    PersonRole?: PersonRoleResolvers<ContextType>;
    PositiveInt?: GraphQLScalarType;
    Poster?: PosterResolvers<ContextType>;
    Publisher?: PublisherResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    RatingString?: GraphQLScalarType;
    Related?: RelatedResolvers<ContextType>;
    ScoreStat?: ScoreStatResolvers<ContextType>;
    Screenshot?: ScreenshotResolvers<ContextType>;
    SeasonString?: GraphQLScalarType;
    StatusStat?: StatusStatResolvers<ContextType>;
    Studio?: StudioResolvers<ContextType>;
    Topic?: TopicResolvers<ContextType>;
    User?: UserResolvers<ContextType>;
    UserRate?: UserRateResolvers<ContextType>;
    Video?: VideoResolvers<ContextType>;
};


export type AnimeKindString = Scalars["AnimeKindString"];
export type AnimeStatusString = Scalars["AnimeStatusString"];
export type DurationString = Scalars["DurationString"];
export type Iso8601Date = Scalars["ISO8601Date"];
export type Iso8601DateTime = Scalars["ISO8601DateTime"];
export type MangaKindString = Scalars["MangaKindString"];
export type MangaStatusString = Scalars["MangaStatusString"];
export type MylistString = Scalars["MylistString"];
export type OriginString = Scalars["OriginString"];
export type PositiveInt = Scalars["PositiveInt"];
export type RatingString = Scalars["RatingString"];
export type SeasonString = Scalars["SeasonString"];
