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

interface Resident {
  id: string;
}

interface Location {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents?: Resident[];
}

interface Episode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
}
export interface Results {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin?: Location;
  location?: Location;
  episode?: Episode[];
}

interface Characters {
  info: Info;
  results: Results[];
}

export interface AllCharactersQuery {
  characters: Characters;
}

export interface SingleCharacterQuery {
  character: Results;
}
