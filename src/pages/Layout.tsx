import {Link , Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <nav>
        <ul>
            <li>
                <Link to='/Home'>Home</Link>
            </li>
            <li>
                <Link to='/BetterToDo'>BetterToDo</Link>
            </li>
            <li>
                <Link to='/Counter'>Counter</Link>
            </li>
            <li>
                <Link to='/ExusEffect'>useEffect</Link>
            </li>
            <li>
                <Link to='/FormExample'>FormExample</Link>
            </li>
            <li>
                <Link to='/NewChallenge'>NewChallenge</Link>
            </li>
            <li>
                <Link to='/TodoApp'>TodoAPP</Link>
            </li>
            <li>
                <Link to='/DrawingApp'>DrawingApp</Link>
            </li>
            <li>
                <Link to='/RefWorks'>RefWorks</Link>
            </li>
        </ul>
    </nav>
    <Outlet /> 
    </>
  )
}

export default Layout
