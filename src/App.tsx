import styless from "./App.module.scss"
import ContextHealthMain, { ContextHealthMainWrapper } from './Context-Structure/ContextHealth-Main';
import ViewHealthRecords from "./Components/ViewData/ViewHealthRecords";
import EditHealthRecords from "./Components/SetData/EditHealthRecords";
import { useContext } from "react";
import { Edit_mode, View_mode } from "./Context-Structure/StateTypeMain";

function App() {
  const HealthContext = useContext(ContextHealthMain)
    const {currentStatePage , } = HealthContext;
  return (
    <ContextHealthMainWrapper>
      <h2 className={styless["Heading-main"]}>HEALTH MONITOR</h2>
    <div className="App">
     {currentStatePage === View_mode && <ViewHealthRecords/>}
     {currentStatePage === Edit_mode && <EditHealthRecords/>}
    </div>
    </ContextHealthMainWrapper>
  );
}

export default App;
