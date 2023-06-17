import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import formSlice from "./form";
import loginSlice from "./login";
import assetSlice from "./assetSlice";
import { createWrapper } from "next-redux-wrapper";

const combineReducer = combineReducers({
  counterSlice,
  formSlice,
  loginSlice,
  assetSlice,
});

export const makeStore = () =>
  configureStore({
    reducer: combineReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
export const wrapper = createWrapper(makeStore);
