import { configureStore } from "@reduxjs/toolkit";
// createslices example
import userInfo from "../reducers/userInfo";

const store = configureStore({
  reducer: {
    userInfo: userInfo,
  },
});

export default store;
