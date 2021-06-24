import React, { useState } from 'react';
import { DataType } from '../api';
import { LocationType } from '../App';
import { useThemeContext } from '../context/themeContext';

interface Props {
  setLocation: React.Dispatch<React.SetStateAction<LocationType>>;
  weatherData: DataType['weatherData'];
}

const Location: React.FC<Props> = ({
  setLocation,
  weatherData,
}): JSX.Element => {
  const { darkTheme, displayLanguage } = useThemeContext();
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setLocation(query.trim().toLowerCase());
    setQuery('');
  };

  return (
    <section>
      <h3 className="location-title">
        {displayLanguage.locationTitle}{' '}
        <span className="location-text">{weatherData?.city}</span>
      </h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="query">{displayLanguage.searchLabel}</label>
        <input
          type="text"
          name="query"
          value={query}
          className="location-input"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
        />
        <button className={darkTheme ? 'primary-btn dark-btn' : 'primary-btn'}>
          {displayLanguage.searchButton}
        </button>
      </form>
    </section>
  );
};

export default Location;
