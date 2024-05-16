// import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMystyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  // let myStyle={
  //   color : 'white',
  //   backgroundColor : 'black'
  // }
  // const [btntext, setBtntext] = useState("Enable dark mode");

  // const toggleMode = () => {
  //   if (myStyle.color === "black") {
  //     setMystyle({ color: "white", backgroundColor: "black",
    
  //     border: '1px solid white'
  //   });
  //     setBtntext("Enable light mode");
  //   }
  //    else {
  //     setMystyle({ color: "black", backgroundColor: "white" });
  //     setBtntext("Enable dark mode");
  //   }
  // };
  let myStyle={
    color: props.mode==="dark"?"white":"#042743",
    // backgroundColor: props.mode==="dark"?"rgb(6 10 40)":"white"
    // backgroundColor: props.mode==="dark"?"rgb(36 74 104)":"white"
    backgroundColor: props.mode==="dark"?" rgb(61 65 68)":"white"
  }

  return (
    <div className="container" style={{color: props.mode==="dark"?"white":"#042743"}}>
      <h1 className="my-3">About us</h1>
      <div className="accordion" style={myStyle} id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            style={myStyle}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              style={myStyle}
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button onClick={toggleMode} type="button" className="btn btn-success">
          {btntext}
        </button>
      </div> */}
    </div>
  );
}
