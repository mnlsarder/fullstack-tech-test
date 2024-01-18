import { ICharacterCore } from "@/types/types";

export const CharacterCard = ({ data }: { data: ICharacterCore }) => {
  return (
    <div className="flex flex-col justify-between gap-2 p-6 text-start">
      <img src={data.avatar} />

      <div className="flex flex-col flex-initial">
        <span>Name: {data.name}</span>
        <span>Gender: {data.gender}</span>
        <span>Species: {data.species}</span>
      </div>

      <a className="" href={`/characters/${data.id}`}>
        <div className="bg-slate-300 text-black text-center py-2">
          View Profile
        </div>
      </a>
    </div>
  );
};
