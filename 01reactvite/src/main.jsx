import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";

// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     Visit google
//   </a>
// );
const textApp = "hi every one";
const anotherReactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Visit google !",
  textApp
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* {anotherElement} */}
    {anotherReactElement}
  </StrictMode>
);
