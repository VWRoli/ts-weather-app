import React from 'react';

const WeatherData = (): JSX.Element => {
  return (
    <>
      <h3>Current Weather Data</h3>
      <article className="weather-data-wrapper">
        <div className="data-group">
          <h4>Temperature:</h4> <p>45C</p>
        </div>
        <div className="data-group">
          <img src={`http://openweathermap.org/img/wn/10d@2x.png`} alt="" />
        </div>
        <div className="data-group">
          <h4>Feels like:</h4> <p>47C</p>
        </div>
        <div className="data-group">
          <h4>Description:</h4> <p>Clear</p>
        </div>
      </article>
    </>
  );
};

export default WeatherData;
