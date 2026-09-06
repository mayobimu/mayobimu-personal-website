import Image from "next/image";

export default function AboutIllustration() {
  return (
    <div className="about-illustration" aria-hidden="true">
      <svg className="about-routes" viewBox="0 0 500 400">
        <path
          className="about-route route-lavender"
          d="M104 82c65-35 134-43 190 6 43 38 29 86-12 103-56 23-77 62-45 105 30 41 92 35 134-4"
        />
        <path
          className="about-route route-mint"
          d="M72 112c-30 66-14 121 46 137 62 17 84 71 49 116"
        />
        <path
          className="about-route route-pink"
          d="M367 75c61 48 53 115 9 145-31 21-31 55 7 79"
        />
      </svg>
      <span className="about-asset asset-laptop">
        <Image src="/images/illustrations/about-laptop.png" alt="" width={550} height={423} />
      </span>
      <span className="about-asset asset-ramen">
        <Image src="/images/illustrations/about-ramen.png" alt="" width={392} height={440} />
      </span>
      <span className="about-asset asset-book">
        <Image src="/images/illustrations/about-book.png" alt="" width={466} height={390} />
      </span>
      <span className="about-asset asset-cats">
        <Image src="/images/illustrations/about-cats.png" alt="" width={528} height={398} />
      </span>
    </div>
  );
}
