import React, { Component, useState } from "react";

// class component requires event binding

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };
  }

  clickHandler() {
    this.setState({
      message: "bye",
    });
    // console.log(this);
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
        <button onClick={() => this.clickHandler()}>click</button>
        {/* this method requires no event binding */}
      </div>
    );
  }
}

// functional component requires no even binding

// const EventBind = () => {
//   const [state, setstate] = useState("hi");
//   const clickHandler = () => {
//     setstate((state) => "bye");
//   };
//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={clickHandler}>click</button>
//     </div>
//   );
// };

export default EventBind;
