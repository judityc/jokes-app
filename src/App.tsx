import ChuckNorrisJoke from "./components/ChuckNorrisJoke";
import DadJoke from "./components/DadJoke";
import SelectJoke from "./components/SelectJoke";
import { useState } from "react";
import EmptyState from "./components/EmptyState";
import AppLayout from "./components/AppLayout";
import Card from "./components/Card";
import ProgramingJoke from "./components/ProgramingJoke";
import GeneralJoke from "./components/GeneralJoke";

const getJokeComponent = (selectedJokeApi: string) => {
  if (selectedJokeApi === "DadJoke") return DadJoke;
  if (selectedJokeApi === "ChuckNorrisJoke") return ChuckNorrisJoke;
  if (selectedJokeApi === "ProgramingJoke") return ProgramingJoke;
  if (selectedJokeApi === "GeneralJoke") return GeneralJoke;

  return EmptyState;
};

function App() {
  const [selectedJokeApi, setSelectedJokeApi] = useState("");

  const JokeComponent = getJokeComponent(selectedJokeApi);

  const isDevMode = import.meta.env.DEV;

  return (
    <AppLayout>
      {isDevMode && <p>Dev Mode</p>}
      <SelectJoke
        onSelectJokeApi={setSelectedJokeApi}
        selectedJokeApi={selectedJokeApi}
      />
      <Card title="JOKE OF THE DAY!">
        <JokeComponent />
      </Card>
    </AppLayout>
  );
}

export default App;
