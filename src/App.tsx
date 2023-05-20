import styless from "./App.module.scss"
import EditHealthRecords from "./Components/EditData/EditHealthRecords";
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
        path:"/edit/:userid",
        element: <div><EditHealthRecords/> </div>
      },
      {
        path:'/view',
        element: <div><ViewHealthRecords/></div>
      }
    ]
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
