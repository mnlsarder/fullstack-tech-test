import { NextResponse, NextRequest } from "next/server";
import { fetchCharacterById } from "@/services/gql";

type Params = {
  id: string;
};

async function formatCharacter(id: number) {
  const result = await fetchCharacterById(id);

  if (!result) return;

  return {
    ...result,
    avatar: result.image,
    origin: {
      ...result.origin,
      residents: result.origin?.residents?.length,
    },
  };
}

export async function GET(req: NextRequest, context: { params: Params }) {
  const characterId = parseInt(context.params.id);

  const character = await formatCharacter(characterId);

  console.log(character);

  if (!character)
    return NextResponse.json(
      {
        error: "Character does not exist.",
      },
      { status: 404 }
    );

  return NextResponse.json({
    data: character,
  });
}
