// functional component

import React from "react";

const Greet = (props) => {
  // console.log(props);/
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        {name} is also k/a {heroName}
      </h1>
      {/* {props.children} */}
    </div>
  );
};

export default Greet;
