import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function WeatherDisplay(props) {
  return (
    <div className="WeatherDisplay">
      <div className="row">
        <div className="col-4 border p-4 mt-5 mb-5 rounded shadow">
          <h5>
            <FormattedDate date={props.data.date} />
          </h5>
        </div>

        <div className="col-4 border p-2 mt-1 mb-1 rounded shadow">
          <h2>
            <strong>{props.data.city}</strong>
          </h2>
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="float-left m-0 p-0"
          />{" "}
          <h4 className="text-capitalize">{props.data.description}</h4>
          <h1>
            <strong>{Math.round(props.data.temperature)}</strong>
          </h1>
          <a href="/">
            <h5 className="text-decoration-none">°C | </h5>
          </a>
          <a href="/">
            <h5 className="text-decoration-none">°F</h5>
          </a>
        </div>

        <div className="col-4 border p-4 mt-5 mb-5 rounded shadow">
          <h5>
            <strong>Humidity:</strong>
            <span> {props.data.humidity}</span>%<br />
            <strong>Wind:</strong>
            <span> {Math.round(props.data.wind)} km/h</span>
          </h5>
        </div>
      </div>
    </div>
  );
}
