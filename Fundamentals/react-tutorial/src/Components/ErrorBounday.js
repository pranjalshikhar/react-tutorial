import React, { Component } from "react";

class ErrorBounday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerievedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBounday;
