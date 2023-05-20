import { Link } from 'react-router-dom';
import styless from './Header.module.scss'

const  Header = ()  => {
   
  return (
    <div>
        <ul className={styless['ul']} >
           
            <li className={styless['li']}><Link to="/main">MAIN</Link> </li>
            <li className={styless['li']}><Link to='/edit'>EDIT DATA</Link> </li>
            <li className={styless['li']}><Link to='/view'>VIEW DATA</Link> </li>
        </ul>
    </div>
  )
}

export default Header;