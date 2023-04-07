import Head from "next/head";
import Messages from "./Messages";
export default function Main() {
  return (
    <>
      <Head>
        <title>Bonsai</title>
      </Head>
      <main className="flex flex-col items-center h-[calc(100vh-8rem)] border-[1px]">
        <h1>Main</h1>
        <Messages />
      </main>
    </>
  );
}
