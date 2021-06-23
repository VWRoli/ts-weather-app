import React, { useState } from 'react';

interface Props {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  location: string;
}

const Location: React.FC<Props> = ({ setLocation, location }): JSX.Element => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setLocation(query.trim().toLowerCase());
    setQuery('');
  };

  return (
    <section>
      <h3>
        Current Weather Data: <span className="location-text">{location}</span>
      </h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="query">Enter a city name:</label>
        <input
          type="text"
          name="query"
          value={query}
          className="location-input"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
        />
        <button className="primary-btn">Search</button>
      </form>
    </section>
  );
};

export default Location;
