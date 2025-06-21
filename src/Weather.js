import axios from "axios";
import React, { useState } from "react";
import Intro from "./introduction";
//import { ColorRing } from "react-loader-spinner";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.cityPrincipal);
  

  function datos(response) {
    setWeather({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon,
      description: response.data.condition.description,
      cities: response.data.city,
    });
  }
  console.log(weather);


  function celsiusToFahrenheit(celsius) {
    return Math.round((celsius * 9) / 5 + 32);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
    setWeather("");
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  function searchCity() {
    let apiKey = "5fo83cc24ef2fdc34ab409t8aa0016b3";
    let urlApi = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(urlApi).then(datos);
  }
  //api.openweathermap.org/data/2.5/weather?q=$bucaramanga&appid=$5fo83cc24ef2fdc34ab409t8aa0016b3&units=metric

  let form = (
    <form onSubmit={handleSubmit}>
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

  if (weather.ready) {
    return (
      <div className="Weather">
        {form}
        <Intro data={weather} celsiusToFahrenheit={celsiusToFahrenheit} />

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
    searchCity();
    return "loading...";
  }
}
