import React, { Component, useEffect, useState } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increaseCount() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("new value", this.state.count);
    //   }
    // );
    // console.log("old value", this.state.count);

    this.setState((prev) => ({
      count: prev.count + 1,
    }));
    console.log(this.state.count);
  }

  increementFive() {
    this.increaseCount();
    this.increaseCount();
    this.increaseCount();
    this.increaseCount();
    this.increaseCount();
  }

  render() {
    return (
      <div>
        <div>count - {this.state.count}</div>
        <button onClick={() => this.increementFive()}>increase</button>
      </div>
    );
  }
}

// const Counter = () => {
//   const [state, setState] = useState(0);

//   const increement = () => {
//     setState(state + 1);
//   };

//   return (
//     <div>
//       <div>count - {state}</div>
//       <button onClick={increement}>increase</button>
//     </div>
//   );
// };

export default Counter;
