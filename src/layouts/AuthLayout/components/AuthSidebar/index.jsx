import { NavLink } from "react-router";
import styles from "./AuthSidebar.module.scss";

const sidebarNavItems = [
    {
        to: "/login",
        title: "Đăng nhập",
    },
    {
        to: "/register",
        title: "Đăng ký",
    },
    {
        to: "/forgot-password",
        title: "Quên mật khẩu",
    },
];

function AuthSidebar() {
    return (
        <aside className={styles.sidebar}>
            <nav>
                <ul className={styles.navList}>
                    {sidebarNavItems.map((item, index) => (
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
        </aside>
    );
}

export default AuthSidebar;
