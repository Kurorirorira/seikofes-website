import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});//フォント読み込み

export const metadata: Metadata = {
  title: "第57回 聖光祭 | Home",
  description: "第57回 聖光祭が9/27(土)~9/28(日)に開催されます。今年のテーマは『共鳴』。模擬店や舞台、展示企画など、来場者の皆さまに楽しんでいただける催しが盛りだくさん。ぜひお越しください。",
  icons: "/images/アイコン.webp"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
