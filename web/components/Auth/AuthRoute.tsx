import { useRouter } from "next/router";
import { useEffect } from "react";

const AuthRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // Verificando se o token não existe no localStorage
    if (!token) {
      router.push("/");
    }
  }, [router]);

  return <>{children}</>;
};

export default AuthRoute;
