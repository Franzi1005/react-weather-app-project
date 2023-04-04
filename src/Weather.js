export default function Weather() {
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
        <h1>Bremen</h1>
        <ul>
          <li>Tuesday, 04th April, 2023</li>
          <li>20:13</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <h2>7°C</h2>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 0%</li>
              <li>Humidity: 43%</li>
              <li>Wind 11 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
