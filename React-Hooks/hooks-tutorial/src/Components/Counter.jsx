import React from "react";
import { useState, useMemo } from "react";

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const increementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const increementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(
    () => () => {
      let i = 0;
      while (i < 2000000000) i++;
      return counterOne % 2 === 0;
    },
    [counterOne]
  );

  return (
    <div>
      <div>
        <button onClick={increementOne}>count one - {counterOne}</button>
        <span>{isEven() ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={increementTwo}>count two - {counterTwo}</button>
      </div>
    </div>
  );
}

export default Counter;
