import { Link } from "react-router";
import styles from "./Footer.module.scss";

function Footer() {
    return (
        <footer className={styles.wrapper}>
            <div className="container">
                <div className={styles.content}>
                    <p>
                        &copy; {new Date().getFullYear()} F8. All rights
                        reserved.
                    </p>
                    <nav className={styles.nav}>
                        <Link to={"/privacy"}>Privacy Policy</Link>
                        <Link to={"/contact"}>Contact</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
