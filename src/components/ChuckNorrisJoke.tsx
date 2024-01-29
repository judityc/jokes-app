import { useFetchChuckNorris } from "../hooks/useFetchChuckNorris";
import Joke from "./Joke";

const ChuckNorrisJoke = () => {
  const { data: chuckJoke, error, isLoading } = useFetchChuckNorris();

  return <Joke joke={chuckJoke?.value} error={error} isLoading={isLoading} />;
};

export default ChuckNorrisJoke;
