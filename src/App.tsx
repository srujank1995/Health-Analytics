import styless from "./App.module.scss"
import EditHealthRecords from "./Components/EditData/EditHealthRecords";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import TableData from "./Components/Table-Structure/Table-data";
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
  },
  {
    path:"/edit",
    element: <div><TableData/> </div>
  }
])
function App() {
  
  return (
    
    <ContextHealthMainWrapper>
      <div className={styless["Heading-main"]}>
        <Header/>
        <RouterProvider router={router}/>
      </div>
    </ContextHealthMainWrapper>
  );
}

export default App;
