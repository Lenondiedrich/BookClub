import UsersService from "@/services/UsersService";
import { useRouter } from "next/router";
import { Input } from "../Globals/Input";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { api } from "@/api/requests";

export interface ErrorProps {
  message: string;
}

export const SignInForm = () => {
  const [errors, setErrors] = useState<ErrorProps>();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data } = await api.post("/auth/login", {
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
      });

      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("token", data.token);

      router.push("/profile");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        const errorMessages = axiosError.response?.data ?? [];
        setErrors(errorMessages as ErrorProps);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between h-full mt-2 max-h-[400px]"
    >
      <div className="flex flex-col gap-2 mt-2">
        <Input label="E-mail:" type="email" id="email" />
        <Input label="Senha:" type="password" id="password" />
        {errors?.message.length && errors?.message.length > 1 ? (
          <p className="font-roboto font-bold text-red-600">{errors.message}</p>
        ) : null}
      </div>

      <button
        type="submit"
        className="bg-iceBlue text-white font-bold text-xl py-2 mt-8 active:scale-90"
      >
        ENTRAR
      </button>
    </form>
  );
};
