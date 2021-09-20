import React from "react";
import reactDom from "react-dom";
import App from "./App";

function Main() {
  return <App />;
}

  reactDom.render(<Main />, document.getElementById("root"));
