import apiLocations from "@/api/apiDirectory";
import { GET, POST, withCatch } from "@/api/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isLoading: false,
  isFailed: false,
  isLoggedIn: false,
  user: {},
};

export const getLoggedInUser = createAsyncThunk(
  "login/user",
  async (payload) => {
    return withCatch(POST, apiLocations.LOGIN(), "", payload);
  }
);

export const getUserDetails = createAsyncThunk(
  "login/user/me",
  async (payload) => {
    return withCatch(GET, apiLocations.USER_ME(), payload.token);
  }
);

const logOutUser = (state, action) => {};

const loginReducer = {
  logOut: logOutUser,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: loginReducer,
  extraReducers: {
    [getLoggedInUser.pending]: (state) => {
      state.isLoading = true;
      state.isLoggedIn = false;
    },
    [getLoggedInUser.fulfilled]: (state, action) => {
      console.log(action.payload.response.data);
      const { user, token } = action.payload.response.data;
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [getLoggedInUser.rejected]: (state) => {
      state = initialState;
    },

    [getUserDetails.pending]: (state) => {
      state.isLoading = true;
      state.isLoggedIn = false;
    },
    [getUserDetails.fulfilled]: (state, action) => {
      const { data } = action.payload.response;
      state.user = data;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [getUserDetails.rejected]: (state) => {
      state = initialState;
    },
  },
});

export const { logOut } = loginSlice.actions;
export default loginSlice.reducer;
