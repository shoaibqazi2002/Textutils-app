import "./App.css";
import Alert from "./Components/Alert";
import Navbar2 from "./Components/Navbar2";
import About from "./Components/About";
import Textform from "./Components/Textform";
import { useState } from "react";
import { BrowserRouter as Router, Routes,  Route, Link } from "react-router-dom";
// import { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toglemode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#2c2f4b";
      showAlert("dark mode has been enabled", "success");
    }
  };
  return (
    <>
    <Router>

    
        <Navbar2 heading="Textutils" mode={mode} toglemode={toglemode} />
        {/* jo naam se yaha value pass karre hai wahi naam se call karneka jaise maine yaha heading naam se banaya or navbar component m props.heading k naam se call kiya */}
        {/* <Alert Alert='this is alert' /> */}
        <Alert alert={alert} />
        <div className="container">
      <Routes>
         {/* use exact keyword before path for exact mathiching component */}
            <Route path="/about" element={<About mode={mode} />}/>
              
            {/* </Route> */}

            <Route path="/" element={<Textform
                showAlert={showAlert}
                heading=" Try TextUtils- Word counter, Character counter, Lowercase to uppercase & Uppercase to lowercase"
                mode={mode}
              />}/>
              
            {/* </Route> */}
          
       </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
