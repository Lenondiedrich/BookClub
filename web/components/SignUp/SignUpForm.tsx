import UsersService from "@/services/UsersService";
import { useRouter } from "next/router";
import { Input } from "../Globals/Input";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { api } from "@/api/requests";
import { ErrorProps } from "../SignIn/SignInForm";

export const SignUpForm = () => {
  const [errors, setErrors] = useState<ErrorProps>();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const user = {
        email: e.currentTarget.email.value,
        name: e.currentTarget.fullName.value,
        password: e.currentTarget.password.value,
        confirmPassword: e.currentTarget.confirmPassword.value,
      };

      const { data } = await api.post("/auth/register", user);

      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("token", data.token);

      router.push("/initial");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        const errorMessages = axiosError.response?.data ?? [];
        setErrors(errorMessages as ErrorProps);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <Input label="Nome:" type="text" id="fullName" />
      <Input label="E-mail:" type="email" id="email" />
      <Input label="Senha:" type="password" id="password" />
      <Input label="Confirme a senha:" type="password" id="confirmPassword" />
      {errors?.message.length && errors?.message.length > 1 ? (
        <p className="font-roboto font-bold text-red-600">{errors.message}</p>
      ) : null}
      <button
        type="submit"
        className="bg-iceBlue text-white font-bold text-xl py-2 mt-8 active:scale-90"
      >
        CADASTRAR
      </button>
    </form>
  );
};
