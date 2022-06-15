import stor from "../../assets/STOR.png";
import "./NavBar.css";

const styles = {
    header: {
        backgroundColor: "#ffe0cf",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        overflow: "hidden"
    },
    ul: {
        listStyleType: "none",
        padding: 5
    },
    li: {
        display: "inline-block",
        margin: 5
    },
    a: {
        textDecoration: "none"
    },
    div: {
        width: "20%",
        maxWidth: "80px",
        padding: 5 
    },
    img: {
        width: "100%",
        height: "auto"
    },
    button: {
        textDecoration: "none",
        margin: "0 2px",
        padding: "1em",
        borderRadius: "1em",
        backgroundColor: "#157A6E",
        color: "white"
    }
};

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
        </header>
    );
}

export default NavBar;