import { useEffect, useState } from 'react';
import { useFetchWeatherData } from './api';
import { useSettingsContext } from './context/settingsContext';
import useCurrentLocation, {
  CurrentLocationType,
} from './hooks/useCurrentlocation';
//Components
import Header from './components/Header/Header';
import Location from './components/Location';
import Navbar from './components/Navbar/Navbar';
import WeatherData from './components/WeatherData/WeatherData';
import Message from './components/Message';

const API_ROOT = 'https://api.openweathermap.org/data/2.5';

export type LocationType = CurrentLocationType | string;

function App(): JSX.Element {
  const { darkTheme } = useSettingsContext();

  const { currentLocation, error } = useCurrentLocation();

  const [location, setLocation] = useState<LocationType>(null);

  useEffect(() => {
    setLocation(currentLocation);
  }, [currentLocation]);

  const { data, isLoading, isError } = useFetchWeatherData(API_ROOT, location);

  return (
    <div className={darkTheme ? 'App dark-theme' : 'App'}>
      <div className="container box-container">
        <Header />
        <Navbar />
        <Location setLocation={setLocation} data={data} isLoading={isLoading} />
        {error ? (
          <Message message={error} isError={true} />
        ) : (
          <WeatherData data={data} isLoading={isLoading} isError={isError} />
        )}
      </div>
    </div>
  );
}

export default App;
