export const Header = () => {
  return (
    <header className="bg-purple-600 text-white p-4">
      <div className="container mx-auto flex flex-col gap-4 items-center sm:flex-row sm:justify-between">
        <h1 className="flex text-4xl font-bold items-center gap-2">
          <img src="/img/logo.svg" alt="Keyboard Company" className="w-12" />
          keyboard
        </h1>

        <nav>
          <ul className="flex gap-2 text-2xl">
            <li>services</li>
            <li className="border-b-4 border-white">team</li>
            <li>contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
