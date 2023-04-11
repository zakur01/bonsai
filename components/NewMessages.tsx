import { useState } from "react";
export default function NewMessage() {
  const [visible, setVisible] = useState(false);
  const SubmitMessage = (e) => {
    e.preventDefault();
    alert("Сообщение успешно отправлено");
  };
  return (
    <div className="w-60">
      {visible ? (
        <h1
          onClick={() => setVisible(!visible)}
          className="text-center w-full bg-red-950 rounded-lg px-4 py-2 "
        >
          Закрыть
        </h1>
      ) : (
        <h1
          onClick={() => setVisible(!visible)}
          className="bg-red-950 text-center rounded-lg px-4 py-2 message_animation"
        >
          Создать сообщение
        </h1>
      )}
      {visible && (
        <form
          onSubmit={SubmitMessage}
          action="submit"
          className="mt-4 flex flex-col gap-4 items-center"
        >
          <input
            type="text"
            name="message"
            id=""
            placeholder="Текст"
            className="w-full text-black md:w-96 p-[3px] pl-2 border-2 border-gray-600"
          />
          <button
            type="submit"
            className="bg-white px-4 py-2 rounded-lg text-center w-full text-red-950"
          >
            Создать
          </button>
        </form>
      )}
    </div>
  );
}
