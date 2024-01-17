import { GraphQLClient, gql } from "graphql-request";
import AliveMortyCharacters from "../graphql/queries/AliveMortyCharacters";
import { GQLAllCharacters } from "@/types/types";

const client = new GraphQLClient("https://rickandmortyapi.com/graphql");

export async function fetchAliveMortyCharacters(page?: number) {
  const results = (await client.request(AliveMortyCharacters, {
    page,
  })) as GQLAllCharacters;

  return results.characters;
}
