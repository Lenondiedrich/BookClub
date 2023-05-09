/* eslint-disable @next/next/no-img-element */
import BlockImage from "../../assets/person-reading.png";

export const Description = () => {
  return (
    <div className="h-full w-full py-12 px-8 pb-10 flex flex-col md:flex-row items-center justify-around gap-10">
      <img
        src={BlockImage.src}
        alt="Person reading in a chair"
        className="w-full md:w-2/5"
      />
      <div className="text-iceBlue w-full md:w-1/2 flex flex-col gap-14">
        <div className="flex flex-col gap-6">
          <h2 className="font-bold text-2xl md:text-5xl">
            A sua opinião importa!
          </h2>
          <p className="font-light text-xl md:text-2xl">
            Com o BookClub você pode compartilhar a sua opinião ou ver a
            avaliações dos seus livros favoritos!.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="font-bold text-2xl md:text-5xl">Receba indicações.</h2>
          <p className="font-light text-xl md:text-2xl">
            Sem ideia do que ler em seguida? Aqui você recebe indicações com
            base nos livros que você gostou.
          </p>
        </div>
      </div>
    </div>
  );
};
