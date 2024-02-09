import { useFetchGeneralJoke } from "../hooks/useFetchGeneralJoke";
import Joke from "./Joke";

const GeneralJoke = () => {
  const {
    data: generalJoke,
    error,
    isLoading,
    fetchJoke,
  } = useFetchGeneralJoke();

  return (
    generalJoke?.length && (
      <Joke
        jokes={generalJoke.map((data) => data.setup + " " + data.punchline)}
        error={error}
        isLoading={isLoading}
        fetchJoke={fetchJoke}
      />
    )
  );
};

export default GeneralJoke;
