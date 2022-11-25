import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function HooksMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      HooksMouse: X {x}, Y {y}
    </div>
  );
}

export default HooksMouse;
