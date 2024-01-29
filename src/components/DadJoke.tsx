import { useDadJoke } from "../hooks/useDadJoke";
import Joke from "./Joke";

const DadJoke = () => {
  const { data: dadJoke, error, isLoading } = useDadJoke();

  return <Joke joke={dadJoke?.joke} error={error} isLoading={isLoading} />;
};

export default DadJoke;
