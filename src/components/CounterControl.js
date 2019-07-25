import React from "react";

export default function CounterControl(props) {
    return(
      <div className="controls">
        <button onClick={props.startTimer}>▶</button>
        <button onClick={props.stopTimer}>◼</button>
        <button onClick={props.resetTimer}>⟳</button>
      </div>
    );
}