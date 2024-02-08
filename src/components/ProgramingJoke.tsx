import { useFetchProgramingJoke } from "../hooks/useFetchProgramingJoke";
import Joke from "./Joke";

const DevJoke = () => {
  const { data: devJoke, error, isLoading, fetchJoke } = useFetchProgramingJoke();

  return <Joke joke={devJoke?.joke} error={error} isLoading={isLoading} fetchJoke={fetchJoke} />;
};

export default DevJoke;
