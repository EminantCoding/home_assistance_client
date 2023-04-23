import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isLoading: false,
  isFailed: false,
};

const loginUser = (state, action) => {};
const logOutUser = (state, action) => {};

const loginReducer = {
  login: loginUser,
  logOut: logOutUser,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: loginReducer,
});

export const { login, logOut } = loginSlice.actions;
export default loginSlice.reducer;
