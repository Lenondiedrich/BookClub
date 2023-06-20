import { books } from "@/mockups/books";
import Header from "../Globals/Header";
import BookCard from "../Globals/BookCard";
import { getAllBooks } from "@/api/requests";
import { useQuery } from "react-query";
import { Book } from "@/types/Book";

export default function InitialScreen() {
  const { data } = useQuery("teste", getAllBooks);

  console.log(data);

  return (
    <>
      <Header />
      <div className="px-8 py-4">
        <h1 className="font-roboto font-light text-3xl">
          Escolha livros que você já leu ou possui interesse:
        </h1>
        <div className="grid grid-cols-6 items-start gap-y-6 mt-6">
          {data?.map((book: Book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
}
