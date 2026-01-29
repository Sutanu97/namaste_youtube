import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
  name: "ChatSlice",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessages: (state, action) => {
      state.messages.unshift(action.payload);
    },

    removeMessages: (state) => {
      console.log("delete called");
      state.messages.pop();
    },
  },
});

export const { addMessages, removeMessages } = ChatSlice.actions;
export default ChatSlice.reducer;
