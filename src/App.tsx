import styless from "./App.module.scss"
import { ContextHealthMainWrapper } from './Context-Structure/ContextHealth-Main';
import ResponsiveAppBar from "./Parent-Component/Navigation-Bar";
import ParentComponent from "./Parent-Component/ParentComponent";

function App() {
  
  return (
    <ContextHealthMainWrapper>
      <div className={styless["Heading-main"]}>
        
        <ParentComponent/>
       
      </div>
    </ContextHealthMainWrapper>
  );
}

export default App;
