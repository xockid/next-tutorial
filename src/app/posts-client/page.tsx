"use client"; //클라이언트 컴포넌트 선언
import { useState } from "react";

export default function PostsClientPage() {
    const [posts, setPosts] = useState<any[]>([]);

    const loadPosts = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data.slice(0, 5));
    };

    return (
        <main>
            <h1>Client Fetch Example</h1>
            <button onClick={loadPosts}>글 불러오기</button>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}
