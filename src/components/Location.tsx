import React from 'react';

const Location = (): JSX.Element => {
  return (
    <section>
      <h3>
        Your current position: <span>Szigetvár</span>
      </h3>
      <form>
        <label htmlFor="query">Enter a city name:</label>{' '}
        <input type="text" name="query" className="location-input" />
        <button className="primary-btn">Search</button>
      </form>
    </section>
  );
};

export default Location;
