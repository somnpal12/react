import React, { Component } from "react";
import withCounter from "./withCounter";
class HoverCounter extends Component {
  render() {
    const { count, incrementCount1 } = this.props;
    return (
      <div>
        <h3 onMouseOver={incrementCount1}>Hover {count} times</h3>
      </div>
    );
  }
}

export default withCounter(HoverCounter);
