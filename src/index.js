import { StrictMode } from "react";
import React from "react";
import ReactDOM  from "react-dom";
import App from "./components/App";
import 'bootstrap'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);