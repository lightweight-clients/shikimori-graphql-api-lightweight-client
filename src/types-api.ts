// noinspection JSUnusedGlobalSymbols
/* eslint-disable  @typescript-eslint/no-explicit-any */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  AnimeKindString: { input: any; output: any };
  AnimeStatusString: { input: any; output: any };
  DurationString: { input: any; output: any };
  ISO8601Date: { input: any; output: any };
  ISO8601DateTime: { input: any; output: any };
  MangaKindString: { input: any; output: any };
  MangaStatusString: { input: any; output: any };
  MylistString: { input: any; output: any };
  OriginString: { input: any; output: any };
  PositiveInt: { input: any; output: any };
  RatingString: { input: any; output: any };
  SeasonString: { input: any; output: any };
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
  /** Duration in minutes */
  duration?: Maybe<Scalars['Int']['output']>;
  english?: Maybe<Scalars['String']['output']>;
  episodes: Scalars['Int']['output'];
  episodesAired: Scalars['Int']['output'];
  externalLinks?: Maybe<Array<ExternalLink>>;
  fandubbers: Array<Scalars['String']['output']>;
  fansubbers: Array<Scalars['String']['output']>;
  /** Franchise name */
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

export enum AnimeKindEnum {
  /** TV Series */
  Tv = 'tv',
  /** Movie */
  Movie = 'movie',
  /** OVA */
  Ova = 'ova',
  /** ONA */
  Ona = 'ona',
  /** Special */
  Special = 'special',
  /** TV Special */
  TvSpecial = 'tv_special',
  /** Music */
  Music = 'music',
  /** PV */
  Pv = 'pv',
  /** CM */
  Cm = 'cm',
}

export enum AnimeOriginEnum {
  /** Original */
  Original = 'original',
  /** Manga */
  Manga = 'manga',
  /** Web manga */
  WebManga = 'web_manga',
  /** 4-koma manga */
  FourKomaManga = 'four_koma_manga',
  /** Novel */
  Novel = 'novel',
  /** Web novel */
  WebNovel = 'web_novel',
  /** Visual novel */
  VisualNovel = 'visual_novel',
  /** Light novel */
  LightNovel = 'light_novel',
  /** Game */
  Game = 'game',
  /** Card game */
  CardGame = 'card_game',
  /** Music */
  Music = 'music',
  /** Radio */
  Radio = 'radio',
  /** Book */
  Book = 'book',
  /** Picture book */
  PictureBook = 'picture_book',
  /** Mixed media */
  MixedMedia = 'mixed_media',
  /** Other */
  Other = 'other',
  /** Unknown */
  Unknown = 'unknown',
}

export enum AnimeRatingEnum {
  /** None */
  None = 'none',
  /** G */
  G = 'g',
  /** PG */
  Pg = 'pg',
  /** PG-13 */
  Pg_13 = 'pg_13',
  /** R-17 */
  R = 'r',
  /** R+ */
  RPlus = 'r_plus',
  /** Rx */
  Rx = 'rx',
}

export enum AnimeStatusEnum {
  /** Planned */
  Anons = 'anons',
  /** Airing */
  Ongoing = 'ongoing',
  /** Released */
  Released = 'released',
}

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

export enum ContestMatchStateEnum {
  /** created */
  Created = 'created',
  /** started */
  Started = 'started',
  /** freezed */
  Freezed = 'freezed',
  /** finished */
  Finished = 'finished',
}

export enum ContestMemberTypeEnum {
  /** Anime */
  Anime = 'anime',
  /** Characters */
  Character = 'character',
}

export type ContestRound = {
  __typename?: 'ContestRound';
  id: Scalars['ID']['output'];
  isAdditional: Scalars['Boolean']['output'];
  matches: Array<ContestMatch>;
  name: Scalars['String']['output'];
  number: Scalars['Int']['output'];
  state: ContestRoundStateEnum;
};

export enum ContestRoundStateEnum {
  /** created */
  Created = 'created',
  /** started */
  Started = 'started',
  /** finished */
  Finished = 'finished',
}

export enum ContestStateEnum {
  /** created */
  Created = 'created',
  /** proposing */
  Proposing = 'proposing',
  /** started */
  Started = 'started',
  /** finished */
  Finished = 'finished',
}

export enum ContestStrategyTypeEnum {
  /** Double elimination */
  DoubleElimination = 'double_elimination',
  /** Olympic system */
  PlayOff = 'play_off',
  /** Swiss system */
  Swiss = 'swiss',
}

export type ExternalLink = {
  __typename?: 'ExternalLink';
  createdAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  kind: ExternalLinkKindEnum;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  url: Scalars['String']['output'];
};

