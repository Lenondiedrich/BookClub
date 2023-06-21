import ProfilePicture from "@/assets/avatar.png";
import Image from "next/image";
import { Camera } from "phosphor-react";
import Header from "../Globals/Header";
import Text from "../Globals/Text";
import { LoginResponse, User } from "@/types/User";
import {
  getIndications,
  getMe,
  getReviewsByUser,
  getWishlistById,
} from "@/api/requests";
import { useQuery } from "react-query";
import BookCard from "../Globals/BookCard";
import { useEffect, useState } from "react";
import { Book } from "@/types/Book";

export default function ProfileScreen() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (localStorage?.getItem("user")) {
      setUser(JSON.parse(localStorage?.getItem("user") || ""));
    }
  }, []);

  const { data: userData } = useQuery(
    "getUser",
    () => getMe(user?.id ? user.id : ""),
    {
      enabled: !!user?.id,
    }
  );
  const { data: indications } = useQuery(
    "indications",
    () => getIndications(user?.id ? user.id : ""),
    {
      enabled: !!user?.id,
    }
  );

  const { data: reviews } = useQuery(
    "reviews",
    () => getReviewsByUser(user?.id ? user.id : ""),
    { enabled: !!user?.id }
  );

  const { data: wishlist } = useQuery(
    "wishlist",
    () => getWishlistById(user?.wishListId ? user.wishListId : ""),
    { enabled: !!user?.wishListId }
  );

  return (
    <>
      <Header />
      <div className="px-10 py-6 flex items-start">
        <div className="w-1/5">
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <div className="w-[153px] h-[153px] border-4 border-iceBlue rounded-full flex items-center justify-center relative">
              <Image
                src={userData?.avatarUrl ? userData.avatarUrl : ProfilePicture}
                alt="profile picture"
                width={130}
              />
              <button className="absolute right-0 bottom-0 bg-iceBlue rounded-full p-1 active:scale-90">
                <Camera size={32} color="#fff" weight="fill" />
              </button>
            </div>
            <span className="font-bold text-iceBlue text-xl">{user?.name}</span>
          </div>
          <div className="w-full flex flex-col items-start mt-3">
            <Text number={reviews?.length}>Minhas avaliações: </Text>
            <Text number={wishlist?.books?.length}>Quero ler: </Text>
          </div>
        </div>
        <div className="w-full pt-8 px-8">
          <span className="font-bold text-iceBlue text-4xl">
            Sugestões para você:
          </span>
          <div className="grid grid-cols-5 items-start gap-y-5 mt-6">
            {indications?.books &&
              indications?.books?.length > 0 &&
              indications?.books.map((book: Book) => (
                <BookCard key={book.id} book={book} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
