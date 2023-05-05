import apiLocations from "@/api/apiDirectory";
import { POST, withCatch } from "@/api/services";
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
const loginUser = async (state, { payload }) => {
  const [error, response] = await withCatch(
    POST,
    apiLocations.LOGIN(),
    "",
    payload
  );
  if (response) {
    const { token, user } = response.data;
    try {
      state = { ...state, token: token, user: user };
    } catch (err) {
      state = { ...state, token: null, user: {} };
    }
  }

  return [error, response];
};
const logOutUser = (state, action) => {};

const loginReducer = {
  login: loginUser,
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
  },
});

export const { login, logOut } = loginSlice.actions;
export default loginSlice.reducer;
