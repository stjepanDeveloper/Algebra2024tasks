import "./App.css";
import Simpsons from "./components/Simpsons";
import CharacterSelector from './components/CharacterSelector'

function App() {
  return (
    <div>
      <h1>Simpsons Character Details</h1>
      <Simpsons />
      <h2>Select a Character</h2>
      <CharacterSelector />
    </div>
  );
}

export default App;
