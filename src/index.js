import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { ThemeProvider } from "styled-components";

const GreenTheme = {
  main: "dark-green",
  button: {
    color: "green"
  }
};

const RedTheme = {
  main: "dark-red",
  button: {
    color: "red"
  }
};

ReactDOM.render(
  <ThemeProvider theme={RedTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
