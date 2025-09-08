import styles from "./AdminFooter.module.scss";

function AdminFooter() {
    return (
        <footer className={styles.wrapper}>
            <p>
                Copyright &copy; {new Date().getFullYear()} F8 Admin Dashboard.
                All Rights Reserved.
            </p>
        </footer>
    );
}

export default AdminFooter;
