import { useContext } from "react";
import { ChatContext } from "../content/ChatContext";

const Chat = () => {
  const { userChats, isUserChatsLoading, userChatsError } =
    useContext(ChatContext);

  console.log("UserChats", userChats);

  return <>Chat</>;
};

export default Chat;
