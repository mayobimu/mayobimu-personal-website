"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isStretched, setIsStretched] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsPastHero(window.scrollY > 120);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setIsStretched(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.setTimeout(() => setIsStretched(false), 750);
  };

  return (
    <button
      className={`back-to-top${!isPastHero ? " is-hidden" : ""}`}
      type="button"
      aria-label="ページ上部へ戻る"
      onClick={handleClick}
    >
      <Image
        className={`back-to-top-cat${isStretched ? " is-stretched" : ""}`}
        src={`/images/illustrations/cat-${isStretched ? "stretched" : "normal"}.png`}
        alt=""
        width={100}
        height={isStretched ? 180 : 100}
      />
    </button>
  );
}
