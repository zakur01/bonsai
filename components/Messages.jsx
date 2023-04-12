import Message from "@/components/Message.jsx";
import { messagesQuery } from "../queries/messages";
import { useQuery } from "react-query";
const graphql_main = process.env.GRAPHQL_MAIN;

export default function Messages() {
  const fetchData = async (query, { variables = {} }) => {
    const headers = {
      "Content-Type": "application/json",
    };
    const res = await fetch(
      "https://directus-production-d3b8.up.railway.app/graphql",
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          query,
          variables,
        }),
      }
    );
    const data = await res.json();
    if (data.errors) {
      throw new Error(data.errors[0].message);
    }
    return data;
  };

  const { data: messages, isSuccess } = useQuery(
    "messages",
    async () => await fetchData(messagesQuery, {})
  );

  return (
    <div className="flex flex-col gap-8">
      {isSuccess &&
        messages.data.Messages.map((message) => (
          <Message
            key={message.id}
            date={message.date_created}
            text={message.text}
            image={message.image_message.id}
            user={message.user_created.first_name}
          />
        ))}
    </div>
  );
}
