import React from "react";
import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increement":
      return state + 1;
    case "decreement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => dispatch("increement")}>increement</button>
      <button onClick={() => dispatch("decreement")}>decreement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
}

export default CounterOne;
