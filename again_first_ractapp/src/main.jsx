import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";

// function displaySomething() {
//   return <h1>Hello i am bilal ahmed how are you</h1>;
// }

// const ReactElement1 = React.createElement(
//   "h1",
//   { class: "hello" },
//   "hello coders"
// );

const Chai = React.createElement(
  "h1",
  { class: "chai_aur_react" },
  "you wanna chai "
);

createRoot(document.getElementById("root")).render(Chai);
