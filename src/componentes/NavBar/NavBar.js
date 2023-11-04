//NAV BAR
import CartWidget from "../CardWidget/CartWidget";
import Logo from './logo.png';
import { NavLink, Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () =>{
    return (
        <nav className="has-navbar-fixed-top " role="navigation" aria-label="main navigation">
            <div className="navbar-brand navbar is-fixed-top">
            <figure className="navbar-item image is-128x128">
                <Link to='/'>
                    <img src={Logo} alt="logo"/>
                </Link> 
            </figure>               
            <div className="navbar-menu is-medium tabs is-right">
            <ul>
                <li><NavLink to={`/`} className= {({isActive})=> isActive ? 'ActiveOpcion' : 'opcion'}>Inicio</NavLink></li>
                <li><NavLink to={`/categoria/indumentaria`} className= {({isActive})=> isActive ? 'ActiveOpcion' : 'opcion'}>Indumentaria</NavLink></li>
                <li><NavLink to={`/categoria/accesorios`} className= {({isActive})=> isActive ? 'ActiveOpcion' : 'opcion'}>Accesorios</NavLink></li>
            </ul>
            </div>
            <CartWidget/>
            </div>
        </nav>                                 
    )}

export default NavBar;
