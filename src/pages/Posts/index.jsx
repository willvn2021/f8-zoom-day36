import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";

import styles from "./Posts.module.scss";

// Components
import CapFirst from "../../components/CapFirst";
import Pagination from "../../components/Pagination";

function Post() {
    const [params, setParams] = useSearchParams();
    const [page, setPage] = useState(() => Number(params.get("page") || 1));
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
        )
            .then((response) => response.json())
            .then((posts) => setPosts(posts))
            .finally(() => setLoading(false));
    }, [page]);

    useEffect(() => {
        setParams(page <= 1 ? {} : { page });
    }, [page, setParams]);

    if (loading) return <p>Loading...</p>;

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>All Posts: {posts.length}</h1>
            <ul className={styles.postList}>
                {posts.map((post) => (
                    <li key={post.id} className={styles.postItem}>
                        <Link
                            to={`/PostDetail/${post.id}`}
                            className={styles.postLink}
                        >
                            {post.id}. <CapFirst str={post.title} />
                        </Link>
                        <p className={styles.postBody}>{post.body}</p>
                    </li>
                ))}
            </ul>

            <div className={styles.pagination}>
                <Pagination
                    currentPage={page}
                    totalPages={10}
                    onPageChange={setPage}
                />
            </div>
        </div>
    );
}

export default Post;
