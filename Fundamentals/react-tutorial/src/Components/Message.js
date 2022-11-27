import React, { Component, useState } from "react";

// usestate in class Component

// class Message extends Component {
//   constructor() {
//     super();
//     this.state = {
//       message: "Welcome Visitor!",
//     };
//   }

//   changeMessage() {
//     this.setState({
//       message: "Thank you for subscribing!",
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.message}</h1>
//         <button onClick={() => this.changeMessage()}>SUBSCRIBE</button>
//       </div>
//     );
//   }
// }

// useState in functional Component

const Message = () => {
  const [state, setState] = useState("welcome visitor");

  const changeMessage = () => {
    setState((state) => "thank you");
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={changeMessage}>Subscribe</button>
    </div>
  );
};

export default Message;
