import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@/store/counterSlice";

const CounterDemo = () => {
  const counter = useSelector((state) => state.counterSlice.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment(5))}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <div>{counter}</div>
    </div>
  );
};

export default CounterDemo;
