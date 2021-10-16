import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="tempValue">
          <strong>{Math.round(props.celsius)}</strong>
        </span>

        <span className="unitLetter">°C |</span>

        <span className="unitLetter">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    //let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="tempValue">
          <strong>{Math.round(fahrenheit())}</strong>
        </span>

        <span className="unitLetter">
          <a href="/" onClick={showCelsius}>
            °C |
          </a>
        </span>

        <span className="unitLetter">°F</span>
      </div>
    );
  }
}
