import { Link, useLocation } from 'react-router-dom';
import style from './styles/navbar.module.css';

function Navbar() {
    const location = useLocation();

    return (
        <div className={style.navbar}>
            <Link className={`${style.navlink} ${location.pathname === "/" ? style.active : ""}`} to="/">Home</Link>
            <Link className={`${style.navlink} ${location.pathname === "/booking" ? style.active : ""}`} to="/booking">Book</Link>
            <Link className={`${style.navlink} ${location.pathname === "/status" ? style.active : ""}`} to="/status">Status</Link>
            <Link className={`${style.navlink} ${location.pathname === "/contact" ? style.active : ""}`} to="/contact">Contact</Link>
            <Link className={`${style.navlink} ${location.pathname === "/about" ? style.active : ""}`} to="/about">About</Link>
            <Link className={`${style.navlink} ${location.pathname === "/admin" ? style.active : ""}`} to="/admin">Admin</Link>

            <img src="nepaair_logo.png" alt="NepaAir Logo" height="64px" className={style.logo} />
        </div>
    );
}

export default Navbar;
