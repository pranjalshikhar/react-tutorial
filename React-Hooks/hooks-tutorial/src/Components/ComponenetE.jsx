import React, { useContext } from "react";
import { NameContext, UserContext } from "../App";
// import ComponentF from "./ComponentF";

function ComponenetE() {
  const user = useContext(UserContext);
  const name = useContext(NameContext);
  return (
    <div>
      {user} {name}
    </div>
  );
}

export default ComponenetE;
