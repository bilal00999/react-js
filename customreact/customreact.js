function customReact(reactElement, mainContainer) {
  const domElment = document.createElement(reactElement.type);
  domElment.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    domElment.setAttribute(prop, reactElement.props[prop]);
  }
  mainContainer.appendChild(domElment);
}

const reactElement = {
  type: "a",
  props: {
    target: "_blank",
    href: "https://www.google.com",
  },
  childern: "click me",
};
const mainContainer = document.getElementById("root");
customReact(reactElement, mainContainer);
