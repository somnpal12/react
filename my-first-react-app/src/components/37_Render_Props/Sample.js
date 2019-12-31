import React, { Component } from "react";

class Sample extends Component {
  render() {
    return <div>Good {this.props.render(true)}</div>;
  }
}

export default Sample;
