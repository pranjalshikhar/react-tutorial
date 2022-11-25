import { useState } from "react";

function useCount() {
  const [count, setCount] = useState(0);
  const increement = () => {
    setCount((prev) => prev + 1);
  };
  const decreement = () => {
    setCount((prev) => prev - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return [count, increement, decreement, reset];
}

export default useCount;
