import { useData } from "./useData";

interface DadJoke {
  id: string;
  joke: string;
  status: number;
}

export const useFetchDadJoke = () =>
  useData<DadJoke>("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });
