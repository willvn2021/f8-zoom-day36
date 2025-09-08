import { NavLink } from "react-router";
import styles from "./Header.module.scss";

const navItems = [
    {
        to: "/",
        title: "Home",
    },
    {
        to: "/about",
        title: "About",
    },
    {
        to: "/posts",
        title: "Posts",
    },
    {
        to: "/login",
        title: "Login",
    },
    {
        to: "/register",
        title: "Register",
    },
    {
        to: "/admin",
        title: "Admin",
    },
];

function Header() {
    return (
        <header className={styles.wrapper}>
            <nav>
                <ul className={styles.navList}>
                    {navItems.map((item, index) => (
                        <li key={index} className={styles.navItem}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) =>
                                    isActive
                                        ? `${styles.navLink} ${styles.active}`
                                        : styles.navLink
                                }
                            >
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
