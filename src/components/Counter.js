import React from "react";
import secondsToHHMMSS from "../lib/timeFormatter";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secRemaining: parseInt(this.props.sec) || 10,
      textColor: "blue",
    };
    this.countdown = this.countdown.bind(this);
    this.startTimer()
  }

  startTimer() {
    this.timer = setInterval(this.countdown, 1000);
  }

  countdown() {
    const secRemaining = this.state.secRemaining - 1;
    this.setState({secRemaining});
    if (secRemaining === 0) {
      clearInterval(this.timer);
      this.setState({ textColor: "red" });
    }
  }

  render() {
    return (
      <h1 style={{ color: `${this.state.textColor}` }}>
        {secondsToHHMMSS(this.state.secRemaining)}
      </h1>
    );
  }
}
