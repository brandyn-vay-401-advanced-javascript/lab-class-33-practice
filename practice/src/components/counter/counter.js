import React from "react";

import { CounterContext } from "../context/counter-context.js";

class Count extends React.Component {
  static contextType = CounterContext;

  render() {
    return (
      <div className="container">
        <span className="counter">{this.context.count}</span>
      </div>
    );
  }
}

export default Count;
