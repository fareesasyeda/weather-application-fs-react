import React from "react";
//import axios from "axios";

import "./App.css";

export default function Weather() {
  let weatherData = {
    city: "Madrid",
    date: "Tuesaday, September 27, 2021 5:45am",
    temperature: 10,
    description: "Sunny",
    imgUrl: "http://openweathermap.org/img/wn/01d@2x.png",
    humidity: 67,
    wind: 8,
  };
  return (
    <div className="Weather">
      <div className="row">
        <div className="col p-6 mt-5 mb-5">
          <form>
            <input
              type="text"
              placeholder="Enter a city name"
              className="city"
              autoComplete="off"
            />
          </form>
        </div>

        <div className=" col p-6 mt-5 mb-5">
          <form>
            <input type="submit" value="Search" className="btn btn-primary" />
          </form>
        </div>
      </div>

      <div className="row">
        <div className="col border p-3 mt-5 mb-5 rounded shadow">
          <h5>{weatherData.date}</h5>
        </div>

        <div className="col border p-3 mt-1 mb-1 rounded shadow">
          <h1>{weatherData.city}</h1>
          <img
            src={weatherData.imgUrl}
            alt={weatherData.description}
            className="float-left"
          />
          <br />
          <h4>
            <strong>{weatherData.temperature}</strong>
          </h4>
          <a href="/">
            <h5 className="text-decoration-none">°C | </h5>
          </a>
          <a href="/">
            <h5 className="text-decoration-none">°F</h5>
          </a>
          <br />
          <span>
            <h4>{weatherData.descripotion}</h4>
          </span>
        </div>

        <div className="col border p-3 mt-5 mb-5 rounded shadow">
          <h5>
            Humidity:
            <span> {weatherData.humidity}</span>%<br />
            Wind:
            <span> {weatherData.wind}</span> <span>mph</span>
          </h5>
        </div>
      </div>

      <div className="weather-forecast"></div>
    </div>
  );
}
