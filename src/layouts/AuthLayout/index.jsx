import { Outlet } from "react-router";

import styles from "./AuthLayout.module.scss";
import Header from "../components/Header";
import AuthSidebar from "./components/AuthSidebar";

function AuthLayout() {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <AuthSidebar />
                <main className={styles.content}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default AuthLayout;
