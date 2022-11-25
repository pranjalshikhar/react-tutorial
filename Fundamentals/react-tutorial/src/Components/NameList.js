import React from "react";
import Names from "./Names";

function NameList() {
  //   const names = [
  //     {
  //       id: 1,
  //       name: "Pranjal",
  //       age: 24,
  //       skill: "Batman",
  //     },
  //     {
  //       id: 2,
  //       name: "Shikhar",
  //       age: 25,
  //       skill: "Superman",
  //     },
  //     {
  //       id: 3,
  //       name: "Sinha",
  //       age: 25,
  //       skill: "Spiderman",
  //     },
  //   ];

  const names = ["Pranjal", "Shikhar", "Sinha", "Pranjal"];
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {name}, {index}
    </h2>
  ));
  //   const nameList = names.map((name) => <Names key={name.id} name={name} />);
  return <div>{nameList}</div>;
}

export default NameList;
