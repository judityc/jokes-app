import { useFetchGeneralJoke } from "../hooks/useFetchGeneralJoke";
import Joke from "./Joke";

const GeneralJoke = () => {
  const { data: generalJoke, error, isLoading } = useFetchGeneralJoke();

  return (
    <Joke
      joke={generalJoke?.setup + " " + generalJoke?.punchline}
      error={error}
      isLoading={isLoading}
    />
  );
};

export default GeneralJoke;
