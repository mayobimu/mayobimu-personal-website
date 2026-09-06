import Image from "next/image";
import AboutIllustration from "@/components/AboutIllustration";
import BackToTop from "@/components/BackToTop";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import {
  ArrowLink,
  PawIcon,
  ProjectPreviewIcon,
  WritingCardIcon,
} from "@/components/SiteElements";
import { siteLinks } from "@/config/site";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Web Engineer</p>
            <h1 id="hero-title">
              <span className="headline-line pink">やさしさが、</span>
              <span className="headline-line">
                <span className="mint">めぐっていく</span>ように。
              </span>
            </h1>
            <p className="hero-description">
              技術や暮らしについて、
              <br />
              書いたり発信したりしています。
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#about">
                About me <span>→</span>
              </a>
              <a className="button button-secondary" href="#writing">
                Writing <span>→</span>
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="dot-grid dot-grid-top" />
            <div className="dot-grid dot-grid-side" />
            <svg className="hero-doodle" viewBox="0 0 520 500">
              <path className="doodle-mint doodle-top" d="M60 78c28-8 46-6 65-18" />
              <path
                className="doodle-mint doodle-bottom"
                d="M64 390c-31 4-41 37-15 43 24 6 33-29 8-25-22 4-31 33-8 47"
              />
              <path className="doodle-pink" d="M450 312c21 12 29 29 24 49" />
            </svg>
            <Image
              className="hero-character"
              src="/images/character/mayobimu.png"
              alt=""
              width={800}
              height={800}
              priority
            />
            <span className="spark spark-one">✦</span>
            <span className="spark spark-two">✧</span>
          </div>
        </section>

        <section className="about section-shell" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <PawIcon className="heading-paw" />
            <h2 id="about-title">About me</h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p>
                新卒で愛知県のWebサービス会社にWebエンジニアとして入社し、
                <br />
                現在は地元・京都でバックエンドを中心にWebサービスの開発・運用をしています。
              </p>
              <p>
                つくることも、書くことも好きです。
                <br />
                技術のことや、暮らしの中で感じたこと、実際に使ってよかったもの、考えたことなどを自分の言葉で残しています。
              </p>
              <blockquote>やさしさが、めぐっていくように。</blockquote>
              <p>
                自分の小さな行動や、つくったもの、書いたことが、誰かにとっての「ちょっといい」につながって、そこからまた、誰かへつながっていく。
              </p>
              <p>そんな循環を少しずつ増やしていけたらと思っています。</p>

              <div className="career-card">
                <div className="career-summary">
                  <svg className="career-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M4 9.5h16v9.25A1.25 1.25 0 0 1 18.75 20H5.25A1.25 1.25 0 0 1 4 18.75V9.5Zm0 4.25c4.8 2.1 11.2 2.1 16 0M10.5 14.5h3" />
                  </svg>
                  <div>
                    <h3>Career</h3>
                    <p>
                      これまでの経歴や仕事については、
                      <br />
                      Wantedlyにまとめています。
                    </p>
                  </div>
                </div>
                <a
                  className="career-link"
                  href={siteLinks.wantedly}
                  target="_blank"
                  rel="noreferrer"
                >
                  View my profile on Wantedly <span>→</span>
                </a>
              </div>
            </div>
            <div className="about-motifs">
              <AboutIllustration />
            </div>
          </div>
        </section>

        <section className="writing section-shell" id="writing" aria-labelledby="writing-title">
          <div className="section-heading">
            <PawIcon className="heading-paw" />
            <h2 id="writing-title">Writing</h2>
          </div>
          <div className="cards">
            <article className="card card-technology">
              <WritingCardIcon type="technology" />
              <p className="card-label">Technology</p>
              <h3>つくる・調べる・学ぶ</h3>
              <p>
                Web開発や技術について、
                <br />
                試したことや学んだことを書いています。
              </p>
              <div className="card-links">
                <ArrowLink href={siteLinks.zenn}>Zenn</ArrowLink>
                <ArrowLink href={siteLinks.qiita}>Qiita</ArrowLink>
              </div>
            </article>

            <article className="card card-life">
              <WritingCardIcon type="life" />
              <p className="card-label">Life &amp; Thoughts</p>
              <h3>暮らす・考える</h3>
              <p>
                育児や暮らし、教育、キャリアなど、
                <br />
                日々の経験や考えたことを書いています。
              </p>
              <div className="card-links">
                <ArrowLink href={siteLinks.note}>note</ArrowLink>
              </div>
            </article>
          </div>
        </section>

        <section
          className="projects section-shell"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="section-heading">
            <PawIcon className="heading-paw" />
            <h2 id="projects-title">Projects</h2>
          </div>
          <div className="project-cards">
            <article className="project-card">
              <ProjectPreviewIcon />
              <div className="project-copy">
                <p className="card-label">mayobimu Personal Website</p>
                <h3>mayobimu.com</h3>
                <p>
                  自分の活動をまとめたポートフォリオサイトです。
                </p>
                <ul className="tags" aria-label="使用技術">
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>AWS</li>
                </ul>
                <ArrowLink href={`${siteLinks.github}/mayobimu-personal-website`}>
                  View on GitHub
                </ArrowLink>
              </div>
            </article>

            <article className="coming-soon-card" aria-label="今後追加予定のプロジェクト">
              <span className="coming-soon-plus" aria-hidden="true">＋</span>
              <p>Coming soon…</p>
            </article>
          </div>
        </section>
      </main>

      <BackToTop />
      <SiteFooter />
    </>
  );
}
