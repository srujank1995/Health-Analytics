import styless from './Header.module.scss'

const  Header = ()  => {
   
  return (
    <div>
        <ul className={styless['ul']} >
            <li className={styless['li']}><a href="/">Home</a> </li>
            <li className={styless['li']}><a href="/main">Main</a> </li>
            <li className={styless['li']}><a href="/edit">Edit Data</a> </li>
        </ul>
    </div>
  )
}

export default Header;