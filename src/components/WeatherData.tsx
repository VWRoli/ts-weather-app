import React from 'react';
import { DataType } from '../api';
import { useThemeContext } from '../context/themeContext';

interface Props {
  isLoading: boolean;
  weatherData: DataType['weatherData'];
}

const WeatherData: React.FC<Props> = ({
  weatherData,
  isLoading,
}): JSX.Element => {
  const { displayLanguage } = useThemeContext();

  if (isLoading) return <p>{displayLanguage.loading}</p>;

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
