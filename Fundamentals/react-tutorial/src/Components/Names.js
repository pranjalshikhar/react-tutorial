import React from "react";

function Names({ name }) {
  return (
    <div>
      <h2>
        I am {name.name}, I am {name.age} years old, I am {name.skill}.
      </h2>
    </div>
  );
}

export default Names;
