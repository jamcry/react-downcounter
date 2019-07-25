import React from "react";

export default function PomodoroControl(props) {
  return(
    <div className="pomodoroControls">
      <button onClick={() => props.setTimer(25*60)}>25</button>
      <button onClick={() => props.setTimer(5*60)}>05</button>
      <button onClick={() => props.setTimer(15*60)}>15</button>
    </div>
  );
}