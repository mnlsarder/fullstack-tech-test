import { NextResponse } from "next/server";
import { fetchAliveMortyCharacters } from "@/services/gql";
import { ICharacterCore } from "@/types/types";

async function fetchAllAliveMorty(
  page?: number,
  previousResults: ICharacterCore[] = []
) {
  const response = await fetchAliveMortyCharacters(page);

  const results = response.results.map((character) => ({
    id: parseInt(character.id),
    name: character.name,
    status: character.status,
    species: character.species,
    gender: character.gender,
    avatar: character.image,
  }));

  if (!response.info.next)
    return {
      data: [...previousResults, ...results],
    };

  return fetchAllAliveMorty(response.info.next, [
    ...previousResults,
    ...results,
  ]);
}

export async function GET() {
  const response = await fetchAllAliveMorty();

  return NextResponse.json(response);
}
