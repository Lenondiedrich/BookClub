import BookSideBar from "@/components/Globals/BookSideBar";
import Header from "@/components/Globals/Header";

export default function BookPage() {
  return (
    <>
      <Header />
      <div className="px-10 py-6 flex gap-10">
        <BookSideBar />
        <div className="flex flex-col gap-5">
          <h1 className="text-iceBlue text-4xl font-bold">O ÚLTIMO REINO</h1>
          <span className="text-iceBlue text-2xl font-light">
            <strong className="font-bold">Autor: </strong>
            Bernard Cornwell
          </span>
          <p className="text-iceBlue text-2xl">
            O último reino é o primeiro romance de uma série que conta a
            história de Alfredo, o Grande, e seus descendentes. Aqui, Cornwell
            reconstrói a saga do monarca que livrou o território britânico da
            fúria dos vikings. Pelos olhos do órfão Uthred, que aos 9 anos se
            tornou escravo dos guerreiros no norte, surge uma história de
            lealdades divididas, amor relutante e heroísmo desesperado. Nascido
            na aristocracia da Nortúmbria no século IX, Uthred é capturado e
            adotado por um dinamarquês. Nas gélidas planícies do norte, ele
            aprende o modo de vida viking.
          </p>
        </div>
      </div>
    </>
  );
}
