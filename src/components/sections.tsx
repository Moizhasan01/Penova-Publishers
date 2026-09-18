import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PLATFORMS, TESTIMONIALS, FAQS } from "@/lib/site-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  onNavy = false,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  onNavy?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className={cn(
        "text-xs font-semibold uppercase tracking-[0.2em] mb-4",
        onNavy ? "text-gold" : "text-brown"
      )}>{eyebrow}</p>
      <h2
        className={cn(
          "mt-2 text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight",
          onNavy ? "text-white drop-shadow-md" : "text-navy-deep drop-shadow-sm",
        )}
      >
        {title}
      </h2>
      <div className={cn("mt-8 flex", align === "center" && "justify-center")}>
        <div className="h-[2px] w-12 bg-gradient-to-r from-gold via-gold/80 to-transparent shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
      </div>
      {intro && (
        <p
          className={cn(
            "mt-8 text-lg leading-relaxed font-light",
            onNavy ? "text-white/80" : "text-navy-deep/70",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden surface-navy">
      {image && (
        <img
          src={image}
          alt={imageAlt ?? ""}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
          loading="lazy"
        />
      )}
      <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <Reveal className="max-w-3xl">
          <p className="eyebrow-on-navy">{eyebrow}</p>
          <h1 className="mt-5 text-5xl text-on-navy md:text-6xl lg:text-7xl">{title}</h1>
          <span className="rule-gold mt-7" />
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-on-navy-muted">{intro}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function HeroReviewRatings({
  className,
  onLight = false,
}: {
  className?: string;
  onLight?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-8 gap-y-4",
        onLight ? "text-navy-deep/60" : "text-on-navy-muted",
        className,
      )}
      aria-label="Reader review ratings"
    >
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="bg-[conic-gradient(from_20deg,#4285f4,#34a853,#fbbc05,#ea4335,#4285f4)] bg-clip-text text-[1.75rem] font-bold leading-none text-transparent"
        >
          G
        </span>
        <div className="leading-tight">
          <p className={cn("text-sm font-semibold", onLight ? "text-navy-deep" : "text-on-navy")}>Google</p>
          <p className="mt-0.5 text-[0.62rem] uppercase tracking-[0.14em]">4.8 rating</p>
        </div>
      </div>
      <span className={cn("h-8 w-px", onLight ? "bg-navy-deep/15" : "bg-on-navy/15")} aria-hidden="true" />
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#00b67a] text-xl leading-none text-white">
          ★
        </span>
        <div className="leading-tight">
          <p className={cn("text-sm font-semibold", onLight ? "text-navy-deep" : "text-on-navy")}>Trustpilot</p>
          <p className="mt-0.5 text-[0.62rem] uppercase tracking-[0.14em]">4.9 rating</p>
        </div>
      </div>
    </div>
  );
}

