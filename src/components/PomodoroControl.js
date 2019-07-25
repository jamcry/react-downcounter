import React from "react";
import "./PomodoroControl.css";

export default function PomodoroControl(props) {
  return (
    <div className="pomodoroControls">
      <button
        className="btn-break"
        onClick={() => props.setTimer(5 * 60)}>
        05
      </button>
      <button 
        className="btn-pomodoro btn-bigger"
        onClick={() => props.setTimer(25 * 60)}>
        25
      </button>
      <button 
        className="btn-longbreak"
        onClick={() => props.setTimer(15 * 60)}>
        15
      </button>
    </div>
  );
}
