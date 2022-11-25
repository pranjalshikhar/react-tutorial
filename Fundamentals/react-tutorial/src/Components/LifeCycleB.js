import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Pranjal",
    };
    console.log("LifeCycleB Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleB componentDidMount");
  }

  componentWillUnmount() {
    console.log("LifeCycleB componentUnMount");
  }

  render() {
    console.log("LifeCycleB Render");
    return <div>LifeCycle B</div>;
  }
}

export default LifeCycleB;
