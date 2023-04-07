import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <h1>{props.data.city}</h1>
      <div>
        <FormattedDate date={props.data.date} />
      </div>
      <div className="row">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} />

          <Temperature celsius={props.data.temperature} />
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
