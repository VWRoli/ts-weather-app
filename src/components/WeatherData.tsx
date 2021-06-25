import React from 'react';
import { DataType } from '../api';
import { useSettingsContext } from '../context/settingsContext';

const WeatherData: React.FC<DataType> = ({
  data: weatherData,
  isLoading,
  isError,
}): JSX.Element => {
  const { displayLanguage } = useSettingsContext();

  if (isLoading) return <p className="message">{displayLanguage.loading}</p>;

  if (isError) return <p className="message">{displayLanguage.errorMsg}</p>;

  return (
    <article className="weather-data-wrapper">
      <div className="data-group">
        <h4>{displayLanguage.tempTitle}</h4>
        <p>{weatherData?.temperature} &#8451;</p>
      </div>
      <div className="data-group">
        <img
          src={`http://openweathermap.org/img/wn/${weatherData?.icon}@2x.png`}
          alt=""
        />
      </div>
      <div className="data-group">
        <h4>{displayLanguage.feelsLikeTitle}</h4>{' '}
        <p>{weatherData?.feelsLike} &#8451;</p>
      </div>
      <div className="data-group">
        <h4>{displayLanguage.descriptionTitle}</h4>
        <p className="description-data">{weatherData?.description}</p>
      </div>
    </article>
  );
};

export default WeatherData;
