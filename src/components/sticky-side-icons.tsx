import type { ComponentType } from "react";
import { Mail, Phone, Quote } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaTiktok } from "react-icons/fa6";
import { SiTrustpilot } from "react-icons/si";
import { CONTACT } from "@/lib/contactInfo";
import { Link } from "@tanstack/react-router";

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/Penovapublishers/",
    label: "Facebook",
    ariaLabel: "Visit our Facebook page",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/",
    label: "Instagram",
    ariaLabel: "Visit our Instagram page",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/penovapublishers/",
    label: "LinkedIn",
    ariaLabel: "Visit our LinkedIn page",
  },
  {
    icon: FaPinterestP,
    href: "https://pin.it/3FGiGAFKg",
    label: "Pinterest",
    ariaLabel: "Visit our Pinterest page",
  },
  {
    icon: FaTiktok,
    href: "https://www.tiktok.com/",
    label: "TikTok",
    ariaLabel: "Visit our TikTok page",
  },
];

const contactLinks = [
  {
    icon: Mail,
    href: `mailto:${CONTACT.email}`,
    label: "Email",
    ariaLabel: "Send us an email",
  },
  {
    icon: Phone,
    href: `tel:${CONTACT.phone.replace(/\s+/g, '')}`,
    label: "Call",
    ariaLabel: "Call us",
  },
];

const reviewLinks = [
  {
    label: "Trustpilot",
    mark: SiTrustpilot,
    className: "text-[#00b67a]",
    href: "https://www.trustpilot.com/review/penovapublishers.com",
  },
  {
    label: "Trustindex",
    mark: "T",
    className: "text-white",
    href: "https://www.trustindex.io/reviews/penovapublishers.com",
  },
  {
    label: "Sortlist",
    mark: "S",
    className: "text-[#ff6b35]",
    href: "https://www.sortlist.com/agency/penova-publishers",
  },
];

export function StickySideIcons() {
  return (
    <>
      <style>{`
        @keyframes sticky-icon-drift {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        .sticky-icon-track { animation: sticky-icon-drift 3.2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .sticky-icon-track { animation: none; }
        }
      `}</style>
      {/* Right side icons */}
      <div
        className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 lg:flex"
        aria-label="Social and contact links"
      >
        <div className="sticky-icon-track flex flex-col divide-y divide-gold/20 overflow-hidden rounded-l-xl border border-r-0 border-gold/20 bg-navy-deep/90 backdrop-blur-md">
          {reviewLinks.map((link) => (
            <ReviewLink key={link.label} link={link} />
          ))}
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return <SidebarIcon key={link.label} link={link} Icon={Icon} />;
          })}
        </div>
      </div>

      {/* Contact and quote actions */}
      <div
        className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 lg:flex"
        aria-label="Contact and quote links"
      >
        <div className="sticky-icon-track flex flex-col divide-y divide-gold/20 overflow-hidden rounded-r-xl border border-l-0 border-gold/20 bg-navy-deep/90 backdrop-blur-md">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return <SidebarIcon key={link.label} link={link} Icon={Icon} />;
          })}
          <Link
            to="/signup"
            className="group flex h-12 w-12 items-center justify-center bg-gold text-navy-deep transition-colors duration-300 hover:bg-gold-light"
            title="Get a Free Quote"
            aria-label="Get a free quote"
          >
            <Quote className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
          </Link>
        </div>
      </div>
    </>
  );
}

function ReviewLink({
  link,
}: {
  link: (typeof reviewLinks)[number];
}) {
  const Mark = link.mark;

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View our ${link.label} reviews`}
      title={link.label}
      className="group flex h-12 w-12 items-center justify-center text-sm font-bold transition-colors duration-300 hover:bg-gold/10"
    >
      <span className={`flex h-12 w-12 items-center justify-center text-sm font-bold ${link.className}`}>
        {typeof Mark === "string" ? Mark : <Mark className="h-4 w-4" />}
      </span>
    </a>
  );
}

function SidebarIcon({
  link,
  Icon,
}: {
  link: { href: string; label: string; ariaLabel: string };
  Icon: ComponentType<{ className?: string }>;
}) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.ariaLabel}
      className="group flex h-12 w-12 items-center justify-center text-gold/60 transition-colors duration-300 hover:bg-gold/10 hover:text-gold"
      title={link.label}
    >
      <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
    </a>
  );
}
