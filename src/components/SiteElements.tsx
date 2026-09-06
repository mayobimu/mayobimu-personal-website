import Image from "next/image";
import type { ReactNode } from "react";

export function PawIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`paw-icon ${className}`}
      viewBox="0 0 174 160"
      aria-hidden="true"
    >
      <ellipse cx="18" cy="48" rx="17" ry="21" transform="rotate(-22 18 48)" />
      <ellipse cx="60" cy="25" rx="18" ry="22" transform="rotate(-7 60 25)" />
      <ellipse cx="114" cy="25" rx="18" ry="22" transform="rotate(7 114 25)" />
      <ellipse
        className="paw-icon-accent"
        cx="156"
        cy="48"
        rx="17"
        ry="21"
        transform="rotate(22 156 48)"
      />
      <path
        transform="translate(-14 0)"
        d="M74 69c-18 5-31 25-34 46-4 25 13 43 36 36 9-3 15-8 23-8s14 5 23 8c23 7 40-11 36-36-3-21-16-41-34-46-11-3-17 6-25 6s-14-9-25-6Z"
      />
    </svg>
  );
}

export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="arrow-link" href={href} target="_blank" rel="noreferrer">
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}

export function BrandLink({
  href,
  src,
  label,
}: {
  href: string;
  src: string;
  label: string;
}) {
  return (
    <a
      className={`brand-link brand-link-${label.toLowerCase()}`}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${label}を新しいタブで開く`}
    >
      <Image src={src} alt="" width={24} height={24} />
    </a>
  );
}

export function WritingCardIcon({ type }: { type: "technology" | "life" }) {
  const src =
    type === "technology"
      ? "/images/illustrations/writing-technology.svg"
      : "/images/illustrations/writing-life.png";

  return (
    <Image
      className="writing-card-icon"
      src={src}
      alt=""
      width={112}
      height={98}
    />
  );
}

export function ProjectPreviewIcon() {
  return (
    <svg className="project-preview-icon" viewBox="0 0 150 110" aria-hidden="true">
      <rect x="5" y="8" width="140" height="94" rx="5" />
      <path d="M5 24h140" />
      <circle cx="16" cy="16" r="2" />
      <circle cx="24" cy="16" r="2" />
      <circle cx="32" cy="16" r="2" />
      <rect className="preview-panel" x="14" y="34" width="45" height="56" rx="2" />
      <rect className="preview-mint" x="67" y="34" width="45" height="26" rx="2" />
      <rect className="preview-panel" x="67" y="67" width="67" height="23" rx="2" />
      <path className="preview-pink" d="M124 34v25m-12-13h24" />
    </svg>
  );
}
