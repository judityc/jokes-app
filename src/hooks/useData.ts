import { useState, useEffect } from "react";

export const useData = <T>(endpoint: string, requestOptions?: RequestInit) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  async function fetchJoke(signal?: AbortSignal) {
    setIsLoading(true);

    fetch(endpoint, { ...requestOptions, signal })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData((prevData) => [...prevData, res]);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error?.name === "AbortError") return;

        setError(error?.message);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    const controller = new AbortController();

    fetchJoke(controller.signal);

    return () => controller.abort();
  }, []);

  return { data, error, isLoading, fetchJoke };
};
