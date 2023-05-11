import './App.css';
import { ContextHealthMainWrapper } from './Components/Context-Structure/ContextHealth-Main';
import TableData from './Components/Table-Structure/Table-data';

function App() {
  return (
    <ContextHealthMainWrapper>
    <div className="App">
      <TableData/>
    </div>
    </ContextHealthMainWrapper>
  );
}

export default App;
