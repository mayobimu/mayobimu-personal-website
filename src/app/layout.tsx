import type { Metadata } from "next";
import "@fontsource-variable/noto-sans-jp";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mayobimu.com"),
  title: "mayobimu｜やさしさが、めぐっていくように。",
  description: "Webエンジニアのmayobimuが、技術や暮らしについて書いたり発信したりする個人サイトです。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://mayobimu.com/",
    siteName: "mayobimu",
    title: "mayobimu｜やさしさが、めぐっていくように。",
    description: "Webエンジニアのmayobimuが、技術や暮らしについて書いたり発信したりする個人サイトです。",
    images: [{
      url: "/images/ogp.png",
      width: 1731,
      height: 909,
      alt: "やさしさが、めぐっていくように。mayobimu.comと、パソコンを持ったキャラクター",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "mayobimu｜やさしさが、めぐっていくように。",
    description: "Webエンジニアのmayobimuが、技術や暮らしについて書いたり発信したりする個人サイトです。",
    images: [{
      url: "/images/ogp.png",
      alt: "やさしさが、めぐっていくように。mayobimu.comと、パソコンを持ったキャラクター",
    }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
