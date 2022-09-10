import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./Main";
/*
const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
  "3xl": "2600px",
  "4xl": "3400px",
  heading: `'NotoSans','Inter','Avenir','sans-serif'`,
  body: `'NotoSans','Inter','Avenir','sans-serif'`,
};

*/



ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
