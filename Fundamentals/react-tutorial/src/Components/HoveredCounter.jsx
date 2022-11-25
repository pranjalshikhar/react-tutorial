import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class HoveredCounter extends Component {
  render() {
    const { count, increementCount } = this.props;
    return <h2 onMouseOver={increementCount}>hovered {count} times</h2>;
  }
}

export default UpdatedComponent(HoveredCounter);
