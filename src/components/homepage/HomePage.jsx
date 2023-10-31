import { Outlet, Link, useLocation } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
    let location = useLocation();
    return (
        <>
            <Link to="/">
                <h1 className='heading'>Compelete React </h1>
            </Link>
            {location.pathname === '/' && <nav>
                <ul>
                    <li>
                        <Link to='/background'> BackGround Color </Link>
                    </li>
                    <li>
                        <Link to='/counter'> Counter </Link>
                    </li>
                    <li>
                        <Link to='/api'>API</Link>
                    </li>
                    <li>
                        <Link to="/theme">Theme</Link>
                    </li>
                    <li>
                        <Link to="/form">Form</Link>
                    </li>
                    <li>
                        <Link to="/cal">Calculator</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/optimization">Optmization</Link>
                    </li>
                    <li>
                        <Link to="/todo">TODO</Link>
                    </li>
                    <li>
                        <Link to="/search">Search</Link>
                    </li>
                    <li>
                        <Link to="/completeTodo" >Complete Todo</Link>
                    </li>
                </ul>
            </nav>
            }
            <Outlet />


        </>
    )
}

export default Homepage;