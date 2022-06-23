import stor from "../../assets/STOR.png";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
    return(
        <header className="header">
            <div className="div">
                <img className="img" src={stor} alt="" />
            </div>
            <h1>Stor</h1>
            <ul className="ul">
                <li className="li links"><a className="a" href="">About Us</a></li>
                <li className="li links"><a className="a" href="">Our Products</a></li>
                <li className="li links"><a className="a" href="">Contact Us</a></li>
            </ul>
            <div>
                <ul className="ul">
                    <li className="li"><a className="button" href="">Log In</a></li>
                    <li className="li"><a className="button" href="">Register</a></li>
                </ul>
            </div>
            <CartWidget />
        </header>
    );
}

export default NavBar;