import Head from "next/head";
export default function Auth() {
  return (
    <>
      <Head>
        <title>Авторизация</title>
      </Head>

      <div className="h-[calc(100vh-8rem)] items-center w-80 md:w-[100vw] pt-8 mx-auto flex flex-col">
        <h1 className="mb-4">Вход</h1>
        <form action="submit" className="flex flex-col gap-4 items-center">
          <input
            type="text"
            name="login"
            id=""
            placeholder="Логин"
            className="w-full md:w-96 p-[3px] pl-2 border-2 border-gray-600"
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Пароль"
            className="border-2 p-[3px] pl-2 border-gray-600 w-full"
          />
          <button type="submit">Войти</button>
        </form>
      </div>
    </>
  );
}
