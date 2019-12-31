import React, { Component } from "react";

class HoverCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }
  incrementCounter = () => {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
  };

  render() {
    return (
      <div>
        <h3 onMouseOver={this.incrementCounter}>
          Hover {this.state.counter} times
        </h3>
      </div>
    );
  }
}

export default HoverCounter;
