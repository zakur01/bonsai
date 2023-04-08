import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <body>
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  );
}
