import React from "react";
import secondsToHHMMSS from "../lib/timeFormatter";

export default function CounterDisplay(props) {
    return (
      <div class="counter">
        <h1 style={{ color: `${props.color}` }}>
          {secondsToHHMMSS(props.seconds)}
        </h1>
      </div>
      
    );
}