import { useEffect, useState } from 'react';
import { useFetchWeatherData } from './api';
import { useThemeContext } from './context/themeContext';
//Components
import Header from './components/Header';
import Location from './components/Location';
import Navbar from './components/Navbar';
import WeatherData from './components/WeatherData';
import useCurrentLocation, {
  CurrentLocationType,
} from './hooks/useCurrentlocation';

const API_ROOT = 'https://api.openweathermap.org/data/2.5';

export type LocationType = CurrentLocationType | string;

function App(): JSX.Element {
  const { darkTheme } = useThemeContext();

  const { currentLocation, error } = useCurrentLocation();

  const [location, setLocation] = useState<LocationType>(null);

  useEffect(() => {
    setLocation(currentLocation);
  }, [currentLocation]);

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
        <Location setLocation={setLocation} weatherData={weatherData} />
        <WeatherData
          weatherData={weatherData}
          isLoading={isLoading}
          isError={isError}
        />
      </div>
    </div>
  );
}

export default App;
