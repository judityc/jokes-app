import { useData } from "./useData";

interface ChuckNoris {
  categories: unknown[];
  created_at: string;
  icon_url: string;
  id: number;
  updated_at: string;
  url: string;
  value: string;
}

export const useFetchChuckNorris = () =>
  useData<ChuckNoris>("https://api.chucknorris.io/jokes/random");
