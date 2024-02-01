import ChuckNorrisJoke from "../components/ChuckNorrisJoke";
import DadJoke from "../components/DadJoke";
import EmptyState from "../components/EmptyState";
import GeneralJoke from "../components/GeneralJoke";
import ProgramingJoke from "../components/ProgramingJoke";

export const getJokeComponent = (selectedJokeApi: string) => {
    if (selectedJokeApi === "Dad Joke") return DadJoke;
    if (selectedJokeApi === "Chuck Norris Joke") return ChuckNorrisJoke;
    if (selectedJokeApi === "Programing Joke") return ProgramingJoke;
    if (selectedJokeApi === "General Joke") return GeneralJoke;
  
    return EmptyState;
  };
  