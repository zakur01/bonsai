import { useState } from "react";
import NewComment from "./NewComment";
import Comment from "@/components/Comment";
export default function Comments() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center flex-col gap-4">
      <h1
        onClick={() => setVisible(!visible)}
        className="cursor-pointer sm:hover:scale-110 transition-all duration-200 my-4"
      >
        {visible ? "Скрыть комментарии" : "Показать комментарии"}
      </h1>
      <div className={visible ? "flex flex-col px-4" : "hidden"}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <NewComment />
      </div>
    </div>
  );
}
