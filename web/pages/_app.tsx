import Header from "@/components/Globals/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "500", "700", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${roboto.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
