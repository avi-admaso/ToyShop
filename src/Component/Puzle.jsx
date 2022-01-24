import React from "react";
import { Component } from "react/cjs/react.development";
import { clientType } from "../Component/ToysContext";
class Puzle extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <h1> {clientType._currentValue}</h1>
      </section>
    );
  }
}
export default Puzle;
