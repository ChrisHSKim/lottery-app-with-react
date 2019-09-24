import React, { Component } from "react";

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    maxBalss: 6,
    maxnum: 40
  };
  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.maxBalls }) };
  }
  generate() {}

  handleClick() {
    this.generate();
  }

  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>Balls go here!</div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}

export default Lottery;
