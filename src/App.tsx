import { useEffect, useState } from 'react';
import { useFetchWeatherData } from './api';
import { useThemeContext } from './context/themeContext';
//Components
import Header from './components/Header';
import Location from './components/Location';
import Navbar from './components/Navbar';
import WeatherData from './components/WeatherData';
import useCurrentLocation from './hooks/useCurrentlocation';

const API_ROOT = 'https://api.openweathermap.org/data/2.5';

function App(): JSX.Element {
  const { darkTheme } = useThemeContext();

  const { currentLocation, error } = useCurrentLocation();
  console.log(currentLocation);

  const [location, setLocation] = useState('Szigetvár');

  const {
    data: weatherData,
    isLoading,
    isError,
  } = useFetchWeatherData(API_ROOT, location);

  return (
    <div className={darkTheme ? 'App dark-theme' : 'App'}>
      <div className="container">
        <Header />
        <Navbar />
        <Location setLocation={setLocation} location={location} />
        <WeatherData weatherData={weatherData} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
