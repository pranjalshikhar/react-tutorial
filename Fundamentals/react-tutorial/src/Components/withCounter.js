import React from "react";

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    increementCount = () => {
      this.setState((prev) => {
        return { count: prev.count + 1 };
      });
    };
    render() {
      return (
        <OriginalComponent
          name="pranjal"
          count={this.state.count}
          increementCount={this.increementCount}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
