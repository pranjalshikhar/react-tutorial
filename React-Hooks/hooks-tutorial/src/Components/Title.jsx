import React from "react";
import { memo } from "react";

function Title() {
  console.log("rendering title");
  return <h2>useCallback Hook</h2>;
}

export default memo(Title);
