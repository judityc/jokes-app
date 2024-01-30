import { useData } from "./useData";

interface DevJoke {
  error: false;
  category: string;
  type: string;
  joke: string;
  flags: {
    nsfw: false;
    religious: false;
    political: false;
    racist: false;
    sexist: false;
    explicit: false;
  };
  id: number;
  safe: true;
  lang: string;
}

export const useFetchProgramingJoke = () =>
  useData<DevJoke>("https://v2.jokeapi.dev/joke/Programming?type=single", {
    headers: { Accept: "application/json" },
  });
