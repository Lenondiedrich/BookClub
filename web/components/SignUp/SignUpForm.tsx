import { Input } from "../Globals/Input";

export const SignUpForm = () => {
  return (
    <div className="flex flex-col gap-2">
      <Input label="Nome:" type="text" />
      <Input label="E-mail:" type="email" />
      <Input label="Senha:" type="password" />
      <Input label="Confirme a senha:" type="password" />
      <button className="bg-iceBlue text-white font-bold text-xl py-2 mt-8 active:scale-90">
        CADASTRAR
      </button>
    </div>
  );
};
