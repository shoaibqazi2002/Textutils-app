import React, { useState } from "react";

export default function Textform(props) {
  const changeText = (event) => {
    setText(event.target.value);
  };
  const toUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success")
  };
  const tolower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success")
  };
  const tocleartext = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared text","success")
  };
  const tocopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied text","success")
  };
  const [text, setText] = useState("");
  return (
    <div>
      <div className="mb-3" style={{ color: props.mode === "dark" ? "white" : "#2c2f4b" }}>
        <h2>{props.heading}</h2>
        <textarea
          className="form-control"
          id="my box"
          rows={8}
          value={text}
          onChange={changeText}
          style={{ backgroundColor: props.mode === "dark" ? "#262a2e" : "white" , color: props.mode === "dark" ? "white" : "#2c2f4b"}}
        />
        <button className="btn btn-primary my-3 mx-2" disabled={text.length===0} onClick={toUpper}>
          Convert to upper case
        </button>
        <button className="btn btn-primary my-3 mx-2" disabled={text.length===0} onClick={tolower}>
          Convert to lower case
        </button>
        <button className="btn btn-primary my-3 mx-2" disabled={text.length===0} onClick={tocopy}>
          Copy text
        </button>
        <button className="btn btn-primary my-3 mx-2" disabled={text.length===0} onClick={tocleartext}>
          Clear text
        </button>
      </div>
      <div
        className="containers"
        style={{ color: props.mode === "dark" ? "white" : "#2c2f4b" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters are
          there
        </p>
        <p >{0.0008 * text.split(/\s/).filter((element)=>{return element.length!==0}).length } minutes need to read words</p>
      </div>
    </div>
  );
}
