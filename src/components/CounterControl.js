import React from "react";

export default function CounterControl(props) {
  return (
    <div className="controls">
      <button
        className="btn-stop"
        onClick={props.resetTimer}>
        ⟳
      </button>
      <button
        className="btn-start btn-bigger"
        onClick={props.startTimer}>
        ▶
      </button>
      <button
        className="btn-stop"
        onClick={props.stopTimer}>
        ◼
      </button>
    </div>
  );
}
