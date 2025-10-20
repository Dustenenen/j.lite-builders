import React from "react";
import ReactDOM from "react-dom/client";
import JcoBuildersSite from "./JcoBuildersSite"; // ← your actual site
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <JcoBuildersSite />
  </React.StrictMode>
);
