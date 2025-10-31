import Link from "next/link";
import styles from "../../styles/blog.module.scss";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export default async function BlogPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-store",
    });
    const posts: Post[] = await res.json();

    return (
        <section className={styles.blogList}>
            <h1>블로그 글 목록</h1>
            <ul>
                {posts.slice(0, 10).map((post) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>
                            <h2>{post.title}</h2>
                            <p>{post.body.slice(0, 80)} ... </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
