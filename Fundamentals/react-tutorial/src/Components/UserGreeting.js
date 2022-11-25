import React, { Component } from "react";

// conditional rendering

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggenIn: false,
    };
  }

  loginHandler() {
    this.setState({
      isLoggenIn: true,
    });
  }

  render() {
    if (this.state.isLoggenIn) {
      return (
        <div>
          <h1>welcome pranjal</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>welcome guest</h1>
          <button onClick={this.loginHandler.bind(this)}>log in</button>
        </div>
      );
    }
  }
}

export default UserGreeting;
