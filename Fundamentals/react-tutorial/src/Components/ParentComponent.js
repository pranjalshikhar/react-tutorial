import React, { Component, PureComponent } from "react";
import ChildComponent from "./ChildComponent";
import MemoComponent from "./MemoComponent";
import PureComponents from "./PureComponents";
import RegularComponent from "./RegularComponent";

// class ParentComponent extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       parentName: "Parent",
//     };

//     this.greetParent = this.greetParent.bind(this);
//   }

//   greetParent(childName) {
//     alert(`Hello ${this.state.parentName} from ${childName}`);
//   }

//   render() {
//     return (
//       <div>
//         <ChildComponent greetHandler={this.greetParent} />
//       </div>
//     );
//   }
// }

class ParentComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Pranjal",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Pranjal",
      });
    }, 2000);
  }

  render() {
    console.log("*******************Parent Component*******************");
    return (
      <div>
        Parent Component
        <MemoComponent name={this.state.name} />
        {/* <RegularComponent name={this.state.name} /> */}
        {/* <PureComponents name={this.state.name} /> */}
      </div>
    );
  }
}

export default ParentComponent;
