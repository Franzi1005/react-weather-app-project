import React from "react";
import "./temperature.css";

export default function Temperature(props) {
  return (
    <div className="temperature">
      <h2>{Math.round(props.celsius)} °C</h2>
    </div>
  );
}
