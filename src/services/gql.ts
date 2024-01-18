import { GraphQLClient } from "graphql-request";
import AliveMortyCharacters from "@/graphql/queries/AliveMortyCharacters";
import CharacterById from "@/graphql/queries/CharacterById";
import EpisodeById from "@/graphql/queries/EpisodeById";
import LocationById from "@/graphql/queries/LocationById";
import {
  AllCharactersQuery,
  SingleCharacterQuery,
  EpisodeQuery,
  LocationQuery,
} from "@/types/types";

const client = new GraphQLClient("https://rickandmortyapi.com/graphql");

export async function fetchAliveMortyCharacters(page?: number) {
  const results = (await client.request(AliveMortyCharacters, {
    page,
  })) as AllCharactersQuery;

  return results.characters;
}

export async function fetchCharacterById(id: number) {
  const results = (await client.request(CharacterById, {
    id,
  })) as SingleCharacterQuery;

  return results.character;
}

export async function fetchEpisodesById(ids: number[]) {
  const results = (await client.request(EpisodeById, {
    ids,
  })) as EpisodeQuery;

  return results.episodesByIds;
}

export async function fetchLocationrById(id: number) {
  const results = (await client.request(LocationById, {
    id,
  })) as LocationQuery;

  return results.location;
}
