import { NextResponse } from "next/server";
import { fetchAliveMortyCharacters } from "@/app/services/gql";
import { Results } from "@/types/types";

async function fetchAllAliveMorty(
  page?: number,
  previousResults: Results[] = []
) {
  const response = await fetchAliveMortyCharacters(page);
  const results = response.results;

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
