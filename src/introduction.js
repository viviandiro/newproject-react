//import { ColorRing } from "react-loader-spinner";

import WeatherIcon from "./icons";

export default function Intro(props) {
  console.log(JSON.stringify(props, null, 1, +"intro"));

  return (
    <div className="Apps">
      <div class="col city">
        <ul class="list1">
          <h2>{props.data.cities}</h2>
          <li className="Temp">{Math.round(props.data.temperature)}°C</li>
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
