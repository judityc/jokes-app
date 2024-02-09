import { Box, CircularProgress } from "@mui/material";
import { TextH5 } from "./styledComponents";
import Buttons from "./Buttons";
import { useState } from "react";
import styles from "./Joke.module.css";

interface Props {
  error: string;
  jokes: string[];
  isLoading: boolean;
  fetchJoke: (signal?: AbortSignal) => Promise<void>;
}

const Joke = ({ error, jokes, isLoading, fetchJoke }: Props) => {
  const [jokeIndex, setJokeIndex] = useState(0);
  console.log({ jokes, jokeIndex });

  function handleClickBack() {
    setJokeIndex(jokeIndex - 1);
  }

  function handleClickNext() {
    setJokeIndex((prevIndex) => {
      const currentIndex = prevIndex + 1;

      if (jokes.length === currentIndex) {
        fetchJoke();
      }
      return currentIndex;
    });
  }

  if (isLoading) {
    return (
      <Box className={styles.container}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return <TextH5 variant="h5">{error}</TextH5>;
  }
  if (jokes) {
    return (
      <>
        <TextH5 variant="h5">{jokes[jokeIndex]}</TextH5>
        <Box className={styles.container}>
          <Buttons
            disabled={jokeIndex === 0}
            onClickBack={handleClickBack}
            onClickNext={handleClickNext}
          />
        </Box>
      </>
    );
  }
  return null;
};

export default Joke;
