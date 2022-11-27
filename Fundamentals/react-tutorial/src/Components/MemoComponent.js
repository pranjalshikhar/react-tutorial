import React from "react";

function MemoComponent({ name }) {
  console.log("Rendering Memo Component");
  return <div>{name}</div>;
}

export default React.memo(MemoComponent);

// React.meme() is a higher-order component
