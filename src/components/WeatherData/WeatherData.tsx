import React from 'react';
import { DataType } from '../../api';
import { useSettingsContext } from '../../context/settingsContext';
//Components
import DataGroup from './DataGroup';
import Message from '../Message';

const WeatherData: React.FC<DataType> = ({
  data: weatherData,
  isLoading,
  isError,
}): JSX.Element => {
  const { displayLanguage } = useSettingsContext();

  if (isLoading) return <Message message={displayLanguage.loading} />;

  if (isError)
    return <Message message={displayLanguage.errorMsg} isError={true} />;

  return (
    <article className="weather-data-wrapper">
      <DataGroup
        title={displayLanguage.tempTitle}
        data={weatherData?.temperature}
      />

      <div className="data-group">
        <img
          src={`http://openweathermap.org/img/wn/${weatherData?.icon}@2x.png`}
          alt=""
        />
      </div>
      <DataGroup
        title={displayLanguage.feelsLikeTitle}
        data={weatherData?.feelsLike}
      />
      <DataGroup
        title={displayLanguage.descriptionTitle}
        data={weatherData?.description}
      />
    </article>
  );
};

export default WeatherData;
