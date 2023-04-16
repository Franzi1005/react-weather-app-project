import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      coordinates: response.data.coord,
      ready: true,
      date: new Date(),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "8a869017a9bbe9c440c0fea9e1fa0af6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready === true) {
    return (
      <div className="Weather">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input
              autoFocus
              type="text"
              className="form-control"
              placeholder="Type a city..."
              onChange={handleChange}
            ></input>
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
          <WeatherInfo data={weatherData} />
          <WeatherForecast
            coordinates={weatherData.coordinates}
            date={weatherData.date}
          />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
