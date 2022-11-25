import React from "react";
import useCount from "./useCount";

function FunctionHook() {
  //   const [count, setCount] = useState(0);
  //   const increement = () => {
  //     setCount((prev) => prev + 1);
  //   };
  //   const decreement = () => {
  //     setCount((prev) => prev - 1);
  //   };
  //   const reset = () => {
  //     setCount(0);
  //   };
  const [count, increement, decreement, reset] = useCount();
  return (
    <div>
      <h2>count = {count}</h2>
      <button onClick={increement}>increement</button>
      <button onClick={decreement}>decreement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default FunctionHook;
