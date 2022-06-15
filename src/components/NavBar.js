import stor from "../assets/STOR.png";

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
        <header style={styles.header}>
            <div style={styles.div}>
                <img style={styles.img} src={stor} alt="" />
            </div>
            <h1>Stor</h1>
            <ul style={styles.ul}>
                <li style={styles.li}><a style={styles.a} href="">About Us</a></li>
                <li style={styles.li}><a style={styles.a} href="">Our Products</a></li>
                <li style={styles.li}><a style={styles.a} href="">Contact Us</a></li>
            </ul>
            <div>
                <ul style={styles.ul}>
                    <li style={styles.li}><a style={styles.button} href="">Log In</a></li>
                    <li style={styles.li}><a style={styles.button} href="">Register</a></li>
                </ul>
            </div>
        </header>
    );
}

export default NavBar;