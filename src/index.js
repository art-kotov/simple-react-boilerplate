// Core
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "mobx-react";
// Store
import { store } from "stores/root-store";
// Components
import App from "./components/App";

render(
  <Provider {...store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);