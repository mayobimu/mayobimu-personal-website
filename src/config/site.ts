export const siteLinks = {
  github: "https://github.com/mayobimu",
  x: "https://x.com/myobimu",
  wantedly: "https://www.wantedly.com/id/mayobimu",
  zenn: "https://zenn.dev/mayobimu",
  qiita: "https://qiita.com/mayobimu",
  note: "https://note.com/myobimu",
} as const;

export const footerLinks = [
  { label: "Zenn", href: siteLinks.zenn, icon: "/images/brands/zenn.svg" },
  { label: "Qiita", href: siteLinks.qiita, icon: "/images/brands/qiita.png" },
  { label: "note", href: siteLinks.note, icon: "/images/brands/note.svg" },
  { label: "GitHub", href: siteLinks.github, icon: "/images/brands/github.svg" },
  { label: "X", href: siteLinks.x, icon: "/images/brands/x.png" },
] as const;
