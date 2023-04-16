import React from "react";

export default function FormattedDate(props) {
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let date = props.date.getDate();

  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let year = props.date.getFullYear();
  return (
    <ul>
      <li>
        {weekdays[props.date.getDay()]}, {date}. {months[props.date.getMonth()]}
        , {year}
      </li>
      <li>
        {hours}:{minutes}
      </li>
    </ul>
  );
}
