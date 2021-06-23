import React from 'react';
import { DataType } from '../api';

const WeatherData: React.FC<DataType> = ({ weatherData }): JSX.Element => {
  console.log(weatherData);

  return (
    <>
      <h3>Current Weather Data</h3>
      <article className="weather-data-wrapper">
        <div className="data-group">
          <h4>Temperature:</h4> <p>{weatherData?.temperature}</p>
        </div>
        <div className="data-group">
          <img
            src={`http://openweathermap.org/img/wn/${weatherData?.icon}@2x.png`}
            alt=""
          />
        </div>
        <div className="data-group">
          <h4>Feels like:</h4> <p>{weatherData?.feelsLike}</p>
        </div>
        <div className="data-group">
          <h4>Description:</h4>{' '}
          <p className="description-data">{weatherData?.description}</p>
        </div>
      </article>
    </>
  );
};

export default WeatherData;
