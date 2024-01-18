import { CharacterCard } from "@/components/organisms/CharacterCard";
import { ICharacterCore } from "@/types/types";

const baseUrl = "http://localhost:3000";

async function getAllCharacters() {
  const res = await fetch(`${baseUrl}/api/alive-morty`);

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

export default async function Home() {
  const { data } = await getAllCharacters();

  return (
    <main className="text-center flex flex-col items-center relative justify-start">
      <h1 className="text-3xl w-full font-bold uppercase pt-36 pb-60 bg-slate-200 px-10 break-words">
        Rick and Morty
      </h1>

      <div className="absolute top-80 grid grid-cols-2 md:grid-cols-6 md:px-10">
        {data.map((character: ICharacterCore) => (
          <CharacterCard data={character} key={character.id} />
        ))}
      </div>
    </main>
  );
}
