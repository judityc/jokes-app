import { useFetchGeneralJoke } from "../hooks/useFetchGeneralJoke";
import Joke from "./Joke";

const GeneralJoke = () => {
  const { data: generalJoke, error, isLoading, fetchJoke } = useFetchGeneralJoke();

  const joke = generalJoke
    ? generalJoke?.setup + " " + generalJoke?.punchline
    : undefined;

  return <Joke joke={joke} error={error} isLoading={isLoading} fetchJoke={fetchJoke}/>;
};

export default GeneralJoke;
