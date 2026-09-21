import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaTiktok } from "react-icons/fa6";
import { CONTACT } from "@/lib/contactInfo";
import { BrandLogo } from "@/components/brand-logo";
import { SERVICES } from "@/lib/site-data";
import { toast } from "sonner";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/Penovapublishers/",
    Icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    Icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/penovapublishers/",
    Icon: FaLinkedinIn,
  },
  {
    label: "Pinterest",
    href: "https://pin.it/3FGiGAFKg",
    Icon: FaPinterestP,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/",
    Icon: FaTiktok,
  },
];

export function SiteFooter() {
  return (
    <footer className="surface-navy">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <BrandLogo onNavy />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-on-navy-muted">
              The light of knowledge, rising from the page. A boutique publishing house for authors
              who intend to be read.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-on-navy/20 text-on-navy transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="eyebrow-on-navy">Services</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.to}>
                  <Link to={s.to} className="text-on-navy-muted transition-colors hover:text-gold">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow-on-navy">Company</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-on-navy-muted transition-colors hover:text-gold">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-on-navy-muted transition-colors hover:text-gold"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-on-navy-muted transition-colors hover:text-gold"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-on-navy-muted transition-colors hover:text-gold">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-choices"
                  className="text-on-navy-muted transition-colors hover:text-gold"
                >
                  Privacy Choices
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow-on-navy">Talk to us</h3>
            <ul className="mt-5 space-y-3 text-sm text-on-navy-muted">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href="tel:+1${CONTACT.phone.replace(/\s+/g, '')}" className="hover:text-gold">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href="mailto:hello@penovapublishers.com" className="hover:text-gold">
                  hello@penovapublishers.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>

            <form
              className="mt-7"
              onSubmit={(e) => {
                e.preventDefault();
                e.currentTarget.reset();
                toast.success("You're on the list. Welcome aboard.");
              }}
            >
              <label htmlFor="newsletter" className="text-xs text-on-navy-muted">
                Monthly letter for authors
              </label>
              <div className="mt-2 flex">
                <input
                  id="newsletter"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-l-sm border border-on-navy/20 bg-on-navy/5 px-3 py-2.5 text-sm text-on-navy placeholder:text-on-navy-muted/60 focus:border-gold focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-r-sm bg-gold px-4 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-light"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-on-navy/12 pt-7 text-xs text-on-navy-muted md:flex-row">
          <p>© {new Date().getFullYear()} Penova Publishers. All rights reserved.</p>
          <p>Authors keep 100% of their rights and royalties.</p>
        </div>
      </div>
    </footer>
  );
}
