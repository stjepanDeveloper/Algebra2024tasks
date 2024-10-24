import "./App.css";
import DefaultModule from "./modules/DefaultModule";
import { ModuleOne, ModuleTwo, ModuleThree } from "./modules/NamedModules";

function App() {
  return (
    <div>
      <DefaultModule />
      <ModuleOne />
      <ModuleTwo />
      <ModuleThree />
    </div>
  );
}

export default App;
