import { MagnifyingGlass } from "phosphor-react";

export default function SearchBar() {
  return (
    <div className="bg-white w-1/3 flex items-center rounded-full px-2 py-1">
      <MagnifyingGlass color="#000" size={28} />
      <input
        className="w-11/12 ml-2 focus:outline-none text-black"
        placeholder="Pesquisar livro"
      />
    </div>
  );
}
