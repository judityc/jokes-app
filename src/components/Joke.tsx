import { Box, CircularProgress } from "@mui/material";
import { TextH5 } from "./styledComponents";
import Buttons from "./Buttons";
import { useState } from "react";
import styles from "./Joke.module.css"

interface Props {
  error: string;
  joke?: string;
  isLoading: boolean;
  fetchJoke: (signal?: AbortSignal) => void;
}

const Joke = ({ error, joke, isLoading, fetchJoke }: Props) => {
  const [jokesArr, setJokesArr] = useState<string[]>([]);
  console.log(jokesArr);

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
  if (joke) {
    return (
      <>
        <TextH5 variant="h5">{joke}</TextH5>
        <Box className={styles.container}>
          <Buttons
            onClickBack={() => console.log("Back")}
            onClickNext={() => {
              setJokesArr((prevJokesArr) => [...prevJokesArr, joke]);
              fetchJoke();
            }}
          />
        </Box>
      </>
    );
  }
  return null;
};

export default Joke;
