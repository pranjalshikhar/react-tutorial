import React, { useState } from "react";
import HooksMouse from "./HooksMouse";

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>toggle display</button>
      {display && <HooksMouse />}
    </div>
  );
}

export default MouseContainer;
