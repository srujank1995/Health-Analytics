import styless from "./App.module.scss"
import EditHealthRecords from "./Components/EditData/EditHealthRecords";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import TableData from "./Components/Table-Structure/Table-data";
import ViewHealthRecords from "./Components/ViewData/ViewHealthRecords";
import { ContextHealthMainWrapper } from './Context-Structure/ContextHealth-Main';
import ParentComponent from "./Parent-Component/ParentComponent";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root_Frame from "./Root-Frame/Root_Frame";

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Root_Frame/></div>,
    children: [
      {
        path: '/main',
        element: <div><ParentComponent/></div>
      },
      {
        path:"/edit",
        element: <div><ViewHealthRecords/> </div>
      }
    ]
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
