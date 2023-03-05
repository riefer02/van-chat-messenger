import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const rootElement = document.createElement("div");
rootElement.id = "chat-bot"; // Add an id attribute
document.body.appendChild(rootElement);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
