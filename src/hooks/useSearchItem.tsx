import { useEffect, useState } from 'react';
import { searchItem } from './api';

export default function useSearch(query: string = '') {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const handleSearch = async (searchQuery: string) => {
    setIsLoading(true);

    if (!searchQuery) {
      setData([]);
      setIsLoading(false);
      setError(null);
      return;
    }

    try {
      const response = await searchItem(searchQuery);
      setData(response);
    } catch (e) {
      setError(e as Error);
      setData([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleSearch(query);
  }, [query]);

  return { data, isLoading, error };
}
