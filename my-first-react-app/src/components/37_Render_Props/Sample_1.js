import React, { Component } from "react";

import Sample from "./Sample";

class Sample_1 extends Component {
  render() {
    return (
      <Sample render={isNoon => (isNoon ? "Morning" : "Evening")}></Sample>
    );
  }
}

export default Sample_1;
