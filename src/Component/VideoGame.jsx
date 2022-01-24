import React from "react";
import { Component } from "react/cjs/react.development";
import { clientType } from "../Component/ToysContext";
class VideoGame extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <clientType.Consumer>
          {(value) => <h2> client {value}</h2>}
        </clientType.Consumer>
      </section>
    );
  }
}
export default VideoGame;
