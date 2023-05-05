import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import formSlice from "./form";
import loginSlice from "./login";
import { createWrapper } from "next-redux-wrapper";

const combineReducer = combineReducers({ counterSlice, formSlice, loginSlice });

export const makeStore = () =>
  configureStore({
    reducer: combineReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
export const wrapper = createWrapper(makeStore);
