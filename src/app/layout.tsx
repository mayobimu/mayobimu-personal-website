import type { Metadata } from "next";
import "@fontsource-variable/noto-sans-jp";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mayobimu.com"),
  title: "mayobimu｜やさしさが、めぐっていくように。",
  description: "Webエンジニアのmayobimuが、技術や暮らしについて書いたり発信したりする個人サイトです。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
