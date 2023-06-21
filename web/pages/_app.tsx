import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "500", "700", "900"],
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={`${roboto.variable}`}>
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
}
