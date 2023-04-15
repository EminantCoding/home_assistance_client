import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import { createWrapper } from "next-redux-wrapper";
const combineReducer = combineReducers({ counterSlice });

export const makeStore = () => configureStore({ reducer: combineReducer });
export const wrapper = createWrapper(makeStore);
