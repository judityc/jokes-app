import { Box, CircularProgress } from "@mui/material";
import { TextH5 } from "./styledComponents";

interface Props {
  error: string;
  joke?: string;
  isLoading: boolean;
}

const Joke = ({ error, joke, isLoading }: Props) => {
  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return <TextH5 variant="h5">{error}</TextH5>;
  }
  if (joke) {
    return <TextH5 variant="h5">{joke}</TextH5>;
  }
  return null;
};

export default Joke;
