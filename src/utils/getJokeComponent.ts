import ChuckNorrisJoke from "../components/ChuckNorrisJoke";
import DadJoke from "../components/DadJoke";
import EmptyState from "../components/EmptyState";
import GeneralJoke from "../components/GeneralJoke";
import ProgramingJoke from "../components/ProgramingJoke";

export const getJokeComponent = (selectedJokeApi: string) => {
    if (selectedJokeApi === "DadJoke") return DadJoke;
    if (selectedJokeApi === "ChuckNorrisJoke") return ChuckNorrisJoke;
    if (selectedJokeApi === "ProgramingJoke") return ProgramingJoke;
    if (selectedJokeApi === "GeneralJoke") return GeneralJoke;
  
    return EmptyState;
  };
  