import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather.icon,
    });
  }

  if (weatherData.ready === true) {
    return (
      <div className="Weather">
        <div className="container">
          <form>
            <input
              autoFocus
              type="text"
              className="form-control"
              placeholder="Type a city..."
            ></input>
            <button type="submit" className="btn btn-primary">
              Search
            </button>
            <button type="button" className="btn btn-success">
              Current
            </button>
          </form>
          <h1>{weatherData.city}</h1>
          <div>
            <FormattedDate date={weatherData.date} />
          </div>
          <div className="row">
            <div className="col-6">
              <h2>{Math.round(weatherData.temperature)}°</h2>
            </div>
            <div className="col-6">
              <ul>
                <li className="text-capitalize">{weatherData.description}</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let city = props.defaultCity;
    const apiKey = "8a869017a9bbe9c440c0fea9e1fa0af6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
