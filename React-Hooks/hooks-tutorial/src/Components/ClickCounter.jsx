import React, { useState } from "react";

function ClickCounter() {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={clickHandler}>click {count} times</button>
    </div>
  );
}

export default ClickCounter;
