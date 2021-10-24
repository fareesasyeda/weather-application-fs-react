import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay.js";

import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
    //set variable to false, when corrinates change
  }, [props.coordinates]);

  function handleResponse(response) {
    //console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }
  //console.log(props);

  function load() {
    let apiKey = "6cb3c244f40c2fba37f9f592c3aba492";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleResponse);
  }

  //if loaded === true
  if (loaded) {
    //console.log(forecast);
    return (
      <div className="WeatherForecast">
        This is the forecast
        <div className="row">
          {forecast.map(function (dailyforecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyforecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}