export enum ExternalLinkKindEnum {
  /** Official Site */
  OfficialSite = 'official_site',
  /** Wikipedia */
  Wikipedia = 'wikipedia',
  /** Anime News Network */
  AnimeNewsNetwork = 'anime_news_network',
  /** MyAnimeList */
  Myanimelist = 'myanimelist',
  /** Amediateka */
  Amediateka = 'amediateka',
  /** AniDB */
  AnimeDb = 'anime_db',
  /** World Art */
  WorldArt = 'world_art',
  /** KinoPoisk */
  Kinopoisk = 'kinopoisk',
  /** Kage Project */
  KageProject = 'kage_project',
  /** Twitter/X */
  Twitter = 'twitter',
  /** Anime 365 */
  SmotretAnime = 'smotret_anime',
  /** Crunchyroll */
  Crunchyroll = 'crunchyroll',
  /** Amazon */
  Amazon = 'amazon',
  /** Hidive */
  Hidive = 'hidive',
  /** Hulu */
  Hulu = 'hulu',
  /** Ivi */
  Ivi = 'ivi',
  /** KinoPoisk HD */
  KinopoiskHd = 'kinopoisk_hd',
  /** Wink */
  Wink = 'wink',
  /** Netflix */
  Netflix = 'netflix',
  /** Okko */
  Okko = 'okko',
  /** Youtube */
  Youtube = 'youtube',
  /** ReadManga */
  Readmanga = 'readmanga',
  /** MangaLib */
  Mangalib = 'mangalib',
  /** ReManga */
  Remanga = 'remanga',
  /** Baka-Updates */
  Mangaupdates = 'mangaupdates',
  /** MangaDex */
  Mangadex = 'mangadex',
  /** MangaFox */
  Mangafox = 'mangafox',
  /** Mangachan */
  Mangachan = 'mangachan',
  /** Mangahub */
  Mangahub = 'mangahub',
  /** Novel.tl */
  NovelTl = 'novel_tl',
  /** RuRanobe */
  Ruranobe = 'ruranobe',
  /** RanobeLib */
  Ranobelib = 'ranobelib',
  /** Novel Updates */
  Novelupdates = 'novelupdates',
}

export type Genre = {
  __typename?: 'Genre';
  entryType: GenreEntryTypeEnum;
  id: Scalars['ID']['output'];
  kind: GenreKindEnum;
  name: Scalars['String']['output'];
  russian: Scalars['String']['output'];
};

export enum GenreEntryTypeEnum {
  /** Anime */
  Anime = 'Anime',
  /** Manga */
  Manga = 'Manga',
}

export enum GenreKindEnum {
  /** Demographic */
  Demographic = 'demographic',
  /** Genre */
  Genre = 'genre',
  /** Theme */
  Theme = 'theme',
}

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
  /** Franchise name */
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

export enum MangaKindEnum {
  /** Manga */
  Manga = 'manga',
  /** Manhwa */
  Manhwa = 'manhwa',
  /** Manhua */
  Manhua = 'manhua',
  /** Light Novel */
  LightNovel = 'light_novel',
  /** Novel */
  Novel = 'novel',
  /** One Shot */
  OneShot = 'one_shot',
  /** Doujin */
  Doujin = 'doujin',
}

export enum MangaStatusEnum {
  /** Planned */
  Anons = 'anons',
  /** Publishing */
  Ongoing = 'ongoing',
  /** Published */
  Released = 'released',
  /** Paused */
  Paused = 'paused',
  /** Discontinued */
  Discontinued = 'discontinued',
}

export type Mutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String']['output'];
};

