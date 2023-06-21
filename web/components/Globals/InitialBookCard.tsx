import { Book } from "@/types/Book";
import Image from "next/image";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

interface InitialBookCardProps {
  book: Book;
}

export default function InitialBookCard({ book }: InitialBookCardProps) {
  const { image, title, id } = book;

  return (
    <div>
      <Checkbox.Root
        className="appearance-none w-6 h-6 border border-gray-600 rounded-lg"
        value={id}
        name="selectionBooks"
      >
        <Checkbox.Indicator>
          <Check size={22} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <div className="flex flex-col items-center justify-center gap-2">
        <Image
          src={image}
          alt="book cover image"
          width={100}
          height={140}
          className="object-cover"
        />
        <span className="font-roboto font-medium text-center">{title}</span>
      </div>
    </div>
  );
}
