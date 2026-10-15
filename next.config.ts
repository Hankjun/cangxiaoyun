import type { NextConfig } from "next";
const pages = process.env.GITHUB_PAGES === "true";
const nextConfig: NextConfig = pages ? {
  output: "export",
  basePath: "/cangxiaoyun",
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: { tsconfigPath: "tsconfig.pages.json" },
} : {};
export default nextConfig;
