import React, { Component } from "react";
import { Button } from "react-bootstrap";

import UpdateCounter from "../34_HOC/withCounter";

class ClickCounter extends Component {
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
        <Button onClick={this.incrementCounter}>
          Click {this.state.counter} times
        </Button>
      </div>
    );
  }
}

export default UpdateCounter(ClickCounter);
