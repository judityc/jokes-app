import { useFetchProgramingJoke } from "../hooks/useFetchProgramingJoke";
import Joke from "./Joke";

const DevJoke = () => {
  const { data: devJoke, error, isLoading } = useFetchProgramingJoke();

  return <Joke joke={devJoke?.joke} error={error} isLoading={isLoading} />;
};

export default DevJoke;
