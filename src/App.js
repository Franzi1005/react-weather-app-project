import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This site was coded by Franziska Schallhorn and is{" "}
          <a
            href="https://github.com/Franzi1005/react-weather-app-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
