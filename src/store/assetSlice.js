import apiLocations from "@/api/apiDirectory";
import { GET, POST, PUT, withCatch } from "@/api/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isFailed: false,
  isSucces: false,
  assetList: [],
};

export const getAssetListing = createAsyncThunk(
  "asset/assetlisting",
  async (payload) => {
    return withCatch(GET, apiLocations.GET_ASSET(), payload.token, {});
  }
);
export const postAsset = createAsyncThunk("asset/create", async (payload) => {
  return withCatch(POST, apiLocations.GET_ASSET(), "", payload);
});
export const putAsset = createAsyncThunk("asset/put", async (id, payload) => {
  return withCatch(PUT, apiLocations.PUT_ASSET(id), "", payload);
});
const assetReducer = {};

export const assetSlice = createSlice({
  name: "asset",
  initialState,
  reducers: assetReducer,
  extraReducers: {
    [getAssetListing.pending]: (state) => {
      state.isLoading = true;
      state.isSucces = false;
    },
    [getAssetListing.fulfilled]: (state, action) => {
      const { data } = action.payload.response;
      state.assetList = data;
      state.isSucces = true;
      state.isLoading = false;
    },
    [postAsset.pending]: (state) => {
      state.isLoading = true;
      state.isSucces = false;
    },
    [postAsset.fulfilled]: (state, action) => {
      console.log(action.payload.response.data);
      state.isSucces = true;
      state.isLoading = false;
    },
    [postAsset.rejected]: (state) => {
      state = initialState;
    },
  },
});

// export const { logOut } = assetSlice.actions;
export default assetSlice.reducer;
