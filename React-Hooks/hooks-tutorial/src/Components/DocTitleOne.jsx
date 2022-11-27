import React, { useEffect } from "react";
import { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

function DocTitleOne() {
  const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     document.title = `count ${count}`;
  //   }, [count]);

  useDocumentTitle(count);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        count {count}
      </button>
    </div>
  );
}

export default DocTitleOne;
