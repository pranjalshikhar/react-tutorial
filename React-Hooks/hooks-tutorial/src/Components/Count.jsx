import React from "react";
import { memo } from "react";

function Count({ text, count }) {
  console.log(`rendering ${text}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
}

export default memo(Count);