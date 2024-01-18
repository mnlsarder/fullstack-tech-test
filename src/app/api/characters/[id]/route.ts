import { NextResponse, NextRequest } from "next/server";
import {
  fetchCharacterById,
  fetchEpisodesById,
  fetchLocationrById,
} from "@/services/gql";
import { Results, Episode, Location } from "@/types/types";

type Params = {
  id: string;
};

type Props = {
  character: Results;
  episodes: Episode[];
  location: Location;
};

function formatResponse({ character, episodes, location }: Props) {
  const origin = {
    id: character.origin.id,
    name: character.origin.name,
    type: character.origin.type,
    dimension: character.origin.dimension,
  };

  const formattedLocation = {
    id: location.id,
    name: location.name,
    type: location.type,
    noOfResidents: location.residents.length,
    dimension: location.dimension,
  };

  const formattedEpisodes = episodes.map((e: Episode) => ({
    id: e.id,
    name: e.name,
    airDate: e.air_date,
    noOfCharacters: e.characters.length,
    episode: e.episode,
  }));

  return {
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    gender: character.gender,
    avatar: character.image,
    origin,
    location: formattedLocation,
    episodes: formattedEpisodes,
  };
}

export async function GET(req: NextRequest, context: { params: Params }) {
  const characterId = parseInt(context.params.id);

  const character = await fetchCharacterById(characterId);

  if (!character)
    return NextResponse.json(
      {
        error: "Character does not exist.",
      },
      { status: 404 }
    );

  const episodeIds = character.episode?.map(({ id }) => parseInt(id));
  const locationId = parseInt(character.location.id);

  const [episodes, location] = await Promise.all([
    fetchEpisodesById(episodeIds),
    fetchLocationrById(locationId),
  ]);

  const data = formatResponse({ character, episodes, location });

  return NextResponse.json({
    data,
  });
}
