import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessages, removeMessages } from "../utilities/ChatSlice";
import { generateRandomMessage, generateRandomName } from "../utilities/Helper";
import message from "../utilities/images/message.png";

const LiveChat = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chatMessages.messages);
  const refNum = useRef(0);
  const getMessage = () => {
    return {
      name: generateRandomName(),
      message: generateRandomMessage(20),
      id: refNum.current,
    };
  };

  const sendMessage = () => {
    refNum.current = refNum.current + 1;
    dispatch(
      addMessages({
        id: refNum.current,
        name: "Sutanu",
        message: text,
      })
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      refNum.current = refNum.current + 1;
      dispatch(addMessages(getMessage()));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  if (!messages || messages.length === 0) return;
  if (messages.length >= 50) dispatch(removeMessages());
  return (
    <div className="w-[20%] h-[700px]">
      <div className="h-[100%] bg-gray-200 overflow-y-scroll flex flex-col-reverse">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} name={msg.name} message={msg.message} />
        ))}
      </div>
      <div className="mt-5 flex justify-center items-center">
        <input
          className="w-full bg-slate-100 h-10 px-3 py-1"
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
        <img
          src={message}
          alt="send button"
          className="h-5 w-5"
          onClick={() => {
            sendMessage();
            setText("");
          }}
        ></img>
      </div>
    </div>
  );
};

export default LiveChat;
