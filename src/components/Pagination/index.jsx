import styles from "./Pagination.module.scss";

function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
        <ul className={styles.pagination}>
            <li>
                <button
                    onClick={() => onPageChange(1)}
                    className={styles.button}
                    disabled={currentPage === 1}
                >
                    First
                </button>
            </li>
            <li>
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    className={styles.button}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
            </li>
            {Array(totalPages)
                .fill(null)
                .map((_, index) => {
                    const pageNumber = index + 1;

                    return (
                        <li key={index}>
                            <button
                                className={`${styles.button} ${
                                    currentPage === pageNumber
                                        ? styles.active
                                        : ""
                                }`}
                                disabled={currentPage === pageNumber}
                                onClick={() => onPageChange(pageNumber)}
                            >
                                {pageNumber}
                            </button>
                        </li>
                    );
                })}
            <li>
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    className={styles.button}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </li>
            <li>
                <button
                    onClick={() => onPageChange(totalPages)}
                    className={styles.button}
                    disabled={currentPage === totalPages}
                >
                    Last
                </button>
            </li>
        </ul>
    );
}

export default Pagination;
