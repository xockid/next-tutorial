"use client";

import { useEffect, useState } from "react";
import card from "../../styles/card.module.scss";
import styles from "../../styles/todo.module.scss";

type Todo = { id: string; text: string; createdAt: number };

export default function TodoApiPage() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    const load = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/todos", { cache: "no-store" });
            const data = await res.json();
            setTodos(data);
        } finally {
            setLoading(false);
        }
    };

    const add = async (e: React.FormEvent) => {
        e.preventDefault();
        const text = input.trim();
        if (!text) return;
        setSubmitting(true);
        try {
            const res = await fetch("/api/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text }),
            });
            if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                alert(err?.error || "추가 실패");
                return;
            }
            setInput("");
            await load();
        } finally {
            setSubmitting(false);
        }
    };

    const remove = async (id: string) => {
        const res = await fetch(`/api/todos/${id}`, { method: "DELETE" });
        if (!res.ok) {
            alert("삭제 실패");
            return;
        }
        // 낙관적 업데이트 (리스트에서 즉시 제거)
        setTodos((prev) => prev.filter((t) => t.id !== id));
    };

    useEffect(() => {
        load();
    }, []);

    return (
        <section className={card.card}>
            <h1 className={card.title}>Todo 앱 (API 연동)</h1>
            <p className={card.desc}>
                API Routes로 생성/조회/삭제를 구현했습니다.
            </p>

            <form className={styles.form} onSubmit={add}>
                <input
                    placeholder="할 일을 입력하세요"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    aria-label="할 일 입력"
                    disabled={submitting}
                />
                <button
                    className={styles.add}
                    type="submit"
                    disabled={submitting}
                >
                    {submitting ? "추가 중..." : "추가"}
                </button>
            </form>

            {loading ? (
                <p style={{ marginTop: "1rem" }}>불러오는 중...</p>
            ) : (
                <div className={card.list}>
                    {todos.length === 0 && <p>할 일이 없습니다.</p>}
                    {todos.map((todo) => (
                        <div className={styles.item} key={todo.id}>
                            <span className={styles.text}>{todo.text}</span>
                            <button
                                className={styles.remove}
                                onClick={() => remove(todo.id)}
                            >
                                삭제
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
