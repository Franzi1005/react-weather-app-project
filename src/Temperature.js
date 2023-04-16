import React from "react";

export default function Temperature(props) {
  return (
    <div>
      <h2>{Math.round(props.celsius)} °C</h2>
    </div>
  );
}
