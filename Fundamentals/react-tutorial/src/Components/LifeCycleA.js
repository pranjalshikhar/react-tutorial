import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Pranjal",
    };
    console.log("LifeCycleA Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  componentWillUnmount() {
    console.log("LifeCycleA componentUnMount");
  }

  render() {
    console.log("LifeCycleA Render");
    return (
      <div>
        LifeCycle A
        <div>
          <LifeCycleB />
        </div>
      </div>
    );
  }
}

export default LifeCycleA;
