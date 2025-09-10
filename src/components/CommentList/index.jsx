import CapFirst from "../CapFirst";

import styles from "./CommentList.module.scss";

function CommentList({ comments }) {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Comments ({comments.length})</h2>
            <ul className={styles.list}>
                {comments.map((comment) => (
                    <li key={comment.id} className={styles.item}>
                        <div className={styles.avatar}>
                            {comment.email.charAt(0)}
                        </div>
                        <div className={styles.content}>
                            <h4 className={styles.name}>
                                <CapFirst str={comment.name} />
                            </h4>
                            <h5 className={styles.email}>{comment.email}</h5>
                            <p className={styles.body}>
                                <CapFirst str={comment.body} />
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CommentList;
