import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'


const Root_Frame = () => {
  return (
    
    <div>
        <h3>Main Page</h3>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Root_Frame