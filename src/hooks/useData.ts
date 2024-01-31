import { useState, useEffect } from "react";

export const useData = <T>(endpoint: string, requestOptions?: RequestInit) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    fetch(endpoint, { ...requestOptions, signal: controller.signal })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error?.name === "AbortError") return;

        setError(error?.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};
