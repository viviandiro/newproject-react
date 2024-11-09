import "./index.css";
import milogo from "./images/github3.png";
import Weather from "./Weather";

function App() {
  return (
    <div className="Weather1">
      <h1>Weather App</h1>
      <Weather cityPrincipal="Bucaramanga" />

      <div class="footer">
        <span>
          <a
            href="https://github.com/viviandiro/newproject-react"
            alt="logo"
            target=""
          >
            <img class="icon-git " src={milogo} />
          </a>
          <br />
          <strong>By VivianDiro </strong>
        </span>
      </div>
    </div>
  );
}
export default App;
// <div id="container">{showInfo ? <Intro info={info} /> : null}</div>
//   <Weather setInfo={handleUpdateInfo} />
