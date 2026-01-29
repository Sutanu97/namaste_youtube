import { createSlice, current } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "searchSlice",
  initialState: {
    searchObj: {},
    currentSearchText: "",
  },
  reducers: {
    addSuggestions: (state, action) => {
      const obj = action.payload;
      state.searchObj = { ...state.searchObj, ...obj };
    },

    setCurrentSearchText: (state, action) => {
      state.currentSearchText = action.payload;
    },
  },
});

export const { addSuggestions, setCurrentSearchText } = SearchSlice.actions;
export default SearchSlice.reducer;
