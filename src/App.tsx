//Components
import { useState } from 'react';
import { useFetchWeatherData } from './api';
import Location from './components/Location';
import Navbar from './components/Navbar';
import WeatherData from './components/WeatherData';

const API_ROOT = 'https://api.openweathermap.org/data/2.5';

function App(): JSX.Element {
  const [location, setLocation] = useState('szigetvár');
  console.log(location);

  const {
    data: weatherData,
    isLoading,
    isError,
  } = useFetchWeatherData(API_ROOT, location);

  console.log(weatherData);

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Weather Application</h1>
        </header>
        <Navbar />
        <Location setLocation={setLocation} location={location} />
        <WeatherData weatherData={weatherData} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
