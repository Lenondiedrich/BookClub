import Image from "next/image";
import BookCover from "@/assets/last-kingdom.jpg";
import Header from "@/components/Globals/Header";
import ReactStars from "react-stars";

export default function BookPage() {
  return (
    <>
      <Header />
      <div className="px-10 py-6">
        <div className="flex flex-col gap-3">
          <div className="w-[150px] h-[200px]">
            <Image src={BookCover} alt="Book cover" />
          </div>
          <div className="">
            <ReactStars value={5} edit={false} size={32} />
          </div>
        </div>
      </div>
    </>
  );
}
