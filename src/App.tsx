import styless from "./App.module.scss"
import { ContextHealthMainWrapper } from './WareHouse/Context-Structure/ContextHealth-Main';
import TableData from './Components/Table-Structure/Table-data';

function App() {
  return (
    <ContextHealthMainWrapper>
      <h2 className={styless["Heading-main"]}>HEALTH MONITOR</h2>
    <div className="App">
      <TableData/>
    </div>
    </ContextHealthMainWrapper>
  );
}

export default App;
