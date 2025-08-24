import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [time, setTime] = useState(0);

  return (
    <>
      <div id="main">
        <h1>stop watch</h1>
        <div id="time_box">
          <p id="time">0:{time}</p>
        </div>
        <button id="start_btn">Start</button>
        <button id="pause_btn">Pause</button>
        <button id="reset_btn">Reset</button>
      </div>
    </>
  );
}

export default App;
