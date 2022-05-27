import { useEffect, useState } from 'react';
import { fetchItem } from './api';

export default function useFetchItem(id: number | null) {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const handleFetch = async () => {
    setIsLoading(true);

    if (id === null) {
      setData(null);
      setIsLoading(false);
      setError(null);
      return;
    }

    try {
      const response = await fetchItem(id);
      setData(response);
    } catch (e) {
      setError(e as Error);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, [id]);

  return { data, isLoading, error };
}
