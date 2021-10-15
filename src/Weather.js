import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  //const { ready, setReady } = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true;
      city: response.data.main.name,
      date: "Tuesday, Sep 27, 2021 5:45am",
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/01d@2x.png",
      humidity: response.data.main.humidity,
      wind: response.data.main.wind.speed,
    });
   
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <h1 className="p-2 rounded shadow">Weather Application</h1>
          <div className="row">
            <div className="col-7 p-4 mt-3 mb-3">
              <form>
                <input
                  type="text"
                  placeholder="Enter a city name"
                  className="city"
                  autoComplete="off"
                  autoFocus="on"
                />
              </form>
            </div>

            <div className="col-5 p-4 mt-3 mb-3">
              <form>
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </form>
            </div>
          </div>

          <div className="row">
            <div className="col-4 border p-5 mt-5 mb-5 rounded shadow">
              <h5>{weatherData.date}</h5>
            </div>

            <div className="col-4 border p-2 mt-1 mb-1 rounded shadow">
              <h1>{weatherData.city}</h1>
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left m-0 p-0"
              />{" "}
              <h4 className="text-capitalize">{weatherData.description}</h4>
              <h1>
                <strong>{Math.round(weatherData.temperature)}</strong>
              </h1>
              <a href="/">
                <h5 className="text-decoration-none">°C | </h5>
              </a>
              <a href="/">
                <h5 className="text-decoration-none">°F</h5>
              </a>
            </div>

            <div className="col-4 border p-5 mt-5 mb-5 rounded shadow">
              <h5>
                Humidity:
                <span> {weatherData.humidity}</span>%<br />
                Wind:
                <span> {weatherData.wind}</span> <span>km/h</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "6cb3c244f40c2fba37f9f592c3aba492";
    let city = "Madrid";
    let units = "metric";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
