import { Outlet } from "react-router";
import AdminSidebar from "./components/AdminSidebar";
import AdminFooter from "./components/AdminFooter";
import styles from "./AdminLayout.module.scss";

function AdminLayout() {
    return (
        <div className={styles.wrapper}>
            <AdminSidebar />
            <div className={styles.mainPanel}>
                <main className={styles.content}>
                    <Outlet />
                </main>
                <AdminFooter />
            </div>
        </div>
    );
}

export default AdminLayout;
