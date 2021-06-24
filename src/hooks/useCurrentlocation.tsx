import { useEffect, useState } from 'react';

export type CurrentLocationType = {
  latitude: number;
  longitude: number;
} | null;

const useCurrentLocation = () => {
  const [error, setError] = useState('');
  const [currentLocation, setCurrentLocation] =
    useState<CurrentLocationType>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported.');
      return;
    }
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  const handleSuccess = (position: any) => {
    const { latitude, longitude } = position.coords;

    setCurrentLocation({ latitude, longitude });
  };

  const handleError = (error: any) => {
    setError(error.message);
  };

  return { currentLocation, error };
};

export default useCurrentLocation;
