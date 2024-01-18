import { CharacterCard } from "@/components/organisms/CharacterCard";
import { ICharacterCore } from "@/types/types";

const baseUrl = "http://localhost:3000";

async function getCharacter(id: string) {
  const res = await fetch(`${baseUrl}/api/characters/${id}`, {
    headers: {
      cache: "no-cache",
    },
  });

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

export default async function CharacterPage({
  params,
}: {
  params: { id: string };
}) {
  const { data } = await getCharacter(params.id);

  return (
    <main className="text-center flex flex-col items-center justify-start">
      <div className="bg-slate-100 flex flex-col w-full gap-5 py-10 items-center md:items-start md:px-10">
        <h1 className="text-3xl font-bold uppercase">Rick and Morty</h1>

        <a href="/" className="text-xl">
          {"<"} Back to character listing
        </a>

        <div className="flex flex-col gap-7 md:flex-row">
          <img src={data.avatar} className="rounded-full mt-5" />
          <div className="flex flex-col self-center gap-2 md:text-start">
            <h1 className="text-2xl font-bold">{data.name}</h1>
            <div className="flex flex-col">
              <span>Status: {data.status}</span>
              <span>Origin: {data.origin.name}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full py-10 gap-7 items-center md:items-start md:px-10">
        <div className="flex flex-col text-center gap-3 md:text-start">
          <h1 className="text-xl font-semibold">Location Details:</h1>
          <div className="flex flex-col">
            <span>Name: {data.location.name}</span>
            <span>Type: {data.location.type}</span>
            <span>Dimension: {data.location.dimension}</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-center md:text-start">
          <h1 className="text-xl font-semibold">
            Episodes ({data.episodes.length}):
          </h1>
          <div className="flex flex-col">
            <span>Name: {data.location.name}</span>
            <span>Type: {data.location.type}</span>
            <span>Dimension: {data.location.dimension}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
