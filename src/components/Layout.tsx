import { Outlet, Link } from "react-router";
import styles from './Layout.module.scss'

function HELLO() {
    console.log('hello my friend')
}

const Layout = () => {   
    return (
        <div>
            <h1>Header</h1>
            <Link to='/'>Home </Link> 
            <br />
            <Link to='/about'>About </Link>
            <br />
            <Link to='/shop'>Shop </Link>
            <Outlet />
        </div>
    );
}

export default Layout;
