import { useData } from "./useData";

interface GeneralJoke {
  type: string;
  setup: string;
  punchline: string;
  id: 224;
}

export const useFetchGeneralJoke = () =>
  useData<GeneralJoke>("https://official-joke-api.appspot.com/jokes/random");
