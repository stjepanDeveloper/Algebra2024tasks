import logo from "./logo.svg";
import "./App.css";
import RandomCharacterGenerator from "./components/RandomStringGenerator";
import RandomMomentGenerator from "./components/RandomMomentGenerator";

function App() {
  return (
    <div>
      <RandomCharacterGenerator />
      <RandomMomentGenerator />
    </div>
  );
}

export default App;
