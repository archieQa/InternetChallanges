import {Link , Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <nav className='p-4 fixed left-0 top-0 h-full flex flex-col justify-center z-10'>
        <ul className='flex flex-col space-y-4'>
            <li className='text-white'>
                <Link to='/Home'>Home</Link>
            </li>
            <li className='text-white'>
                <Link to='/BetterToDo'>BetterToDo</Link>
            </li>
            <li className='text-white'>
                <Link to='/Counter'>Counter</Link>
            </li>
            <li className='text-white'>
                <Link to='/ExusEffect'>useEffect</Link>
            </li>
            <li className='text-white'>
                <Link to='/FormExample'>FormExample</Link>
            </li>
            <li className='text-white'>
                <Link to='/NewChallenge'>NewChallenge</Link>
            </li>
            <li className='text-white'>
                <Link to='/TodoApp'>TodoAPP</Link>
            </li>
            <li className='text-white'>
                <Link to='/DrawingApp'>DrawingApp</Link>
            </li >
            <li>
                <Link to='/RefWorks'>RefWorks</Link>
            </li>
            <li className='text-white'>
                <Link to='/LazyLoading'>LazyLoading</Link>
            </li>
            <li className='text-white'>
                <Link to='/Navbar'>Navbar</Link>
            </li>
            <li className='text-white'>
                <Link to='/Accordion'>Accordion</Link>
            </li>
            <li className='text-white'>
                <Link to='/Pagination'>Pagination</Link>
            </li>
            <li className='text-white'>
                <Link to='/Carousel'>Carousel</Link>
            </li>
        </ul>

    </nav>
    <div className='mt-16'> 
    <Outlet />
    </div> 
    </>
  )
}

export default Layout
