import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIcecream } from "../redux";

function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item} </h2>
      <button onClick={props.dispatchItem}>Buy Item</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.icecream.numOfIcecream;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (state, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatchFunction(buyCake())
    : () => dispatchFunction(buyIcecream());

  return {
    dispatchItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
