import Comments from "./Comments";
export default function Message() {
  return (
    <div className="py-4 border-[1px] border-purple-300 border-opacity-25 rounded-md mx-4 flex flex-col items-center justify-center">
      <h1 className="font-bold">Сообщение</h1>
      <p>19.02.24</p>
      <p className="px-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
        voluptatum fugiat earum a tempore deleniti vero nihil cupiditate quo
        aut.
      </p>
      <img
        src="https://image.api.playstation.com/vulcan/ap/rnd/202210/0712/cWZlv5HCWi4sGKuwVRO4c8Xg.png"
        className="w-48 sm:w-80 h-auto object-cover"
        alt=""
      />
      <Comments />
    </div>
  );
}
