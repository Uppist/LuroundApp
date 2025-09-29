/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Context from "./components/Context";
import { BrowserRouter, HashRouter } from "react-router-dom";
import ViewerContext from "./components/ViewerContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <HashRouter>
    <ViewerContext>
      <Context>
        <GoogleOAuthProvider clientId='884740114451-kgccogmqborb076i59o77kascumuei5g.apps.googleusercontent.com'>
          <App />
        </GoogleOAuthProvider>
      </Context>
    </ViewerContext>
  </HashRouter>
  // </React.StrictMode>
);
