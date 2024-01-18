import { CharacterCard } from "@/components/organisms/CharacterCard";
import { ICharacterCore } from "@/types/types";

const baseUrl = "http://localhost:3000";

async function getAllCharacters() {
  const res = await fetch(`${baseUrl}/api/alive-morty`, {
    headers: {
      cache: "no-cache",
    },
  });

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

export default async function Home() {
  const { data } = await getAllCharacters();

  return (
    <main className="text-center flex flex-col items-center justify-start">
      <h1 className="text-3xl font-bold uppercase">Collagerie tech test</h1>

      <div className="grid grid-cols-2 md:grid-cols-6">
        {data.map((character: ICharacterCore) => (
          <CharacterCard data={character} key={character.id} />
        ))}
      </div>
    </main>
  );
}
