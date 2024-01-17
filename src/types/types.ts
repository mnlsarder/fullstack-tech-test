export interface ICharacterCore {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  avatar: string;
}

export interface ICharacter extends ICharacterCore {
  origin: ILocation;
  location: ILocation;
  episodes: IEpisode[];
}

export interface ILocation {
  id: number;
  name: string;
  type: string;
  noOfResidents: number;
  dimension: string;
}

export interface IEpisode {
  id: number;
  name: string;
  airDate: string;
  noOfCharacters: number;
  episode: string;
}

interface Info {
  count: number;
  page: number;
  next: number;
}

export interface Results {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

type Characters = {
  info: Info;
  results: Results[];
};

export type GQLAllCharacters = {
  characters: Characters;
};
