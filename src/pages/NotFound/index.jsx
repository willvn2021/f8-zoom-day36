import { Link } from "react-router";
import styles from "./NotFound.module.scss";

function NotFound() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.message}>
                Oops! Trang bạn tìm kiếm không tồn tại.
            </p>
            <Link to="/" className={styles.homeLink}>
                Quay về trang chủ
            </Link>
        </div>
    );
}

export default NotFound;
