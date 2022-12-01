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
      return (state = 0);
    default:
      return state;
  }
};

export const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  console.log("UseReducer Render");
  return (
    <div>
      <div>{count}</div>
      <br />
      <button onClick={() => dispatch("increement")}>Increement</button>
      &nbsp;
      <button onClick={() => dispatch("decreement")}>Decreement</button>
      &nbsp;
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};
