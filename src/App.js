import React from "react";
import "./index.css";
import { Hourglass } from "react-loader-spinner";
import Weather from "./Weather";

function App() {
  return (
    <div className="Weather">
      <h1>Weather App</h1>
      <p>
        <Weather />
      </p>
      <p>
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#61dafb", "#72a1ed"]}
        />
      </p>
    </div>
  );
}

export default App;
