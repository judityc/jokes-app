import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
const APIS = [
  "Chuck Norris Joke",
  "Dad Joke",
  "General Joke",
  "Programing Joke",
] as const;

interface Props {
  onSelectJokeApi: (joke: string) => void;
  selectedJokeApi: string;
}

const SelectJoke = ({ onSelectJokeApi, selectedJokeApi }: Props) => {
  return (
    <>
      <FormControl>
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
          {APIS.map((api) => (
            <MenuItem value={api} key={api}>
              {api}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectJoke;
