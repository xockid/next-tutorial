"use client";

import { useState } from "react";
import card from "../../styles/card.module.scss";
import styles from "../../styles/todo.module.scss";

export default function TodoPage() {
    const [todos, setTodos] = useState<string[]>([]);
    const [input, setInput] = useState("");

    const addTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        setTodos([...todos, input]);
        setInput("");
    };

    const removeTodo = (index: number) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <section className={card.card}>
            <h1 className={card.title}>Todo 앱</h1>
            <p className={card.desc}>할 일을 추가/삭제해 보세요.</p>

            <form className={styles.form} onSubmit={addTodo}>
                <input
                    placeholder="할 일을 입력하세요"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    aria-label="할 일 입력"
                />
                <button className={styles.add} type="submit">추가</button>
            </form>

            <div className={card.list}>
                {todos.map((todo, i) => (
                    <div key={i} className={styles.item}>
                        <span className={styles.text}>{todo}</span>
                        <button
                            className={styles.remove}
                            onClick={() => removeTodo(i)}
                        >
                            삭제
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
