import ReactDOM from "react-dom/client";
import "./i18next";
import App from "./App";
import {BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);