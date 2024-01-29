import { useState, useEffect } from "react";

export const useData = <T>(endpoint: string, requestOptions?: RequestInit) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(endpoint, requestOptions)
      .then((res) => {
        if (res.status >= 400) {
          return setError("Something went wrong...");
        }
        return res.json();
      })
      .then((res) => setData(res))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, error, isLoading };
};
