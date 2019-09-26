import React from "react";

import CounterContext from "./components/context/counter-context.js";

import Counter from "./components/counter/counter.js";
import Increment from "./components/counter/increment.js";
import Decrement from "./components/counter/decrement.js";

import "./components/counter/counter.scss";

export default class App extends React.Component {
  render() {
    return (
      <CounterContext>
        <Increment />
        <Counter />
        <Decrement />
      </CounterContext>
    );
  }
}
