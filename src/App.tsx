import styless from "./App.module.scss"
import { ContextHealthMainWrapper } from './Context-Structure/ContextHealth-Main';
import ParentComponent from "./Parent-Component/ParentComponent";

function App() {
  
  return (
    <ContextHealthMainWrapper>
      <div className={styless["Heading-main"]}>

        <h2 className={styless['h2']}> HEALTH MONITOR</h2>
        <ParentComponent/>
      </div>
    
    
      

    </ContextHealthMainWrapper>
  );
}

export default App;
