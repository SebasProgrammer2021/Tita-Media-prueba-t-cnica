import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUserInfo = createAction("user/userInfo");

const initialState = {
  userinfo: {},
};

export const userInfo = createReducer(initialState, {
  [setUserInfo]: (state, action) => {
    state.userinfo = action.payload;
  },
});
