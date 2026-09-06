import Image from "next/image";
import Link from "next/link";
import { siteLinks } from "@/config/site";
import { PawIcon } from "@/components/SiteElements";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Writing", href: "#writing" },
  { label: "Projects", href: "#projects" },
] as const;

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="logo" href="/">
        mayobimu
        <PawIcon className="logo-paw" />
      </Link>
      <nav aria-label="メインナビゲーション">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <a
          className="external-icon-link github-icon-link"
          href={siteLinks.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHubを新しいタブで開く"
        >
          <Image src="/images/brands/github.svg" alt="" width={18} height={18} />
        </a>
        <a
          className="external-icon-link x-link"
          href={siteLinks.x}
          target="_blank"
          rel="noreferrer"
          aria-label="Xを新しいタブで開く"
        >
          <Image src="/images/brands/x.png" alt="" width={18} height={18} />
        </a>
      </nav>
    </header>
  );
}
