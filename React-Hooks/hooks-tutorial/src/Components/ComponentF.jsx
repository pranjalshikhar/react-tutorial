import React from "react";
import { NameContext, UserContext } from "../App";

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <NameContext.Consumer>
              {(name) => {
                return (
                  <div>
                    user context value is <b>{user}</b> <b>{name}</b>
                  </div>
                );
              }}
            </NameContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
