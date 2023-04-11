import NewMessage from "./NewMessages";
import Head from "next/head";
import Messages from "./Messages";
export default function Main() {
  return (
    <>
      <Head>
        <title>Bonsai</title>
      </Head>
      <main className="flex flex-col items-center min-h-[calc(100vh-8rem)] gap-4 mt-4">
        <h1>Главная</h1>
        <NewMessage />
        <Messages />
      </main>
    </>
  );
}
