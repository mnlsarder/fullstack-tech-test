import { GraphQLClient, gql } from "graphql-request";
import AliveMortyCharacters from "@/graphql/queries/AliveMortyCharacters";
import Character from "@/graphql/queries/Character";
import { AllCharactersQuery, SingleCharacterQuery } from "@/types/types";

const client = new GraphQLClient("https://rickandmortyapi.com/graphql");

export async function fetchAliveMortyCharacters(page?: number) {
  const results = (await client.request(AliveMortyCharacters, {
    page,
  })) as AllCharactersQuery;

  return results.characters;
}

export async function fetchCharacterById(id: number) {
  const results = (await client.request(Character, {
    id,
  })) as SingleCharacterQuery;

  return results.character;
}
