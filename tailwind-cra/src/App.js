import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TeamCard } from "./components/TeamCard";

function App() {
  const team = [
    {
      id: "ronnie",
      name: "Ronnie Gregory",
      img: "perry.jpg",
      position: "CMO",
      cv: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab molestias, perferendis error laudantium eius modi vel deleniti totam ipsum id ducimus ut magnam sapiente pariatur nam quidem, alias, distinctio ullam?",
    },
    {
      id: "margie",
      name: "Margie Watson",
      img: "marie.jpg",
      position: "CEO",
      cv: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab molestias, perferendis error laudantium eius modi vel deleniti totam ipsum id ducimus ut magnam sapiente pariatur nam quidem, alias, distinctio ullam?",
    },
    {
      id: "laura",
      name: "Laura Finney",
      img: "lorraine.jpg",
      position: "CTO",
      cv: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab molestias, perferendis error laudantium eius modi vel deleniti totam ipsum id ducimus ut magnam sapiente pariatur nam quidem, alias, distinctio ullam?",
    },
  ];

  return (
    <main className="bg-orange-300 min-h-screen">
      <Header />
      <section className="p-4 container mx-auto sm:p-8">
        <h2 className="text-4xl font-bold text-white text-center mb-4 sm:mb-8">
          Meet the team
        </h2>
        <ul className="flex flex-col gap-2 sm:flex-row sm:gap-4">
          {team.map((person) => {
            return (
              <li key={person.id}>
                <TeamCard person={person} />
              </li>
            );
          })}
        </ul>
      </section>
      <Footer />
    </main>
  );
}

export default App;
