import { createSlice } from "@reduxjs/toolkit";

const VideosSlice = createSlice({
  name: "videosSlice",
  initialState: {
    videoObj: undefined,
  },
  reducers: {
    setVideos: (state, action) => {
      state.videoObj = action.payload;
    },
  },
});

export const { setVideos } = VideosSlice.actions;
export default VideosSlice.reducer;
