import { Book } from "@/types/Book";
import Image from "next/image";
import Link from "next/link";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const { image, title, id } = book;

  return (
    <Link
      href={`/books/${id}`}
      className="flex flex-col items-center justify-center gap-2 cursor-pointer"
    >
      <Image
        src={image}
        alt="book cover image"
        width={100}
        height={140}
        className="object-cover"
      />
      <span className="font-roboto font-medium text-center">{title}</span>
    </Link>
  );
}
