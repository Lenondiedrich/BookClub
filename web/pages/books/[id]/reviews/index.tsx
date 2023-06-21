import BookSideBar from "@/components/Globals/BookSideBar";
import Header from "@/components/Globals/Header";
import ReviewCard from "@/components/Globals/ReviewCard";
import Picture from "@/assets/avatar.png";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getBookById } from "@/api/requests";

export default function ReviewPage() {
  const router = useRouter();

  const { id } = router.query;

  const { data } = useQuery("getBook", () => getBookById(id as string), {
    enabled: !!id,
  });

  return (
    <>
      <Header />
      <div className="px-10 py-6 flex gap-10">
        {data ? <BookSideBar book={data} isReviewPage={true} /> : null}
        <div className="flex flex-col gap-5">
          <h1 className="text-iceBlue text-4xl font-bold">{data?.title}</h1>
          <span className="text-iceBlue text-2xl font-light">
            <strong className="font-bold">Autor: </strong>
            {data?.author}
          </span>
          {data?.reviews?.map((review) => (
            <ReviewCard
              key={review.id}
              userPicture={Picture}
              rating={review.rating}
              comment={review.comment}
            />
          ))}
        </div>
      </div>
    </>
  );
}
