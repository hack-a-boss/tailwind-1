export const Footer = () => {
  return (
    <footer className="bg-purple-600 p-6 flex flex-col items-center">
      <p className="text-2xl font-bold text-white text-center mb-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, dolore!
      </p>

      <form>
        <input type="text" className="py-1 px-2 rounded-l-lg" />
        <button className="py-1 px-2 bg-green-700 text-white rounded-r-lg hover:bg-black">
          subscribe
        </button>
      </form>
    </footer>
  );
};
