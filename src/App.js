import React from "react";
import "./App.css";
import CountdownTimer from "./components/CountdownTimer";

function App() {
  return (
    <div className="App">
      <CountdownTimer seconds="65" />
    </div>
  );
}

export default App;
