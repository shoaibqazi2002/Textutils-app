import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Navbar2(props) {
  return (
    <div>
      <div>
        <nav
          className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        >
          <div className="container-fluid">
            <Link to="/" className="navbar-brand" >
              {props.heading}
            </Link>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link" aria-current="page" >
                    Home</Link>
               </li>
                
                <li className="nav-item">
                  <Link to="/About" className="nav-link" >
                    About</Link>
                 </li>
                
              </ul>
              {/* <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
              <div className={`form-check form-switch text-${props.mode==='light'? "dark" : "light"}`}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  onClick={props.toglemode}
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  {/* if (props.mode===light) {
                  
                  "Enable dark mode"
                }
                else{
                  ' Enable light mode'
                  
                } */}
                Enable dark mode
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
