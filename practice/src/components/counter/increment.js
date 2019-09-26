import React from "react";

import { CounterContext } from "../context/counter-context.js";

class Increment extends React.Component {
  static contextType = CounterContext;

  render() {
    return (
      <div className="container">
        <button className="button" onClick={e => this.context.increment()}>
          {" "}
          +{" "}
        </button>
      </div>
    );
  }
}

export default Increment;
