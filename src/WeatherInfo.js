import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <h1>{props.data.city}</h1>
      <div>
        <FormattedDate date={props.data.date} />
      </div>
      <div className="row">
        <div className="col-6">
          <h2>{Math.round(props.data.temperature)}°</h2>
        </div>
        <div className="col-6">
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
