/* eslint-disable @next/next/no-img-element */
import HeroImage from "../../assets/hero.png";

export const Hero = () => {
  return (
    <div className="h-full xl:h-[500px] flex flex-col md:flex-row items-center justify-around text-white bg-iceBlue p-8 xl:px-8">
      <div>
        <h1 className="font-black text-5xl xl:text-8xl font-roboto">
          BookClub
        </h1>
        <p className="font-light text-2xl xl:text-4xl mt-2">
          O seu clube do livro
        </p>
        <button className="mt-[50px] xl:mt-[100px] w-[200px] md:w-[300px] transition-all hover:bg-slate-300 active:scale-90 shadow-button py-2 bg-white text-iceBlue text-2xl md:text-3xl font-semibold md:font-bold rounded">
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
        className="w-[300px] mt-6 -mb-7 xl:mt-0 xl:w-1/2 h-full object-contain"
      />
    </div>
  );
};
