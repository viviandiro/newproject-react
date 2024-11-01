import axios from "axios";
import React, { useState } from "react";
import { ColorRing } from "react-loader-spinner";

export default function Weather() {
  let [city, setCity] = useState("");
  let [mostrar, setMostrar] = useState(false);
  let [weather, setWeather] = useState({});

  const [isImageVisible, setIsImageVisible] = useState(true);

  function datos(response) {
    setMostrar(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function searchCity(event) {
    event.preventDefault();
    setIsImageVisible(false);

    if (city === "") {
      alert("El campo no puede estar vacío");
      return;
       
     
    }

    let apiKey = "1dbf926d3b4417bf379db7043bec1047";
    let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(urlApi).then(datos);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={searchCity}>
      <input
        type="text"
        className="form"
        placeholder="Enter city 🔍"
        onChange={updateCity}
      />
      <button type="submit" className="btn1">
        Search
      </button>
    </form>
  );

  const renderContent = () => {
    if (mostrar) {
      return (
        <div className="Weather">
          {form}
          <h2> {city} </h2>
          <ul className="list1">
            <li className="Temp">{Math.round(weather.temperature)}°C</li>
            <li className="description" id="description">
              Description: {weather.description}
            </li>
            <li className="hum">Humidity: {weather.humidity} % </li>
            <li className="wind">Wind: {weather.wind} km/h</li>
            <li>
              <img src={weather.icon} alt={weather.description} />
            </li>
          </ul>
          <div className="row justify-content-center flex">
            <div className="col">
              <h3>MON </h3>
              <h1>🌤️ </h1>
            </div>
            <div className="col">
              <h3>TUE </h3>
              <h1>☀️ </h1>
            </div>

            <div className="col">
              <h3>WED </h3>
              <h1>🌦️ </h1>
            </div>

            <div className="col">
              <h3>THU </h3>
              <h1>⛈️ </h1>
            </div>
            <div className="col">
              <h3>FRI</h3>
              <h1>☁️</h1>
            </div>
          </div>
        </div>
      );
    } else {
      return form;
    }
  };

  return (
    <div className="App">
      {renderContent()}
      {isImageVisible && (
        <div>
          <ColorRing
            visible={true}
            height="150"
            width="120"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#011627", "#15A0BF", "#24b79c", "#abbd81", "#849b87"]}
          ></ColorRing>
        </div>
      )}
    </div>
  );
}
