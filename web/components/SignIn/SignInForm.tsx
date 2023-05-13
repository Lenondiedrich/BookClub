import { Input } from "../Globals/Input";

export const SignInForm = () => {
  return (
    <div className="flex flex-col justify-between h-full mt-2 max-h-[400px]">
      <div className="flex flex-col gap-2 mt-2">
        <Input label="E-mail:" type="email" />
        <Input label="Senha:" type="password" />
      </div>

      <button className="bg-iceBlue text-white font-bold text-xl py-2 mt-8 active:scale-90">
        ENTRAR
      </button>
    </div>
  );
};
