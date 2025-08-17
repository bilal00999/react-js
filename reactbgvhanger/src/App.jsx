import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 gap-12 p-4 rounded-full bg-white">
          <button
            className="bg-red-500 p-4 rounded-full text-white"
            onClick={() => setColor("red")}
          >
            red
          </button>
          <button
            className="bg-green-500 p-4 rounded-full text-white"
            onClick={() => setColor("green")}
          >
            green
          </button>
          <button
            className="bg-yellow-500 p-4 rounded-full text-white"
            onClick={() => setColor("yellow")}
          >
            yellow
          </button>
          <button
            className="bg-pink-500 p-4 rounded-full text-white"
            onClick={() => setColor("pink")}
          >
            pink
          </button>
          <button
            className="bg-purple-500 p-4 rounded-full text-white"
            onClick={() => setColor("purple")}
          >
            purple
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
