import { Book } from "@/types/Book";
import Image from "next/image";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const { image, title } = book;

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Image
        src={image}
        alt="book cover image"
        className="w-[100px] h-[140px] object-cover"
      />
      <span className="font-roboto font-medium text-center">{title}</span>
    </div>
  );
}