export function PlatformStrip({
  onCream = true,
  className,
}: {
  onCream?: boolean;
  className?: string;
}) {
  const row = [...PLATFORMS, ...PLATFORMS];
  return (
    <section
      className={cn(
        "relative overflow-hidden py-10 lg:py-14",
        onCream ? "bg-cream-deep border-y border-border" : "bg-navy-deep border-y border-white/10 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]",
        className,
      )}
      aria-label="Distribution platforms"
    >
      <style>
        {`
          @keyframes platform-marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-platform-marquee {
            animation: platform-marquee 25s linear infinite;
          }
        `}
      </style>
      <p className={cn(
        "mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em]",
        onCream ? "text-navy-deep/60" : "text-gold/80"
      )}>
        We publish on
      </p>
      <div className="relative flex w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_96px,_black_calc(100%-96px),transparent_100%)]">
        <div className="flex w-max animate-platform-marquee gap-3 pr-3">
          {row.map((p, i) => (
            <span
              key={`${p}-${i}`}
              className={cn(
                "shrink-0 whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors duration-300",
                onCream
                  ? "border-navy-deep/10 bg-white/70 text-navy-deep/70 hover:border-gold/50 hover:bg-white hover:text-navy-deep"
                  : "border-white/15 bg-white/5 text-white/65 hover:border-gold/50 hover:bg-white/10 hover:text-white",
              )}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustBadges() {
  const badges = [
    { name: "Trustpilot", score: "4.9", count: "412 reviews" },
    { name: "Google Reviews", score: "4.8", count: "286 reviews" },
    { name: "Reviews.io", score: "4.9", count: "173 reviews" },
    { name: "Authors Published", score: "1,240+", count: "since inception" },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {badges.map((b, i) => (
        <Reveal key={b.name} delay={i * 80}>
          <div className="card-lift h-full rounded-md border border-border bg-card p-6 text-center group hover-lift">
            <p className="font-serif text-4xl text-navy-deep group-hover:text-gold transition-colors duration-300">{b.score}</p>
            <div className="mt-2 flex justify-center gap-0.5">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold transition-transform duration-300 hover:scale-125" />
              ))}
            </div>
            <p className="mt-3 text-sm font-semibold text-navy-deep">{b.name}</p>
            <p className="text-xs text-muted-foreground">{b.count}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function TestimonialCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {TESTIMONIALS.map((t, i) => (
        <Reveal key={t.name} delay={i * 90}>
          <figure className="card-lift flex h-full flex-col rounded-md border border-border bg-card p-8 group hover-lift">
            <Quote className="h-7 w-7 text-gold group-hover:text-gold/80 transition-colors duration-300" />
            <blockquote className="mt-5 flex-1 font-serif text-xl leading-relaxed text-navy-deep">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 border-t border-border pt-5">
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold transition-transform duration-300 hover:scale-125" />
                ))}
              </div>
              <p className="mt-3 text-sm font-semibold text-navy-deep">{t.name}</p>
              <p className="text-sm italic text-brown">{t.book}</p>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}

export function ProcessSteps({
  steps,
}: {
  steps: { title: string; body: string }[];
}) {
  return (
    <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <Reveal as="li" key={s.title} delay={i * 90} className="relative group">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-navy-deep/5 font-serif text-xl text-gold transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="hidden h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent lg:block transition-all duration-700 group-hover:from-gold/80" />
          </div>
          <h3 className="mt-6 text-2xl font-serif tracking-wide text-navy-deep">{s.title}</h3>
          <p className="mt-4 text-base leading-relaxed text-navy-deep/70 font-light">{s.body}</p>
        </Reveal>
      ))}
    </ol>
  );
}

export function FaqAccordion({ 
  items = FAQS,
  dark = false,
}: { 
  items?: { q: string; a: string }[],
  dark?: boolean,
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((f, i) => (
        <AccordionItem 
          key={f.q} 
          value={`item-${i}`} 
          className={dark ? "border-white/15" : "border-border"}
        >
          <AccordionTrigger className={cn(
            "text-left font-serif text-xl hover:no-underline",
            dark ? "text-white hover:text-gold" : "text-navy-deep hover:text-gold"
          )}>
            {f.q}
          </AccordionTrigger>
          <AccordionContent className={dark ? "text-base leading-relaxed text-white/75 font-light" : "text-base leading-relaxed text-muted-foreground"}>
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function CtaBanner({
  title = "Your book deserves a proper harbour.",
  body = "Tell us where your manuscript stands today. We will send back an honest assessment, a route to publication and a fixed quote — no obligation, no pressure.",
  primary = "Get a Free Quote",
}: {
  title?: string;
  body?: string;
  primary?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gold/20 via-navy-deep to-navy-deep pointer-events-none" />
      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center lg:px-8 lg:py-32">
        <Reveal>
          <h2 className="text-4xl text-white md:text-5xl lg:text-6xl font-serif tracking-tight drop-shadow-lg">{title}</h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-white/80 font-light">
            {body}
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center rounded-full bg-gold px-10 py-4 text-sm font-semibold uppercase tracking-widest text-navy-deep shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-500 hover:bg-gold-light hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.7)]"
            >
              {primary}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-5 text-base leading-relaxed text-muted-foreground">{children}</div>
  );
}
