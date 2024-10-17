import axios from "axios";
import React, { useState } from "react";

export default function Weather() {
  let [city, setCity] = useState("");
  let [mostrar, setMostrar] = useState(false);
  let [weather, setWeather] = useState({});

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
    let apiKey = "1dbf926d3b4417bf379db7043bec1047";
    let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(urlApi).then(datos);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={searchCity}>
      <input type="text" placeholder="Enter city" onChange={updateCity} />
      <button type="submit">Search</button>
    </form>
  );

  if (mostrar) {
    return (
      <div className="Weather">
        {form}
        <h2> {city} </h2>
        <ul className="list1">
          <li className="Temp">
            Temperature: {Math.round(weather.temperature)}°C
          </li>
          <li className="description" id="description">
            Description: {weather.description}
          </li>
          <li className="hum">Humidity: {weather.humidity} % </li>
          <li className="wind">Wind: {weather.wind} km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}