import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);

    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .finally(() => setIsLoading(false));
  }, [url]);

  return [data, isLoading];
};
