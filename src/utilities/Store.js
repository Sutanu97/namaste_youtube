import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from "./SidebarSlice";
import VideosSlice from "./VideosSlice";
import SearchSlice from "./SearchSlice";
import ChatSlice from "./ChatSlice";

const Store = configureStore({
  reducer: {
    sideBar: SidebarSlice,
    videos: VideosSlice,
    searchSuggestions: SearchSlice,
    chatMessages: ChatSlice,
  },
});

export default Store;
