import ChuckNorrisJoke from "./components/ChuckNorrisJoke";
import DadJoke from "./components/DadJoke";
import SelectJoke from "./components/SelectJoke";
import { useState } from "react";
import EmptyState from "./components/EmptyState";
import AppLayout from "./components/AppLayout";
import Card from "./components/Card";

const getJokeComponent = (selectedJokeApi: string) => {
  if (selectedJokeApi === "DadJoke") return DadJoke;
  if (selectedJokeApi === "ChuckNorrisJoke") return ChuckNorrisJoke;

  return EmptyState;
};

function App() {
  const [selectedJokeApi, setSelectedJokeApi] = useState("");
  
  const JokeComponent = getJokeComponent(selectedJokeApi);

  return (
    <AppLayout>
      <SelectJoke
        onSelectJokeApi={setSelectedJokeApi}
        selectedJokeApi={selectedJokeApi}
      />
      <Card
        title="JOKE OF THE DAY!"
      >
        <JokeComponent />
      </Card>
    </AppLayout>
  );
}

export default App;
