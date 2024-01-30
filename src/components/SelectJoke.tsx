import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

interface Props {
  onSelectJokeApi: (joke: string) => void;
  selectedJokeApi: string;
}

const SelectJoke = ({ onSelectJokeApi, selectedJokeApi }: Props) => {
  return (
    <>
      <FormControl sx={{ m: 2, minWidth: 320 }}>
        <InputLabel id="demo-simple-select-helper-label">
          Select Joke API
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Select Joke API"
          value={selectedJokeApi}
          onChange={(event) => onSelectJokeApi(event.target.value)}
        >
          <MenuItem value="ChuckNorrisJoke">Chuch Norris Joke</MenuItem>
          <MenuItem value="DadJoke">Dad Joke</MenuItem>
          <MenuItem value="ProgramingJoke">Programing Joke</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default SelectJoke;
