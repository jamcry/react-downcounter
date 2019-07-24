import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secRemaining: parseInt(this.props.sec) || 100,
      timeRemaining: {},
      textColor: "black",
    };
    this.countdown = this.countdown.bind(this);
    this.startTimer()
  }

  startTimer() {
    this.timer = setInterval(this.countdown, 1000);
  }

  countdown() {
    const secRemaining = this.state.secRemaining - 1;
    this.setState(prevState => ({ ...prevState, secRemaining }));
    if (secRemaining === 0) {
      clearInterval(this.timer);
      this.setState(prevState => ({ ...prevState, textColor: "red" }));
    }
  }

  formatSeconds(sec) {
    let remainingSec = sec;
    const hours = Math.floor(remainingSec / (60 * 60));
    remainingSec %= 60 * 60;
    const mins = Math.floor(remainingSec / 60);
    remainingSec %= 60;
    const secs = Math.floor(remainingSec);
    return {
      h: hours,
      m: mins,
      s: secs
    };
  }

  formatTime(time) {
    const { h, m, s } = time;
    let hour = h.toString().padStart(2, "0");
    let min = m.toString().padStart(2, "0");
    let sec = s.toString().padStart(2, "0");
    return `${hour}:${min}:${sec}`;
  }

  getFormattedTimeString() {
    let secRemaining = this.state.secRemaining;
    let timeObject = this.formatSeconds(secRemaining);
    let formattedTimeString = this.formatTime(timeObject);
    return formattedTimeString;
  }

  render() {
    //if(this.state.active) this.startTimer();
    return (
      <h1 style={{ color: `${this.state.textColor}` }}>
        {this.getFormattedTimeString()}
      </h1>
    );
  }
}
