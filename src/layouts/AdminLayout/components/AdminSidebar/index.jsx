import { NavLink } from "react-router-dom";
import styles from "./AdminSidebar.module.scss";

const sidebarNavItems = [
    {
        to: "/admin",
        title: "Dashboard",
        end: true, // Đảm bảo link này chỉ active khi ở đúng path /admin
    },
    {
        to: "/admin/users",
        title: "Quản lý Users",
    },
    {
        to: "/admin/settings",
        title: "Cài đặt",
    },
];

function AdminSidebar() {
    return (
        <aside className={styles.sidebar}>
            <nav>
                <ul className={styles.navList}>
                    {sidebarNavItems.map((item, index) => (
                        <li key={index} className={styles.navItem}>
                            <NavLink
                                to={item.to}
                                end={item.end}
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

export default AdminSidebar;
