import { useFetchDadJoke } from "../hooks/useFetchDadJoke";
import Joke from "./Joke";

const DadJoke = () => {
  const { data: dadJoke, error, isLoading } = useFetchDadJoke();

  return <Joke joke={dadJoke?.joke} error={error} isLoading={isLoading} />;
};

export default DadJoke;
