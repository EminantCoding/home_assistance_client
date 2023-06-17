import apiLocations from "@/api/apiDirectory";
import { GET, withCatch } from "@/api/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isFailed: false,
  isLoggedIn: false,
  assetList: [],
};

export const getAssetListing = createAsyncThunk(
  "asset/assetlisting",
  async (payload) => {
    return withCatch(GET, apiLocations.GET_ASSET(), payload.token, {});
  }
);

const assetReducer = {};

export const assetSlice = createSlice({
  name: "asset",
  initialState,
  reducers: assetReducer,
  extraReducers: {
    [getAssetListing.pending]: (state) => {
      state.isLoading = true;
      state.isLoggedIn = false;
    },
    [getAssetListing.fulfilled]: (state, action) => {
      const { data } = action.payload.response;
      state.assetList = data;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
  },
});

// export const { logOut } = assetSlice.actions;
export default assetSlice.reducer;
