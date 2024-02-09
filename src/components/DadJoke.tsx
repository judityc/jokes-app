import { useFetchDadJoke } from "../hooks/useFetchDadJoke";
import Joke from "./Joke";

const DadJoke = () => {
  const { data: dadJoke, error, isLoading, fetchJoke } = useFetchDadJoke();
  return (
    dadJoke?.length && (
      <Joke
        jokes={dadJoke.map(data => data.joke)}
        error={error}
        isLoading={isLoading}
        fetchJoke={fetchJoke}
      />
    )
  );
};

export default DadJoke;
