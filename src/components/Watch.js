import React from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSideBar } from "../utilities/SidebarSlice";
import { CommentsContainer } from "./CommentsContainer";
import LiveChat from "./LiveChat";

const Watch = () => {
  const searchParam = useSearchParams()[0];
  const dispatch = useDispatch();
  dispatch(closeSideBar());
  return (
    <div className="flex w-full">
      <div className="w-[960px] ml-[15%] mr-[5%]">
        <iframe
          width="960"
          height="540"
          className="rounded-xl"
          src={"https://www.youtube.com/embed/" + searchParam.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <CommentsContainer />
      </div>
      <LiveChat />
    </div>
  );
};

export default Watch;
