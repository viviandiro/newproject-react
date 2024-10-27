import React from "react";
import "./index.css";
import { Hourglass } from "react-loader-spinner";
import Weather from "./Weather";

function App() {
  return (
    <div className="Weather1">
      <h1>Weather App</h1>
      <p>
        <Weather />
      </p>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#61dafb", "#72a1ed"]}
      />
    </div>
  );
}

export default App;
