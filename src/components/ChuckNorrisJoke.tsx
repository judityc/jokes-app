import { useFetchChuckNorris } from "../hooks/useFetchChuckNorris";
import Joke from "./Joke";

const ChuckNorrisJoke = () => {
  const { data: chuckJoke, error, isLoading, fetchJoke } = useFetchChuckNorris();

  return <Joke joke={chuckJoke?.value} error={error} isLoading={isLoading} fetchJoke={fetchJoke}/>;
};
export default ChuckNorrisJoke;
