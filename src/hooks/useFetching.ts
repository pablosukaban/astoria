// fetch with loading and error states

import { useState } from 'react';

export const useFetching = (callback: () => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = () => {
    setIsLoading(true);
    try {
      callback();
    } catch (e) {
      if (typeof e === 'string') {
        setError(e);
      }
    } finally {
      setIsLoading(false);
    }
  };


  return [fetching, error, isLoading];
};
