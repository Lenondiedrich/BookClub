import Image from "next/image";
import ReactStars from "react-stars";
import Text from "./Text";
import Button from "./Button";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckCircle, X } from "phosphor-react";
import BookCover from "@/assets/last-kingdom.jpg";
import { Book } from "@/types/Book";
import { useRouter } from "next/router";
import * as Dialog from "@radix-ui/react-dialog";

interface BookSideBarProps {
  isReviewPage?: boolean;
  book?: Book;
}

export default function BookSideBar({
  isReviewPage = false,
  book,
}: BookSideBarProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-3">
      <div className="w-[150px] h-[200px]">
        <Image src={BookCover} alt="Book cover" />
      </div>
      <ReactStars value={5} edit={false} size={32} />
      <Text number={5}>Avaliações: </Text>
      {!isReviewPage ? (
        <Button
          variant="primary"
          onClick={() => router.push(`books/${book?.id}/reviews`)}
        >
          Ver avaliações
        </Button>
      ) : null}
      <Dialog.Root>
        <Dialog.Trigger>
          <Button variant="secondary">Avaliar</Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
          <Dialog.Content className="fixed p-10 bg-white rounded-2xl h-full md:h-auto w-full max-w-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Dialog.Close>
              <X
                weight="bold"
                color="#0075FF"
                size={32}
                className="absolute top-4 right-4 hover:opacity-80"
              />
            </Dialog.Close>
            <Dialog.Title className="font-bold text-center text-2xl text-iceBlue">
              Avaliar um livro
            </Dialog.Title>
            <span className="text-iceBlue text-xl">
              Título do livro: {book?.title}
            </span>
            <form>
              <div className="flex items-center gap-5">
                <span className="font-bold text-iceBlue text-lg">Nota:</span>
                <ReactStars size={28} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold text-iceBlue text-lg">
                  O que você achou do livro?
                </span>
                <textarea className="border border-neutral-500 rounded-lg resize-y"></textarea>
              </div>
              <div className="w-full flex items-center justify-center mt-4">
                <Button variant="primary">Avaliar</Button>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <Checkbox.Root className="bg-iceBlue w-[150px] text-white py-1 rounded-md font-semibold text-lg flex items-center justify-center gap-2">
        <Checkbox.Indicator>
          <CheckCircle size={24} />
        </Checkbox.Indicator>
        Quero ler
      </Checkbox.Root>
    </div>
  );
}
