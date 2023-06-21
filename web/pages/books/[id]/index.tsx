import { getBookById } from "@/api/requests";
import BookSideBar from "@/components/Globals/BookSideBar";
import Header from "@/components/Globals/Header";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

export default function BookPage() {
  const router = useRouter();

  const { id } = router.query;

  const { data } = useQuery("getBookPage", () => getBookById(id as string), {
    enabled: !!id,
  });

  return (
    <>
      <Header />
      <div className="px-10 py-6 flex gap-10">
        {data ? <BookSideBar book={data} /> : null}
        <div className="flex flex-col gap-5">
          <h1 className="text-iceBlue text-4xl font-bold">{data?.title}</h1>
          <span className="text-iceBlue text-2xl font-light">
            <strong className="font-bold">Autor: </strong>
            {data?.author}
          </span>
          <p className="text-iceBlue text-2xl">{data?.synopsis}</p>
        </div>
      </div>
    </>
  );
}
