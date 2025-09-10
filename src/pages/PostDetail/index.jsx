import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import styles from "./PostDetail.module.scss";

// Components
import CapFirst from "../../components/CapFirst";
import CommentList from "../../components/CommentList";

function PostDetail() {
    const params = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const postPromise = fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.id}`
        ).then((response) => {
            if (!response.ok) {
                throw new Error("Post not found");
            }
            return response.json();
        });

        const commentsPromise = fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
        ).then((response) => response.json());

        Promise.all([postPromise, commentsPromise])
            .then(([postData, commentsData]) => {
                setPost(postData);
                setComments(commentsData);
            })
            .catch((error) => {
                console.error(error);
                navigate("/posts");
            })
            .finally(() => setLoading(false));
    }, [params.id, navigate]);

    if (loading) return <p>Loading...</p>;

    return (
        <div className={styles.wrapper}>
            <div className={styles.meta}>
                <span>Post #{params.id}</span>
                {post && <span>Author ID: {post.userId}</span>}
            </div>
            {post && (
                <h1 className={styles.title}>
                    <CapFirst str={post.title} />
                </h1>
            )}
            {post && <p className={styles.body}>{post.body}</p>}
            <div className={styles.commentsSection}>
                <CommentList comments={comments} />
            </div>
        </div>
    );
}

export default PostDetail;
