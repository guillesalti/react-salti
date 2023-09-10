import CartWidget from "../CardWidget/CartWidget";
import Logo from './logo.png';


const NavBar = () =>{
    return (
        <nav className="has-navbar-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand ">
            <figure className="navbar-item image is-128x128">
            <img src={Logo} alt="logo"/>
            </figure>
            <div className="navbar-menu is-medium tabs is-right">
            <ul>
                <li><a>Inicio</a></li>
                <li><a>Indumentaria</a></li>
                <li><a>Zapatillas</a></li>
                <li><a>Accesorios</a></li>
                <li><a>Contacto</a></li>
            </ul>
            </div>
            <CartWidget/>
            </div>
                        
        </nav>                                 
    )
}
export default NavBar;
