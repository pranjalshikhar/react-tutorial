import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class ClickedCounter extends Component {
  render() {
    const { count, increementCount } = this.props;
    return (
      <button onClick={increementCount}>
        {this.props.name} clicked {count} times
      </button>
    );
  }
}

export default UpdatedComponent(ClickedCounter);
