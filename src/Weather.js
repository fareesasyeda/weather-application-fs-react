import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay.js";
import WeatherForecast from "./WeatherForecast.js";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  //const { ready, setReady } = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    //console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      //date: "Tuesday, Sep 27, 2021 5:45am",
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "6cb3c244f40c2fba37f9f592c3aba492";
    //let city = "Madrid";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h1 className="p-2 rounded shadow">Weather Application</h1>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-7 p-4 mt-3 mb-3">
              <input
                type="text"
                placeholder="Enter a city name"
                className="city"
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>

            <div className="col-5 p-4 mt-3 mb-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>{" "}
        </form>
        <WeatherDisplay data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
