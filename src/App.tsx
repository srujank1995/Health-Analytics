import styless from "./App.module.scss"
import { ContextHealthMainWrapper } from './Context-Structure/ContextHealth-Main';
import ParentComponent from "./Parent-Component/ParentComponent";

function App() {
  
  return (
    <ContextHealthMainWrapper>
      <h2 className={styless["Heading-main"]}>HEALTH MONITOR</h2>
    <div className="App">
      <ParentComponent/>
    </div>
    </ContextHealthMainWrapper>
  );
}

export default App;
