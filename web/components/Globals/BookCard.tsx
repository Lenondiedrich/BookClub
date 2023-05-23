import Image from "next/image";

interface BookCardProps {
  bookTitle: string;
  bookImage: string;
  bookId: string;
}

export default function BookCard({
  bookTitle,
  bookImage,
  bookId,
}: BookCardProps) {
  return (
    <div>
      <span>{bookTitle}</span>
      <Image src={bookImage} alt="book cover image" />
    </div>
  );
}
