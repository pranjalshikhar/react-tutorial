import React from "react";
import { memo } from "react";

function Button({ handleClick, children }) {
  console.log("rendering button - ", children);
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
}

export default memo(Button);
