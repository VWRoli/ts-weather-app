import { useState, useEffect, useCallback } from 'react';
import { LocationType } from '../App';

export interface DataType {
  data: {
    temperature: number;
    feelsLike: number;
    description: string;
    icon: string;
    city: string;
  } | null;
  isLoading: boolean;
  isError: boolean;
}

export const useFetchWeatherData = (
  url: string,
  location: LocationType
): DataType => {
  //Loading state
  const [isLoading, setIsLoading] = useState(true);
  //Error state
  const [isError, setIsError] = useState(false);

  const [data, setData] = useState<DataType['data']>(null);

  let completeApiUrl: string;

  if (typeof location === 'object') {
    completeApiUrl = `${url}/weather?lat=${location?.latitude}&lon=${location?.longitude}&appid=${process.env.REACT_APP_API_SECRET}&units=metric`;
  } else {
    completeApiUrl = `${url}/weather?q=${location}&appid=${process.env.REACT_APP_API_SECRET}&units=metric`;
  }

  const fetchData = useCallback(async () => {
    if (!location) return;
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch(completeApiUrl);
      const data = await response.json();

      const weatherData = {
        temperature: data.main.temp,
        feelsLike: data.main.feels_like,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        city: data.name,
      };

      setData(weatherData);

      //Disable loading screen
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  }, [location, completeApiUrl]);
  useEffect(() => {
    fetchData();
  }, [url, fetchData]);

  return { data, isLoading, isError };
};
