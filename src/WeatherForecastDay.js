import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  let date = new Date(props.data.dt * 1000);

  let day = date.getDay();

  let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let weekday = weekdays[day];

  return (
    <div className="dailyForecast">
      <div className="day">{weekday}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={32} />
      <div>
        <span className="max-temperature">
          {Math.round(props.data.temp.max)}°
        </span>{" "}
        /{" "}
        <span className="min-temperature">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
