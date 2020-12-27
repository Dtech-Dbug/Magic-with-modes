import React, { useState } from "react";
import "./styles.css";
import "../images/..";

var superMan = <img src={require("./superman1.jpg")} alt="oops" />;
var superMan2 = <img src={require("./superman2.jpg")} alt="oops"></img>;

export default function App() {
  const [mode, setMode] = useState(false);

  function onClickHandler() {
    setMode(!mode);
  }
  return (
    <div className="test" style={{ background: `${mode ? "blue" : "black"}` }}>
      <h1 style={{ color: `${mode ? "Red" : "White"}` }}>
        Click on the button to toggle between superman and Ultraman.
      </h1>
      <button
        style={{ backgroundColor: `${mode ? "black" : "yellow"}` }}
        onClick={onClickHandler}
      >
        {mode ? "Ultraman" : "Superman"}
      </button>

      <h1 style={{ color: `${mode ? "red" : "white"}` }}>
        Welcome To DC Universe
      </h1>
      <h2 className="mode" style={{ color: `${mode ? "red" : "white"}` }}>
        {mode ? "Superman" : "Ultraman"}{" "}
      </h2>
      <div>{mode ? superMan : superMan2}</div>
    </div>
  );
}
