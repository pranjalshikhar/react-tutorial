import React from "react";
import { useState } from "react";

export const UseState = () => {
  const [count, setCount] = useState(0);
  console.log("UseState Render");
  return (
    <div>
      <h1>UseState Rendering</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count - {count} times
      </button>
      &nbsp;
      <label>Render {count} times.</label>
      <br />
      <button onClick={() => setCount(0)}>Count 0 times</button>
      &nbsp;
      <label>Render 0 times.</label>
      <br />
      <button onClick={() => setCount(5)}>Count 5 times</button>
      &nbsp;
      <label>Render 1 time.</label>
    </div>
  );
};
