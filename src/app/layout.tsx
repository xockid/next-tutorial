import { Noto_Sans_KR } from "next/font/google";
import "@/styles/globals.scss"; // 글로벌 SCSS 적용
import styles from "@/styles/layout.module.scss";
import Link from "next/link";

const notoSansKR = Noto_Sans_KR({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export const metadata = {
    title: "Next.js 기초 강좌",
    description: "Next.js 개념과 사용법을 배우는 기초 강좌",
    openGraph: {
        title: "Next.js 기초 강좌",
        description: "Next.js 개념과 사용법을 배우는 기초 강좌",
        url: "https://next-tutorial.vercel.app",
        siteName: "Next.js 강좌",
        images: [
            {
                url: "https://next-tutorial.vercel.app/og-image.png",
                width: 1200,
                height: 630,
            },
        ],
        locale: "ko_KR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Next.js 기초 강좌",
        description: "Next.js 개념과 사용법을 배우는 기초 강좌",
        images: ["https://next-tutorial.vercel.app/og-image.png"],
    },
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
                        <Link href="/blog">블로그</Link>
                    </nav>
                </header>
                <main className={styles.container}>{children}</main>
                <footer className={styles.footer}>© 2025 My Next.js App</footer>
            </body>
        </html>
    );
}
