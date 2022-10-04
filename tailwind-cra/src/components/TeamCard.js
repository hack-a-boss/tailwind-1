export const TeamCard = ({ person }) => {
  return (
    <article className="bg-white shadow-md">
      <header className="p-2 flex flex-col items-center">
        <figure>
          <img
            src={`/img/${person.img}`}
            alt={person.name}
            className="rounded-full"
          />
        </figure>
        <h1 className="text-xl font-bold">{person.name}</h1>
        <p className="font-bold">{person.position}</p>
      </header>
      <p className="p-2 bg-purple-600 text-white text-sm">{person.cv}</p>
    </article>
  );
};
