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
                        <a href="/">Privacy Policy</a>
                        <a href="/">Terms of Service</a>
                        <a href="/">Contact</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
