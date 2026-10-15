import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { sitePath } from "./site-path";

export async function generateMetadata(): Promise<Metadata> {
  const pages = process.env.GITHUB_PAGES === "true";
  const host = pages ? "hankjun.github.io" : (await headers()).get("host") ?? "cangxiaoyun.example";
  const base = new URL(`${host.includes("localhost") ? "http" : "https"}://${host}`);
  const title = "仓小云｜活动物料执行中枢";
  const description = "中域云仓的活动物料配置、跨城仓配、现场搭建与应急交付解决方案。";
  return {
    metadataBase: base,
    title,
    description,
    openGraph: { title, description, images: [{ url: new URL(sitePath("/og.png"), base).toString(), width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title, description, images: [new URL(sitePath("/og.png"), base).toString()] },
    icons: { icon: sitePath("/favicon.svg"), shortcut: sitePath("/favicon.svg") },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
