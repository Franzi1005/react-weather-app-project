import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("metric");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  if (unit === "metric") {
    return (
      <div>
        <h2>{Math.round(props.celsius)} °C</h2> Celsius |{" "}
        <a href="/" onClick={convertToFahrenheit}>
          Fahrenheit
        </a>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{Math.round((props.celsius * 9) / 5 + 32)} °F</h1>
        <a href="/" onClick={convertToCelsius}>
          Celsius
        </a>{" "}
        | Fahrenheit
      </div>
    );
  }
}
