import { useState, useEffect, useCallback } from 'react';

export interface DataType {
  weatherData: {
    temperature: number;
    feelsLike: number;
    description: string;
    icon: string;
  } | null;
}

export const useFetchWeatherData = (url: string, location: string) => {
  //Loading state
  const [isLoading, setIsLoading] = useState(true);
  //Error state
  const [isError, setIsError] = useState(false);

  const [data, setData] = useState<DataType['weatherData'] | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${url}/weather?q=${location}&appid=${process.env.REACT_APP_API_SECRET}&units=metric`
      );
      const data = await response.json();

      const weatherData = {
        temperature: data.main.temp,
        feelsLike: data.main.feels_like,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
      };

      setData(weatherData);

      //Disable loading screen
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  }, [url, location]);
  useEffect(() => {
    fetchData();
  }, [url, fetchData]);

  return { data, isLoading, isError };
};
