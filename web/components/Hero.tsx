/* eslint-disable @next/next/no-img-element */
import HeroImage from "../assets/hero.png";

export const Hero = () => {
  return (
    <div className="h-[500px] flex items-center justify-around text-white bg-iceBlue px-8">
      <div className="">
        <h1 className="font-black text-8xl font-roboto">BookClub</h1>
        <p className="font-light text-4xl mt-2">O seu clube do livro</p>
        <button className="mt-[100px] w-[300px] shadow-button py-2 bg-white text-iceBlue text-3xl font-bold rounded">
          Cadastre-se
        </button>
        <p className="font-light mt-4">
          Já possui uma conta?{" "}
          <span className="font-bold cursor-pointer">Entrar</span>
        </p>
      </div>

      <img
        src={HeroImage.src}
        alt="hero image"
        className="w-1/2 h-full object-contain"
      />
    </div>
  );
};
