import { Noto_Sans_KR } from "next/font/google";
import "@/styles/globals.scss"; // 글로벌 SCSS 적용
import styles from "@/styles/layout.module.scss";
import Link from "next/link";

const notoSansKR = Noto_Sans_KR({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export const metadata = {
    title: "My Next.js App",
    description: "Next.js 기초 강좌 프로젝트",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className={notoSansKR.className}>
                <header className={styles.header}>
                    <nav>
                        <Link href="/">홈</Link>
                        <Link href="/about">소개</Link>
                        <Link href="/posts">Posts</Link>
                    </nav>
                </header>
                <main className={styles.container}>{children}</main>
                <footer className={styles.footer}>© 2025 My Next.js App</footer>
            </body>
        </html>
    );
}
