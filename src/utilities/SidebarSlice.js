import { createSlice } from "@reduxjs/toolkit";

const SidebarSlice = createSlice({
  name: "sidebarSlice",
  initialState: {
    showSideBar: true,
  },
  reducers: {
    toggleSideBar: (state) => {
      state.showSideBar = !state.showSideBar;
    },
    closeSideBar: (state) => {
      state.showSideBar = false;
    },
  },
});

export const { toggleSideBar, closeSideBar } = SidebarSlice.actions;
export default SidebarSlice.reducer;
