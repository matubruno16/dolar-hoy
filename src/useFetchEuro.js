import { useEffect, useState } from "react";

export function useFetchEuro(url) {
  const [dataE, setData] = useState(null);
  const [loading, setLoading] = useState(true);
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
  const bancoNacion = dataE && dataE.length >= 11 ? dataE[11] : null;
  if (error) {
    return { dataE: null, loading: false, error };
  }

  return { dataE, loading, error: null, bancoNacion };
}
