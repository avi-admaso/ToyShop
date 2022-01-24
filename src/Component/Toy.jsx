import React from "react";
import { Component } from "react/cjs/react.development";
import Puzle from "./Puzle";
import VideoGame from "./VideoGame";
import Ball from "./Ball";
class Toy extends Component {
  constructor(props) {
    super(props);
    this.state = { company: "" };
    this.updatName = this.updatName.bind(this);
    this.updatAge = this.updatAge.bind(this);
    this.showName = this.showName.bind(this);
    this.state = { age: 0 };
  }
  updatName(e) {
    this.state.company = e.target.value;
  }
  updatAge(e) {
    this.state.age = e.target.value;
  }
  showName() {
    this.setState({ company: this.state.company });
  }
  componentWillMount() {
    alert("welcome");
  }
  componentDidMount() {
    console.log("good job ");
  }
  componentWillUpdate() {
    alert("we update this ");
  }
  componentDidUpdate() {
    console.log("we update that");
  }
  render() {
    let { toyName } = this.props;
    return (
      <section>

        <h1>{toyName}</h1>
        <input onChange={this.updatAge} type="text" /> <br />
        <input onChange={this.updatName} type="text" /> <br />
        <button onClick={this.showName}>click</button>
        <p>{this.state.company}</p>
        <p>{this.state.age}</p>
        <Puzle />
        <VideoGame />
        <Ball />
      </section>
    );
  }
}
export default Toy;