export enum OrderEnum {
  /** By ID */
  Id = 'id',
  /** id_desc */
  IdDesc = 'id_desc',
  /** By rank */
  Ranked = 'ranked',
  /** By type */
  Kind = 'kind',
  /** By popularity */
  Popularity = 'popularity',
  /** In alphabetical order */
  Name = 'name',
  /** By release date */
  AiredOn = 'aired_on',
  /** By number of episodes */
  Episodes = 'episodes',
  /** By status */
  Status = 'status',
  /** By random */
  Random = 'random',
  /** By random */
  RankedRandom = 'ranked_random',
  /** By Shikimori ranking */
  RankedShiki = 'ranked_shiki',
  /** created_at */
  CreatedAt = 'created_at',
  /** created_at_desc */
  CreatedAtDesc = 'created_at_desc',
}

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
  page?: InputMaybe<Scalars['PositiveInt']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<OrderEnum>;
  kind?: InputMaybe<Scalars['AnimeKindString']['input']>;
  status?: InputMaybe<Scalars['AnimeStatusString']['input']>;
  season?: InputMaybe<Scalars['SeasonString']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  duration?: InputMaybe<Scalars['DurationString']['input']>;
  rating?: InputMaybe<Scalars['RatingString']['input']>;
  origin?: InputMaybe<Scalars['OriginString']['input']>;
  genre?: InputMaybe<Scalars['String']['input']>;
  studio?: InputMaybe<Scalars['String']['input']>;
  franchise?: InputMaybe<Scalars['String']['input']>;
  censored?: InputMaybe<Scalars['Boolean']['input']>;
  mylist?: InputMaybe<Scalars['MylistString']['input']>;
  ids?: InputMaybe<Scalars['String']['input']>;
  excludeIds?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type QueryCharactersArgs = {
  page?: InputMaybe<Scalars['PositiveInt']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type QueryContestsArgs = {
  page?: InputMaybe<Scalars['PositiveInt']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type QueryGenresArgs = {
  entryType: GenreEntryTypeEnum;
};

export type QueryMangasArgs = {
  page?: InputMaybe<Scalars['PositiveInt']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<OrderEnum>;
  kind?: InputMaybe<Scalars['MangaKindString']['input']>;
  status?: InputMaybe<Scalars['MangaStatusString']['input']>;
  season?: InputMaybe<Scalars['SeasonString']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  genre?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  franchise?: InputMaybe<Scalars['String']['input']>;
  censored?: InputMaybe<Scalars['Boolean']['input']>;
  mylist?: InputMaybe<Scalars['MylistString']['input']>;
  ids?: InputMaybe<Scalars['String']['input']>;
  excludeIds?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type QueryPeopleArgs = {
  page?: InputMaybe<Scalars['PositiveInt']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  isSeyu?: InputMaybe<Scalars['Boolean']['input']>;
  isProducer?: InputMaybe<Scalars['Boolean']['input']>;
  isMangaka?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryUserRatesArgs = {
  page?: InputMaybe<Scalars['PositiveInt']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
  targetType?: InputMaybe<UserRateTargetTypeEnum>;
  status?: InputMaybe<UserRateStatusEnum>;
  order?: InputMaybe<UserRateOrderInputType>;
};

export type QueryUsersArgs = {
  page?: InputMaybe<Scalars['PositiveInt']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
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

export enum RelationKindEnum {
  /** Adaptation */
  Adaptation = 'adaptation',
  /** Alternative Setting */
  AlternativeSetting = 'alternative_setting',
  /** Alternative Version */
  AlternativeVersion = 'alternative_version',
  /** Character */
  Character = 'character',
  /** Full Story */
  FullStory = 'full_story',
  /** Other */
  Other = 'other',
  /** Parent Story */
  ParentStory = 'parent_story',
  /** Prequel */
  Prequel = 'prequel',
  /** Sequel */
  Sequel = 'sequel',
  /** Side Story */
  SideStory = 'side_story',
  /** Spin-off */
  SpinOff = 'spin_off',
  /** Summary */
  Summary = 'summary',
}

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

export enum SortOrderEnum {
  /** Sort in ascending order */
  Asc = 'asc',
  /** Sort in descending order */
  Desc = 'desc',
}

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

export enum UserRateOrderFieldEnum {
  /** By id */
  Id = 'id',
  /** By updated_at */
  UpdatedAt = 'updated_at',
}

export type UserRateOrderInputType = {
  field: UserRateOrderFieldEnum;
  order: SortOrderEnum;
};

export enum UserRateStatusEnum {
  /** Planned to Watch */
  Planned = 'planned',
  /** Watching */
  Watching = 'watching',
  /** Rewatching */
  Rewatching = 'rewatching',
  /** Completed */
  Completed = 'completed',
  /** On Hold */
  OnHold = 'on_hold',
  /** Dropped */
  Dropped = 'dropped',
}

export enum UserRateTargetTypeEnum {
  /** Anime */
  Anime = 'Anime',
  /** Manga */
  Manga = 'Manga',
}

export type Video = {
  __typename?: 'Video';
  id: Scalars['ID']['output'];
  imageUrl: Scalars['String']['output'];
  kind: VideoKindEnum;
  name?: Maybe<Scalars['String']['output']>;
  playerUrl: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export enum VideoKindEnum {
  /** PV */
  Pv = 'pv',
  /** Character trailer */
  CharacterTrailer = 'character_trailer',
  /** CM */
  Cm = 'cm',
  /** OP */
  Op = 'op',
  /** ED */
  Ed = 'ed',
  /** Music */
  OpEdClip = 'op_ed_clip',
  /** Clip */
  Clip = 'clip',
  /** Other */
  Other = 'other',
  /** Episode preview */
  EpisodePreview = 'episode_preview',
}
