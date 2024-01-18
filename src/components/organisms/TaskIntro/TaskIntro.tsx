export const TaskIntro = (characters: any[]) => {
  return (
    <main className="text-center flex flex-col items-center justify-start gap-5 py-10">
      <h1 className="text-3xl font-bold uppercase">Collagerie tech test</h1>

      <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />

      <div className="grid grid-cols-2 md:grid-cols-5">{characters.map}</div>
    </main>
  );
};
