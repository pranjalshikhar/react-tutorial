import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler("child")}>click</button>
    </div>
  );
}

export default ChildComponent;
