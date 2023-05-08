/* eslint-disable @next/next/no-img-element */
import { Hero } from "@/components/Hero";
import BlockImage from "../assets/person-reading.png";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Hero />
      <div className="h-full w-full p-8 flex items-center justify-around gap-10">
        <img
          src={BlockImage.src}
          alt="Person reading in a chair"
          className="w-2/5"
        />
        <div className="text-iceBlue w-1/2">
          <h2 className="font-bold text-5xl">A sua opinião importa!</h2>
          <p>
            Com o BookClub você pode compartilhar a sua opinião ou ver a
            avaliações dos seus livros favoritos!.
          </p>
          <h2>Receba indicações.</h2>
          <p>
            Sem ideia do que ler em seguida? Aqui você recebe indicações com
            base nos livros que você gostou.
          </p>
        </div>
      </div>
    </div>
  );
}
