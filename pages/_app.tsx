import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </QueryClientProvider>
  );
}
