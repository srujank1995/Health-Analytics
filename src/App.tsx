import styless from "./App.module.scss"
import { ContextHealthMainWrapper } from './Context-Structure/ContextHealth-Main';
import ViewHealthRecords from "./Components/ViewData/ViewHealthRecords";

function App() {
  return (
    <ContextHealthMainWrapper>
      <h2 className={styless["Heading-main"]}>HEALTH MONITOR</h2>
    <div className="App">
      <ViewHealthRecords/>
    </div>
    </ContextHealthMainWrapper>
  );
}

export default App;
