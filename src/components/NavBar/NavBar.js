import stor from "../../assets/STOR.png";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import {Link} from "react-router-dom"

const NavBar = () => {

    const categorias= [
        {type:"Cajas Pequeñas", router:"/products/small-boxes"},
        {type:"Cajas Medianas", router:"/products/medium-boxes"},
        {type:"Cajas Grandes", router:"/products/big-boxes"}
    ]

    return(
        <header className="header">
            <div className="div">
                <Link to="/">
                    <img className="img" src={stor} alt="" />
                </Link>
            </div>
            <h1>Stor</h1>
            <ul className="ul">
                <li className="li links"><Link className="a" to="/about-us">About Us</Link></li>
                <li className="desplegable">
                    <Link className="a" to="/our-products">Categories</Link>
                    <ul>
                        {categorias.map((categorias, index) => <li key={index} className=""><Link to={categorias.router}>{categorias.type}</Link></li>)}
                    </ul>
                    <div className="flecha"></div>
                </li>    
                <li className="li links"><Link className="a" to="/contact-us">Contact Us</Link></li>
            </ul>
            <div>
                <ul className="ul">
                    <li className="li"><Link className="button" to="/log-in">Log In</Link></li>
                    <li className="li"><Link className="button" to="/register">Register</Link></li>
                </ul>
            </div>
            <Link to="/cart">
                <CartWidget />
            </Link>
        </header>
    );
}

export default NavBar;