import React from "react";
import { buyIcecream } from "../redux";
import { connect } from "react-redux";

const IcecreamContainer = (props) => {
  return (
    <div>
      <h2>Number of Icecreams: {props.numOfIcecream}</h2>
      <button onClick={props.buyIcecream}>Buy Icecream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIcecream: state.icecream.numOfIcecream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: () => dispatch(buyIcecream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);
