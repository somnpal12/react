import React, { Component } from "react";
import { Button } from "react-bootstrap";

class ClickCounter_37 extends Component {
  render() {
    const { count, incrementCount1 } = this.props;
    console.log(this.props);
    return (
      <React.Fragment>
        <Button onClick={incrementCount1}>Click {count} times</Button>
      </React.Fragment>
    );
  }
}

export default ClickCounter_37;
