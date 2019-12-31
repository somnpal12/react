import React, { Component } from "react";
import { Button } from "react-bootstrap";

import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { count, incrementCount1 } = this.props;
    console.log(this.props);
    return (
      <div>
        <Button onClick={incrementCount1}>Click {count} times</Button>
      </div>
    );
  }
}

export default withCounter(ClickCounter);
