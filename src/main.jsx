/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Context from "./components/Context";
import { BrowserRouter, HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <HashRouter>
    <Context>
      <App />
    </Context>
  </HashRouter>
  // </React.StrictMode>
);
