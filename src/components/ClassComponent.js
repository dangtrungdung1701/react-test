import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Dung",
      age: "21",
    };
  }
  ChangeData = () => {
    this.setState({
      name: "Dung dep trai",
      age: "10000",
    });
  };
  render() {
    return (
      <div>
        <h1>name: {this.state.name}</h1>
        <h1>age: {this.state.age}</h1>
        <button onClick={this.ChangeData}>Change data</button>
      </div>
    );
  }
}

export default ClassComponent;
