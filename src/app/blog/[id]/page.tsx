import styles from "../../../styles/blog.module.scss";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export default async function BlogDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        { cache: "no-store" }
    );
    if (!res.ok) {
        return <p>해당 글을 불러올 수 없습니다.</p>;
    }

    const post: Post = await res.json();

    return (
        <article className={styles.blogDetail}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </article>
    );
}
