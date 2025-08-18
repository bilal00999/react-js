// const { Children } = require("react");

// function renderReact(reactElement, container) {
//   const domElement = document.createElement(reactElement.type);
//   domElement.setAttribute("href", reactElement.props.href);
//   domElement.setAttribute("target", reactElement.props.target);
//   domElement.innerHTML = reactElement.children;

//   container.appendChild(domElement);
// }

function renderReact(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  domElement.innerHTML = reactElement.children;

  container.appendChild(domElement);
}

const reactElement = {
  type: "h1",
  props: {
    class: "write something",
  },
  children: "visit google",
};

let mainContainer = document.querySelector("#root");

renderReact(reactElement, mainContainer);
