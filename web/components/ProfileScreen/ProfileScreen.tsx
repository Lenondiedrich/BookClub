import Image from "next/image";
import Header from "../Globals/Header";
import ProfilePicture from "@/assets/avatar.png";
import { Camera } from "phosphor-react";
import { books } from "@/mockups/books";
import BookCard from "../Globals/BookCard";

export default function ProfileScreen() {
  return (
    <>
      <Header />
      <div className="px-10 py-6 flex items-start">
        <div className="w-1/5">
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <div className="w-[153px] h-[153px] border-4 border-iceBlue rounded-full flex items-center justify-center relative">
              <Image src={ProfilePicture} alt="profile picture" width={130} />
              <button className="absolute right-0 bottom-0 bg-iceBlue rounded-full p-1 active:scale-90">
                <Camera size={32} color="#fff" weight="fill" />
              </button>
            </div>
            <span className="font-bold text-iceBlue text-xl">
              Maria da Silva
            </span>
          </div>
          <div className="w-full flex flex-col items-start mt-3">
            <span className="text-iceBlue text-lg font-light">
              Minhas avaliações: <strong className="font-bold">4</strong>
            </span>
            <span className="text-iceBlue text-lg font-light">
              Quero ler: <strong className="font-bold">4</strong>
            </span>
          </div>
        </div>
        <div className="w-full pt-8 px-8">
          <span className="font-bold text-iceBlue text-4xl">
            Sugestões para você:
          </span>
          <div className="grid grid-cols-5 items-start gap-y-5 mt-6">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
