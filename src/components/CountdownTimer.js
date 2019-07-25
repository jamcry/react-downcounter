import React from "react";
import CounterControl from "./CounterControl";
import CounterDisplay from "./CounterDisplay";
import "./CountdownTimer.css";
export default class CountdownTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsRemaining: parseInt(this.props.seconds) || 10,
      textColor: ""
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.tick = this.tick.bind(this);
  }

  startTimer() {
    this.timer = setInterval(this.tick, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  resetTimer() {
    this.stopTimer();
    this.setState({ secondsRemaining: 10, textColor: "" });
  }

  tick() {
    this.setState(prev => ({ secondsRemaining: prev.secondsRemaining - 1 }));
    if (this.state.secondsRemaining === 0) {
      this.stopTimer();
      this.setState({ textColor: "red" });
    }
  }

  render() {
    return (
      <div className="countdownClock">
        <CounterDisplay
          seconds={this.state.secondsRemaining}
          color={this.state.textColor}
        />
        <CounterControl
          startTimer={this.startTimer}
          stopTimer={this.stopTimer}
          resetTimer={this.resetTimer}
        />
      </div>
    );
  }
}
