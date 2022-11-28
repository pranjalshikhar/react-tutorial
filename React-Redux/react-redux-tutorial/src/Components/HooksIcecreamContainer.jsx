import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIcecream } from "../redux";

const HokksIcecreamContainer = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2 style={{ color: "blue" }}>Number of Icecreams: {numOfIcecreams}</h2>
      <button onClick={() => dispatch(buyIcecream())}>Buy Icecreams</button>
    </div>
  );
};

export default HokksIcecreamContainer;
