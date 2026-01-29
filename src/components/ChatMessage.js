import React from "react";
import user from "../utilities/images/user.png";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex mx-3 my-3 shadow-lg p-5 rounded-lg">
      <span className="mx-2">
        <img
          className="w-5 h-5  cursor-pointer"
          alt="user logo"
          src={user}
        ></img>
      </span>
      <div>
        <span className="mx-2">{name}</span>
        <span className="mx-2">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
