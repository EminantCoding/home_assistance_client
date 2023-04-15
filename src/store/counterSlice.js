import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterReducer = {
  increment: (state, action) => {
    state.count = state.count + 1;
  },
  decrement: (state, action) => {
    state.count = state.count - 1;
  },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: counterReducer,
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
