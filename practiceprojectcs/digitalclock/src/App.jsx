import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(
        `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
      );
    }, 1000);
  }, [time]);
  return (
    <>
      <div id="main">
        <p id="time">{time}</p>
      </div>
    </>
  );
}

export default App;
