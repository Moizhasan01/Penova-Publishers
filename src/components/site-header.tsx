import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { SERVICES } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const linkBase =
  "text-sm font-medium tracking-wide text-navy-deep/70 transition-colors duration-200 hover:text-gold";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-cream/98 backdrop-blur-lg shadow-[0_4px_24px_-10px_rgba(15,27,45,0.08)]"
          : "border-b border-transparent bg-cream",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-5 py-4 lg:px-8">
        <BrandLogo compact={scrolled} />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
          {/* Publishing Services */}
          {SERVICES.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className={linkBase}
              activeProps={{ className: "text-gold font-semibold" }}
            >
              {s.title}
            </Link>
          ))}
        </nav>

        {/* CTA Button & Mobile Menu */}
        <div className="flex items-center gap-3">
          <Link
            to="/signup"
            className="hidden rounded-md bg-navy-deep px-6 py-2.5 text-sm font-semibold text-on-navy transition-all duration-300 hover:bg-navy hover:shadow-[0_8px_24px_rgba(15,27,45,0.2)] sm:inline-flex"
          >
            Get a Free Quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-navy-deep/15 text-navy-deep transition-colors hover:bg-navy-deep/5 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-navy-deep/40 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col surface-navy px-6 py-5 transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <BrandLogo compact />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-on-navy/20 text-on-navy transition-colors hover:bg-on-navy/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-10 flex flex-1 flex-col gap-0 overflow-y-auto" aria-label="Mobile">
            {/* Publishing Services */}
            {SERVICES.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                onClick={() => setOpen(false)}
                className="border-b border-on-navy/10 py-3.5 font-serif text-lg text-on-navy transition-colors hover:text-gold"
              >
                {s.title}
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link
              to="/signup"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center justify-center rounded-md bg-gold px-6 py-3.5 text-sm font-semibold text-navy-deep transition-all hover:bg-gold-light"
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
