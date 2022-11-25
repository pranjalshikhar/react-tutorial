import React, { Component } from "react";

class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }

  usernameHandler = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  commentHandler = (e) => {
    this.setState({
      comments: e.target.value,
    });
  };

  topicHandler = (e) => {
    this.setState({
      topic: e.target.value,
    });
  };

  submitHandler = (e) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    e.preventDefault();
  };

  render() {
    const { username, comments, topic } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>Username</label>
          <input type="text" value={username} onChange={this.usernameHandler} />
        </div>
        <div>
          <label>Comments</label>
          <textarea value={comments} onChange={this.commentHandler} />
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.topicHandler}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default FormComponent;
