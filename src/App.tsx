import SelectJoke from "./components/SelectJoke";
import { useState } from "react";
import AppLayout from "./components/AppLayout";
import Card from "./components/Card";
import { getJokeComponent } from "./utils/getJokeComponent";

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
