import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX🚀
  </h1>
);

//React Component

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);