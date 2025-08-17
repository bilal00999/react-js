import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 15;
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      console.log(counter);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log(counter);
    }
  };

  return (
    <>
      <h1>Chai Aur React</h1>
      <p>Counter : {counter}</p>
      <button onClick={addValue}>increase value {counter}</button>
      <button onClick={removeValue}>decrease value {counter}</button>
    </>
  );
}

export default App;
