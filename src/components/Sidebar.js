import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const showSideBar = useSelector((store) => store.sideBar.showSideBar);

  if (!showSideBar) return null;

  return (
    <div className="w-[20%]">
      <ul className="w-full">
        <li className="py-3 px-2 rounded-md cursor-pointer hover:bg-gray-100">
          Home
        </li>
        <li className="py-3 px-2 rounded-md cursor-pointer hover:bg-gray-100">
          Shorts
        </li>
        <li className="py-3 px-2 rounded-md cursor-pointer hover:bg-gray-100">
          Subscriptions
        </li>
        <li className="py-3 px-2 rounded-md cursor-pointer hover:bg-gray-100">
          Youtube Music
        </li>
      </ul>
      <hr></hr>
      <div className="py-3 px-2 rounded-md cursor-pointer hover:bg-gray-100 font-semibold">
        You &gt;{" "}
      </div>
      <ul className="w-full">
        <li className="py-3 px-5 rounded-md cursor-pointer hover:bg-gray-100">
          Your Channel
        </li>
        <li className="py-3 px-5 rounded-md cursor-pointer hover:bg-gray-100">
          History
        </li>
        <li className="py-3 px-5 rounded-md cursor-pointer hover:bg-gray-100">
          Playlists
        </li>
        <li className="py-3 px-5 rounded-md cursor-pointer hover:bg-gray-100">
          Your videos
        </li>
        <li className="py-3 px-5 rounded-md cursor-pointer hover:bg-gray-100">
          Watch later
        </li>
        <li className="py-3 px-5 rounded-md cursor-pointer hover:bg-gray-100">
          Liked videos
        </li>
        <li className="py-3 px-5 rounded-md cursor-pointer hover:bg-gray-100">
          Downloads
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
