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
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import {
  CreateReviewProps,
  createReview,
  getWishlistById,
} from "@/api/requests";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { User } from "@/types/User";

interface BookSideBarProps {
  isReviewPage?: boolean;
  book: Book;
}

export default function BookSideBar({
  isReviewPage = false,
  book,
}: BookSideBarProps) {
  const [rating, setRating] = useState(0);
  const [user, setUser] = useState<User>();

  const router = useRouter();

  const bookId = router.query.id as string;

  useEffect(() => {
    if (localStorage?.getItem("user")) {
      setUser(JSON.parse(localStorage?.getItem("user") || ""));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user) {
      const review: CreateReviewProps = {
        comment: e.currentTarget.comment.value,
        rating: rating,
        userId: user.id,
        bookId,
      };

      try {
        const response = await createReview(review);

        toast(response.message, { autoClose: 2000, type: "success" });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const { data: wishlist } = useQuery(
    "wishlist",
    () => getWishlistById(user?.wishListId ? user.wishListId : ""),
    { enabled: !!user?.wishListId }
  );

  const [checked, setChecked] = useState(
    wishlist?.books?.some((book: Book) => book.id === bookId)
  );

  return (
    <div className="flex flex-col gap-3">
      <div>
        <Image src={book.image} alt="Book cover" width={150} height={200} />
      </div>
      <ReactStars value={book.rating} edit={false} size={32} />
      <Text number={book.reviews ? book.reviews.length : 0}>Avaliações: </Text>
      {!isReviewPage ? (
        <Button
          variant="primary"
          onClick={() => router.push(`${router.asPath}/reviews`)}
        >
          Ver avaliações
        </Button>
      ) : null}
      {!isReviewPage ? (
        <Dialog.Root>
          <Dialog.Trigger className="w-[150px] border-2 border-iceBlue text-iceBlue text-lg font-semibold py-1 rounded-md active:scale-90">
            Avaliar
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
              <form onSubmit={handleSubmit}>
                <div className="flex items-center gap-5">
                  <span className="font-bold text-iceBlue text-lg">Nota:</span>
                  <ReactStars
                    size={28}
                    onChange={(rating) => setRating(rating)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-iceBlue text-lg">
                    O que você achou do livro?
                  </span>
                  <textarea
                    name="comment"
                    className="border border-neutral-500 rounded-lg resize-y"
                  ></textarea>
                </div>
                <div className="w-full flex items-center justify-center mt-4">
                  <Button variant="primary" type="submit">
                    Avaliar
                  </Button>
                </div>
              </form>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      ) : null}
      <Checkbox.Root
        checked={checked}
        onClick={() => setChecked(!checked)}
        className="bg-iceBlue w-[150px] text-white py-1 rounded-md font-semibold text-lg flex items-center justify-center gap-2"
      >
        <Checkbox.Indicator>
          <CheckCircle size={24} />
        </Checkbox.Indicator>
        Quero ler
      </Checkbox.Root>
      <ToastContainer />
    </div>
  );
}
