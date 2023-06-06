import React from "react";
import ReactDOM from "react-dom";
import Title from "./components/Title.js";
import Map from "./components/Map.js";
import Chart from "./components/Chart.js";
import Denographics from "./components/Demographics.js";
import "./index.css";


function App() {
  return (
    <div className="app">
    
      <Title />

      <div className="sideBySide">
        <Chart />
        <div className="topBottom">
            <Map />
            <header2>
                <h2>Census Subdivision Demographics</h2>
            </header2>
            <p><br />
            Really big with lots of people!
            <br />&nbsp;
            <br />&nbsp;
            <br />&nbsp;
            <br /></p>
        </div>
      </div>

    </div>
  );
}

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
