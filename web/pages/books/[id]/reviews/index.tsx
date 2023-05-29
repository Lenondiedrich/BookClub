import BookSideBar from "@/components/Globals/BookSideBar";
import Header from "@/components/Globals/Header";
import ReviewCard from "@/components/Globals/ReviewCard";
import Picture from "@/assets/avatar.png";

export default function ReviewPage() {
  return (
    <>
      <Header />
      <div className="px-10 py-6 flex gap-10">
        <BookSideBar isReviewPage={true} />
        <div className="flex flex-col gap-5">
          <h1 className="text-iceBlue text-4xl font-bold">O ÚLTIMO REINO</h1>
          <span className="text-iceBlue text-2xl font-light">
            <strong className="font-bold">Autor: </strong>
            Bernard Cornwell
          </span>
          <ReviewCard
            userPicture={Picture}
            rating={4}
            comment="Livro de fácil leitura e conta com detalhes as como eram as batalhas nessa época."
            title="Um dos melhores livros que já li"
          />
        </div>
      </div>
    </>
  );
}
