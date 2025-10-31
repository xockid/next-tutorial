"use client";

import { useState } from "react";
import card from "../../styles/card.module.scss";
import styles from "../../styles/counter.module.scss";

export default function CounterPage() {
    const [count, setCount] = useState(0);

    return (
        <section className="card.card">
            <h1 className={card.title}>카운터 예제</h1>
            <p className={card.desc}>버튼을 눌러 값을 증가/감소해 보세요.</p>

            <div
                className={card.row}
                style={{ justifyContent: "space-between" }}
            >
                <span className={`${card.badge} ${styles.value}`}>{count}</span>
                <div className={card.actions}>
                    <button
                        className={styles.btnPrimary}
                        onClick={() => setCount((c) => c + 1)}
                    >
                        +1
                    </button>
                    <button
                        className={styles.btnGhost}
                        onClick={() => setCount((c) => c - 1)}
                    >
                        -1
                    </button>
                    <button
                        className={styles.btnDanger}
                        onClick={() => setCount(0)}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </section>
    );
}
