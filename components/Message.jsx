import Comments from "./Comments";
const assets = process.env.GRAPHQL_ASSETS;
export default function Message({ image, date, user, text }) {
  return (
    <div className="py-4 border-[1px] border-purple-300 border-opacity-25 rounded-md mx-4 flex flex-col items-center justify-center">
      <h1>{user}</h1>
      <p>{date}</p>
      <p className="px-4">{text}</p>
      <img
        className="w-48 sm:w-80 h-auto object-cover"
        src={`https://directus-production-d3b8.up.railway.app/assets/${image}`}
        alt=""
      />
      <Comments />
    </div>
  );
}
