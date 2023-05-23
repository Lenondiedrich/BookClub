import Header from "../Globals/Header";

export default function InitialScreen() {
  return (
    <>
      <Header />
      <div className="px-8 py-4">
        <h1 className="font-roboto font-light text-3xl">
          Escolha livros que você já leu ou possui interesse:
        </h1>
      </div>
    </>
  );
}
