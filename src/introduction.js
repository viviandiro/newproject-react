//import { ColorRing } from "react-loader-spinner";
import React, { useState } from "react";
import WeatherIcon from "./icons";

export default function Intro(props) {
  console.log(JSON.stringify(props, null, 1, +"intro"));

  const [unit, setUnit] = useState("C");
  function showCelsius(e) {
    e.preventDefault();
    setUnit("C");
  }

  function showFahrenheit(e) {
    e.preventDefault();
    setUnit("F");
  }

  return (
    <div className="Apps">
      <div class="col city">
        <ul class="list1">
          <h2>{props.data.cities}</h2>
          <li className="Temp">
            {unit === "C"
              ? `${Math.round(props.data.temperature)} °C`
              : `${props.celsiusToFahrenheit(props.data.temperature)} F`}
            {" | "}
            {unit === "C" ? (
              <a
                href="/"
                onClick={showFahrenheit}
                style={{
                  fontWeight: unit === "C" ? "bold" : "normal",
                }}
              >
                F
              </a>
            ) : (
              <a
                href="/"
                onClick={showCelsius}
                style={{
                  fontWeight: unit === "F" ? "bold" : "normal",
                }}
              >
                °C
              </a>
            )}
          </li>
          <li className="description" id="description">
            Description: {props.data.description}
          </li>
          <li className="hum">Humidity: {props.data.humidity} % </li>
          <li className="wind">Wind: {props.data.wind} km/h</li>
          <li>
            <WeatherIcon code={props.data.icon} size={130} />
          </li>
        </ul>
      </div>
    </div>
  );
}

/* <div>
  <ColorRing
    visible={true}
    height="150"
    width="120"
    ariaLabel="color-ring-loading"
    wrapperStyle={{}}
    wrapperClass="color-ring-wrapper"
    colors={["#011627", "#15A0BF", "#24b79c", "#abbd81", "#849b87"]}
  ></ColorRing>
</div>; */
