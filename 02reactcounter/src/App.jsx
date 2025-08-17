import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const decreaseValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <div>
        <h1>cigarette aur react {counter}</h1>
        <button onClick={addValue}>add value {counter}</button>
        <br />
        <button onClick={decreaseValue}>decrease value {counter}</button>
        <p>value update counter{counter}</p>
      </div>
    </>
  );
}

export default App;
