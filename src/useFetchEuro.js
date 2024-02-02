import { useEffect, useState } from "react";

export function useFetchEuro(url) {
  const [dataE, setData] = useState(null);
  const [loadingE, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const dataE = await response.json();
        setData(dataE);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);
 
  if (error) {
    return { dataE: null, loadingE: false, error };
  }

  return { dataE, loadingE, error: null };
}
