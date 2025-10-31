type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Server Component (기본)
export default async function PostsPage() {
    // JSONPlaceholder API (무료 예제 API)에서 글 데이터 가져오기
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        // 데모에선 항상 최신 보기
        cache: "no-store",
    })
    const posts: Post[] = await res.json();

    return (
        <main>
            <h1>Posts 목록</h1>
            <ul>
                {posts.slice(0, 5).map((post) => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}