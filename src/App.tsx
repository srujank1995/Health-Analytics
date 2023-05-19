import styless from "./App.module.scss"
import HomePage from "./Components/HomePage/HomePage";
import { ContextHealthMainWrapper } from './Context-Structure/ContextHealth-Main';
import ParentComponent from "./Parent-Component/ParentComponent";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><HomePage/></div>
  },
  {
    path: '/main',
    element: <div><ParentComponent/></div>
  }
])
function App() {
  
  return (
    <ContextHealthMainWrapper>
      <div className={styless["Heading-main"]}>
        <RouterProvider router={router}/>
      </div>
    </ContextHealthMainWrapper>
  );
}

export default App;
