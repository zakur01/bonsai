import Head from "next/head";
export default function Profile() {
  return (
    <>
      <Head>
        <title>Профиль @name@</title>
      </Head>
      <div>
        <h1>Profile name</h1>
        <h1>Registration date</h1>
        <h1>Avatar?</h1>
        <h1>Messages</h1>
        <h1>Comments</h1>
      </div>
    </>
  );
}
