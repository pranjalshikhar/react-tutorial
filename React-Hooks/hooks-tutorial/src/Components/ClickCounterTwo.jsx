import React from "react";
import { useState } from "react";

function ClickCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const increementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prev) => prev + 1);
    }
  };
  return (
    <div>
      Count: {count}
      <div>
        <button onClick={() => setCount(initialCount)}>reset</button>
        <button onClick={() => setCount((prev) => prev + 1)}>increement</button>
        <button onClick={() => setCount((prev) => prev - 1)}>decreement</button>
        <button onClick={increementFive}>increement by 5</button>
      </div>
    </div>
  );
}

export default ClickCounterTwo;
