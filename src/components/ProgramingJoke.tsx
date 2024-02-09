import { useFetchProgramingJoke } from "../hooks/useFetchProgramingJoke";
import Joke from "./Joke";

const DevJoke = () => {
  const {
    data: devJokes,
    error,
    isLoading,
    fetchJoke,
  } = useFetchProgramingJoke();

  return (
    devJokes?.length && (
      <Joke
        jokes={devJokes.map(data => data.joke)}
        error={error}
        isLoading={isLoading}
        fetchJoke={fetchJoke}
      />
    )
  );
};

export default DevJoke;
