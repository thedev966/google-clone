import { createSlice } from "@reduxjs/toolkit";

export const termSlice = createSlice({
  name: "term",
  initialState: {
    term: null,
  },
  reducers: {
    storeQueryTerm: (state, action) => {
      state.term = action.payload.query;
    },
  },
});

export const { storeQueryTerm } = termSlice.actions;

export const selectTerm = (state) => state.term.term;

export default termSlice.reducer;
