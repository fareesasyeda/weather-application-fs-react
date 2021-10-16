import React, { useState } from "react";

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

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <h1>
          <strong>{Math.round(props.celsius)}</strong>
        </h1>

        <h5 className="text-decoration-none">°C | </h5>

        <a href="/" onClick={showFahrenheit}>
          <h5 className="text-decoration-none">°F</h5>
        </a>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <h1>
          <strong>{Math.round(fahrenheit)}</strong>
        </h1>
        <a href="/" onClick={showCelsius}>
          <h5 className="text-decoration-none">°C | </h5>
        </a>
        <h5 className="text-decoration-none">°F</h5>
      </div>
    );
  }
}
