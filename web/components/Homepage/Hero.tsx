/* eslint-disable @next/next/no-img-element */
import * as Dialog from "@radix-ui/react-dialog";
import HeroImage from "../../assets/hero.png";
import { SignUpForm } from "../SignUp/SignUpForm";
import { X } from "phosphor-react";
import { SignInForm } from "../SignIn/SignInForm";

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
        <Dialog.Root>
          <Dialog.Trigger>
            <button className="mt-[50px] xl:mt-[100px] w-[200px] md:w-[300px] transition-all hover:bg-slate-300 active:scale-90 shadow-button py-2 bg-white text-iceBlue text-2xl md:text-3xl font-semibold md:font-bold rounded">
              Cadastre-se
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />

            <Dialog.Content className="fixed p-10 bg-white rounded-2xl h-full md:h-[530px] w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Dialog.Close>
                <X
                  weight="bold"
                  color="#0075FF"
                  size={32}
                  className="absolute top-4 right-4 hover:opacity-80"
                />
              </Dialog.Close>
              <Dialog.Title className="font-bold text-center text-2xl">
                Cadastro
              </Dialog.Title>
              <SignUpForm />
            </Dialog.Content>
          </Dialog.Portal>
          <Dialog.Root>
            <p className="font-light mt-4">
              Já possui uma conta?{" "}
              <Dialog.Trigger>
                <span className="font-bold cursor-pointer">Entrar</span>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />

                <Dialog.Content className="fixed p-10 bg-white rounded-2xl h-full md:h-[530px] w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Dialog.Close>
                    <X
                      weight="bold"
                      color="#0075FF"
                      size={32}
                      className="absolute top-4 right-4 hover:opacity-80"
                    />
                  </Dialog.Close>
                  <Dialog.Title className="font-bold text-center text-2xl">
                    Acesse sua conta
                  </Dialog.Title>
                  <SignInForm />
                </Dialog.Content>
              </Dialog.Portal>
            </p>
          </Dialog.Root>
        </Dialog.Root>
      </div>

      <img
        src={HeroImage.src}
        alt="hero image"
        className="w-[300px] mt-6 -mb-7 xl:mt-0 xl:w-1/2 h-full object-contain"
      />
    </div>
  );
};
