import { footerLinks } from "@/config/site";
import { BrandLink, PawIcon } from "@/components/SiteElements";

export default function SiteFooter() {
  return (
    <footer>
      <div className="footer-inner section-shell">
        <p className="logo">
          mayobimu
          <PawIcon className="logo-paw" />
        </p>
        <div className="footer-links" aria-label="外部サービスへのリンク">
          {footerLinks.map((link) => (
            <BrandLink
              key={link.label}
              href={link.href}
              src={link.icon}
              label={link.label}
            />
          ))}
        </div>
        <p className="copyright">© 2026 mayobimu</p>
      </div>
    </footer>
  );
}
