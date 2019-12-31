import React, { Component } from "react";
import ComponentC from "./ComponentC";

// import MyContext from "./myContext";
import UserContext from "./userContext";

class ComponentB extends Component {
  static contextType = UserContext;

  render() {
    console.log(this.context);
    return (
      <div>
        Component E context - {this.context}
        <ComponentC></ComponentC>
      </div>
    );
  }
}

export default ComponentB;
