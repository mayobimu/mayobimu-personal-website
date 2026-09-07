import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <p className={styles.code}>404</p>
        <Image
          src="/images/illustrations/cat-normal.png"
          alt=""
          width={100}
          height={100}
          className={styles.cat}
        />
        <h1 className={styles.heading}>ページが見つかりませんでした</h1>
        <p className={styles.description}>
          URLが変更されたか、ページが削除された可能性があります。
          <br />
          トップページから、もう一度探してみてください。
        </p>
        <Link href="/" className={`button button-secondary ${styles.link}`}>
          トップページへ戻る <span aria-hidden="true">→</span>
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
