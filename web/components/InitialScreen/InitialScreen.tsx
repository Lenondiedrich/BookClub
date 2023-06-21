import { api, getAllBooks } from "@/api/requests";
import { Book } from "@/types/Book";
import { useState } from "react";
import { useQuery } from "react-query";
import Button from "../Globals/Button";
import Header from "../Globals/Header";
import InitialBookCard from "../Globals/InitialBookCard";
import { User } from "@/types/User";
import { useRouter } from "next/router";

export interface SuggestedBooksProps {
  suggestedBooks: Book[];
  user: User;
}

export default function InitialScreen() {
  const [erro, setErro] = useState(false);
  const { data } = useQuery("teste", getAllBooks);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user") || "");

    const booksSelectedElement = e.currentTarget
      .selectionBooks as RadioNodeList;
    const books = [] as string[];
    booksSelectedElement.forEach((item: any) =>
      item.checked ? books.push(item.value) : null
    );

    if (books.length === 0) {
      setErro(true);
    } else {
      await api.get<SuggestedBooksProps>(`/initial/${user.id}/indicate`, {
        params: {
          bookIds: books,
        },
      });

      setErro(false);
      router.push("/profile");
    }
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit} className="px-8 py-4">
        <Button variant="primary">Continuar</Button>
        <h1 className="font-roboto font-light text-3xl mt-5">
          Escolha livros que você já leu ou possui interesse:
        </h1>
        {erro ? (
          <p className="font-roboto font-bold text-red-600">
            Selecione ao menos um livro
          </p>
        ) : null}
        <div className="grid grid-cols-6 items-start gap-y-6 mt-6">
          {data?.map((book: Book) => (
            <InitialBookCard key={book.id} book={book} />
          ))}
        </div>
      </form>
    </>
  );
}
