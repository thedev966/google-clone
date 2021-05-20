import { configureStore } from "@reduxjs/toolkit";
import termReducer from "../features/termSlice";

export default configureStore({
  reducer: {
    term: termReducer,
  },
});
