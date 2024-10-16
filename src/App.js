import logo from "./logo.svg";
import React from "react";
import "./App.css";
import axios from "axios";
import { Hourglass } from "react-loader-spinner";

function App() {
  function searchCity(response) {
    alert(`the weather paris ${response.data.main.temp}`);
  }
  let apiKey = "1dbf926d3b4417bf379db7043bec1047";
  let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${apiKey}&units=metric`;
  axios.get(urlApi).then(searchCity);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello weather of my city</p>
        <a>Cargando....</a>
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
      </header>
    </div>
  );
}

export default App;
