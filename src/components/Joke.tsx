import { Box, CircularProgress } from "@mui/material";
import { TextH5 } from "./styledComponents";

interface Props {
  error: string;
  joke?: string;
  isLoading: boolean
}

const Joke = ({ error, joke, isLoading }: Props) => {
  return (
    <>
      {isLoading && (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      )}
      {error && <TextH5 variant="h5">{error}</TextH5>}
      {joke && <TextH5 variant="h5">{joke}</TextH5>}
    </>
  );
};

export default Joke;
