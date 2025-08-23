import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const calculateBmi = (e) => {
    e.preventDefault();
    const heightfeet = Number(height * 0.3038);
    const bmiFormula = Number(weight / (heightfeet * heightfeet)).toFixed(2);
    setBmi(bmiFormula);
    setHeight("");
    setWeight("");
  };
  return (
    <>
      <div id="main">
        <h1>Bmi Calculator</h1>
        <form action="">
          <input
            type="text"
            placeholder="enter weight in kg"
            id="weight_input"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <input
            type="text"
            placeholder="enter height in feet"
            id="height_input"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <button id="button" onClick={calculateBmi}>
            Calculate bmi
          </button>
        </form>
      </div>
      <div id="your_bmi">
        <p>your bmi score is : {bmi}</p>
      </div>
      <div id="show_bmi_data">
        <p>Underweight Below 18.5</p>
        <p>Healthy 18.5 - 24.9</p>
        <p>Overweight 25.0 - 29.9</p>
        <p>Obesity 30.0 or above</p>
      </div>
    </>
  );
}

export default App;
