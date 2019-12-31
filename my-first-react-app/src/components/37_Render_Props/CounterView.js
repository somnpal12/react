import React, { Component } from "react";

import ClickCounter from "./ClickCounter_37";
import Counter from "./Counter";
import HoverCounter_37 from "./HoverCounter_37";

class CounterView extends Component {
  render() {
    return (
      <React.Fragment>
        <Counter>
          {(count, incrementCount) => (
            <ClickCounter
              count={count}
              incrementCount1={incrementCount}
            ></ClickCounter>
          )}
        </Counter>
        <Counter>
          {(count, incrementCount) => (
            <HoverCounter_37
              count={count}
              incrementCount1={incrementCount}
            ></HoverCounter_37>
          )}
        </Counter>
      </React.Fragment>
    );
  }
}

export default CounterView;
