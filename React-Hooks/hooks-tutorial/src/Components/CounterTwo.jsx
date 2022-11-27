import React from "react";
import { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increement":
      return { firstCounter: state.firstCounter + action.value };
    case "decreement":
      return { firstCounter: state.firstCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>count: {count.firstCounter}</div>
      <button onClick={() => dispatch({ type: "increement", value: 1 })}>
        increement
      </button>
      <button onClick={() => dispatch({ type: "decreement", value: 1 })}>
        decreement
      </button>
      <button onClick={() => dispatch({ type: "increement", value: 5 })}>
        increemnt by 5
      </button>
      <button onClick={() => dispatch({ type: "decreement", value: 5 })}>
        decreement by 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}

export default CounterTwo;
