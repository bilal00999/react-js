import { useState } from "react";
import "./App.css";

function App() {
  const [add, setAdd] = useState(0);

  function increment() {
    setAdd((prev) => prev + 1);
  }
  function decrement() {
    if (add > 0) {
      setAdd((prev) => prev - 1);
    }
  }
  function reset() {
    setAdd(0);
  }

  return (
    <>
      <h1>Counter : {add}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
