import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BookHeart,
  Compass,
  Highlighter,
  LibraryBig,
  Megaphone,
  PenLine,
  Palette,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { Reveal } from "@/components/reveal";
import {
  CtaBanner,
  FaqAccordion,
  HeroReviewRatings,
  PlatformStrip,
  ProcessSteps,
  SectionHeading,
} from "@/components/sections";
import { FilmCarousel } from "@/components/home/film-carousel";
import { TestimonialSlider } from "@/components/home/testimonial-slider";
import { Counter } from "@/components/home/counter";
import { GENRES, SERVICES } from "@/lib/site-data";
import { VALUES } from "@/lib/home-data";
import hero from "@/assets/hero-lighthouse.jpg";
import openBook from "@/assets/open-book.jpg";
import mock1 from "@/assets/mock1.png";
import spines from "@/assets/book-spines.jpg";
import childrens from "@/assets/childrens-spread.jpg";
import { HeroForm } from "@/components/home/hero-form";
import { BookCarousel } from "@/components/home/book-carousel";

const TITLE = "Penova Publishers | Book Publishing, Ghostwriting and Editing";
const DESC =
  "Penova Publishers is a boutique publishing house offering publishing, ghostwriting, editing, marketing, children's books and illustration. Authors keep 100% of their rights.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const steps = [
  {
    title: "The Reading",
    body: "You send what you have, whether it is a finished draft, a half-book or a folder of notes. A senior editor reads it and tells you honestly what it needs.",
  },
  {
    title: "The Plan",
    body: "We return a written scope: the editorial route, the design direction, the distribution channels, the schedule and one fixed price.",
  },
  {
    title: "The Craft",
    body: "Editing, cover design, interior typesetting and proofs. You review at every stage; nothing moves forward without your signature.",
  },
  {
    title: "The Launch",
    body: "Print and ebook go live across the major retailers, your author page goes up, and the campaign begins on a date you chose.",
  },
];

const serviceIcons = [LibraryBig, PenLine, Highlighter, Megaphone, BookHeart, Palette];

function Home() {
  return (
    <SiteLayout>
      {/* ---------------- Hero ---------------- */}
      <section className="relative isolate overflow-hidden bg-navy-deep">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/10 via-navy-deep/30 to-transparent pointer-events-none" />
        <img
          src={hero}
          alt="A lighthouse casting a golden beam across a dark sea at night"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-75 ken-burns"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep/85 via-navy-deep/45 to-navy-deep/5" />
        <div className="absolute inset-0 -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay pointer-events-none" />

        <div className="pointer-events-none absolute bottom-8 right-8 z-0 hidden w-56 rotate-[-4deg] overflow-hidden rounded-xl border border-white/20 bg-white/10 p-1 shadow-2xl backdrop-blur-sm lg:block xl:right-12">
          <img src={openBook} alt="" className="book-emerge float-rise h-28 w-full rounded-lg object-cover opacity-80" />
          <div className="px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-gold/90">
            Stories, brought to light
          </div>
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-5 py-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-40">
          <Reveal>
            <span className="glass-navy inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <Sparkles className="h-3.5 w-3.5" />
              Publishing since 2008
            </span>
            <h1 className="mt-8 max-w-3xl text-5xl leading-[1.02] text-on-navy md:text-6xl lg:text-[4.6rem]">
              Every great book needs a <span className="text-gold-shimmer">guiding light.</span>
            </h1>
            <span className="rule-gold mt-8" />
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-on-navy-muted">
              Penova Publishers guides authors from first page to finished book with writing, editing,
              design, distribution and launch handled by people who read for a living.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/signup"
                className="beam-sweep group inline-flex items-center gap-2 rounded-sm bg-gold px-8 py-4 text-sm font-semibold text-navy-deep transition-all duration-500 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-glow"
              >
                Start Your Book
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/publishing"
                className="inline-flex items-center gap-2 rounded-sm border border-on-navy/30 px-8 py-4 text-sm font-semibold text-on-navy transition-all duration-500 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                Explore Publishing
              </Link>
            </div>
            <HeroReviewRatings className="mt-7" />
            <dl className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-on-navy/15 pt-8">
              {[
                { n: <Counter value={1240} suffix="+" />, l: "Books published" },
                { n: <Counter value={18} suffix=" yrs" />, l: "Editorial experience" },
                { n: <Counter value={100} suffix="%" />, l: "Rights kept by authors" },
              ].map((s, i) => (
                <div key={s.l} style={{ transitionDelay: `${i * 90}ms` }}>
                  <dt className="font-serif text-3xl text-gold md:text-4xl">{s.n}</dt>
                  <dd className="mt-1 text-[0.68rem] uppercase tracking-[0.18em] text-on-navy-muted">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={180} className="relative z-10 mx-auto hidden w-full max-w-[460px] lg:block">
            <HeroForm />
          </Reveal>
        </div>
      </section>

      <PlatformStrip />

      {/* ---------------- Services ---------------- */}
      <section className="mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-36">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="What we do"
            title="Six services, one standard of care."
            intro="Take the whole route or the single stage you need. Nothing is bundled to pad an invoice."
          />
          <Link
            to="/publishing"
            className="underline-sweep inline-flex items-center gap-2 pb-1 text-sm font-semibold text-navy-deep"
          >
            View all services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = serviceIcons[i % serviceIcons.length]!;
            return (
              <Reveal key={s.to} delay={i * 70}>
                <Link
                  to={s.to}
                  className="group relative flex h-full flex-col rounded-2xl border border-border/60 bg-white p-9 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.2)] hover:border-gold/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                  <span className="service-icon-flip relative inline-flex h-14 w-14 items-center justify-center rounded-xl bg-navy-deep text-gold shadow-lg transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-gold/20">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="relative mt-8 text-2xl font-serif text-navy-deep">{s.title}</h3>
                  <p className="relative mt-4 flex-1 text-base leading-relaxed text-muted-foreground font-light">
                    {s.blurb}
                  </p>
                  <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gold transition-colors group-hover:text-gold-light">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---------------- Book Carousel ---------------- */}
      <section className="bg-cream py-20 lg:py-28 overflow-hidden">
        <div className="mx-auto max-w-[90rem] px-5 lg:px-8">
          <BookCarousel />
        </div>
      </section>

      {/* ---------------- Film carousel ---------------- */}
      <section className="relative overflow-hidden bg-navy-deep py-32 lg:py-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-navy-deep to-navy-deep pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-on-navy/10 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-on-navy/10 to-transparent" />
        
        <div className="relative mx-auto max-w-[85rem] px-5 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center mb-16 lg:mb-24">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-6 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
              Penova Films
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-on-navy mb-6 tracking-tight">
              Watch a book come off the desk.
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-on-navy-muted font-light">
              Short films from the editing room, the illustration studio and launch week, recorded with the authors who lived them.
            </p>
          </Reveal>
          
          <Reveal delay={100}>
            <FilmCarousel />
          </Reveal>
        </div>
      </section>

      {/* ---------------- Why choose us ---------------- */}
      <section className="mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-border/50">
              <img
                src={mock1}
                alt="Mockup of a book cover"
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[2000ms] hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-10 -right-8 hidden rounded-xl border border-white/40 bg-white/90 backdrop-blur-md p-8 shadow-[0_20px_40px_rgba(0,0,0,0.08)] sm:block transform transition-transform duration-700 hover:-translate-y-2">
              <ShieldCheck className="h-8 w-8 text-gold" />
              <p className="mt-4 font-serif text-3xl text-navy-deep">Read first.</p>
              <p className="mt-1 text-sm uppercase tracking-widest text-brown font-semibold">Then advise.</p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Why authors choose Penova"
              title="A small house, built around the author."
              intro="Writers were being sold packages instead of publishing. We do it the other way around with one team per book and a schedule you can hold us to."
            />
            <ul className="mt-14 space-y-6">
              {VALUES.map((v, i) => (
                <Reveal as="li" key={v.title} delay={i * 80}>
                  <div className="group relative flex gap-6 rounded-2xl bg-white p-8 border border-border/50 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] hover:border-gold/30 overflow-hidden">
                    <div className="absolute right-0 top-0 -mt-4 -mr-4 text-9xl font-serif text-navy-deep/5 transition-transform duration-700 group-hover:scale-110 group-hover:text-gold/5 pointer-events-none select-none">
                      {String(i + 1)}
                    </div>
                    <span className="relative font-serif text-3xl text-gold transition-transform duration-500 group-hover:-translate-y-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-serif text-navy-deep">{v.title}</h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground font-light">{v.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- Process ---------------- */}
      <section className="bg-cream-deep py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="How it works"
            title="Four stages, no fog."
            intro="You always know what is happening to your book this week, and what happens next."
            align="center"
          />
          <div className="mt-16">
            <ProcessSteps steps={steps} />
          </div>
        </div>
      </section>

      {/* ---------------- Mid CTA strip ---------------- */}
      <section className="relative overflow-hidden bg-navy-deep shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-navy-deep to-navy-deep pointer-events-none" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-5 py-24 lg:flex-row lg:px-8">
          <div className="max-w-2xl text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4 drop-shadow-sm">Free manuscript assessment</p>
            <h2 className="text-3xl font-serif tracking-tight text-white md:text-5xl drop-shadow-md">
              Send us fifty pages. We&rsquo;ll send back the truth.
            </h2>
          </div>
          <Link
            to="/signup"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-gold px-10 py-5 text-sm font-semibold uppercase tracking-widest text-navy-deep shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-500 hover:-translate-y-1 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(212,175,55,0.7)]"
          >
            Request your assessment
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
          </Link>
        </div>
      </section>

      {/* ---------------- Featured work ---------------- */}
      <section className="mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-36">
        <SectionHeading eyebrow="Recent work" title="Books that found their readers." />
        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {[
            {
              img: spines,
              alt: "Hardcover books with gold foil spines on a shelf",
              title: "Saltwater Inheritance",
              meta: "Literary memoir · Print, ebook, audio",
              note: "A three-generation coastal memoir that spent nine weeks in Amazon's memoir top 100.",
            },
            {
              img: openBook,
              alt: "An open book under warm lamplight",
              title: "Founder's Weather",
              meta: "Business · Print & ebook",
              note: "Ghostwritten across sixteen interviews, launched into two bestseller categories.",
            },
            {
              img: childrens,
              alt: "Children's book spread with a child and a whale beneath a lighthouse",
              title: "Marla and the Lantern Whale",
              meta: "Children's picture book · Hardcover",
              note: "Story and illustration developed together, now in its third print run.",
            },
          ].map((w, i) => (
            <Reveal key={w.title} delay={i * 90}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-white transition-all duration-700 hover:-translate-y-2 hover:border-gold/40 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.2)]">
                <div className="overflow-hidden relative">
                  <img
                    src={w.img}
                    alt={w.alt}
                    loading="lazy"
                    className="h-64 w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none" />
                </div>
                <div className="p-8 relative">
                  <div className="absolute -top-6 right-8">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-deep text-gold shadow-[0_5px_15px_rgba(0,0,0,0.2)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_8px_25px_rgba(212,175,55,0.4)]">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                  <p className="text-[0.68rem] uppercase tracking-widest text-gold font-semibold">{w.meta}</p>
                  <h3 className="mt-3 text-2xl font-serif text-navy-deep">{w.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground font-light">{w.note}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- Testimonials ---------------- */}
      <section className="bg-cream-deep py-28 lg:py-36">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Author reviews"
            title="Judged by our authors."
            align="center"
          />
          <div className="mt-14">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* ---------------- Genres ---------------- */}
      <section className="mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-32">
        <SectionHeading
          eyebrow="Genres we cover"
          title="From boardroom memoir to bedtime story."
          align="center"
        />
        <ul className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {GENRES.map((g, i) => (
            <Reveal as="li" key={g} delay={i * 35}>
              <div className="group flex h-full items-center gap-4 rounded-full border border-border/60 bg-white px-6 py-4 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.2)]">
                <Compass className="h-5 w-5 shrink-0 text-gold transition-all duration-700 group-hover:rotate-45 group-hover:scale-110" />
                <span className="text-sm font-semibold tracking-wide text-navy-deep">{g}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="mx-auto max-w-3xl px-5 py-28 lg:px-8 lg:py-32">
        <SectionHeading eyebrow="Questions" title="The things authors ask first." align="center" />
        <div className="mt-12">
          <FaqAccordion />
        </div>
        <p className="mt-10 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4 text-gold" />
          Something else on your mind?
          <Link to="/signup" className="underline-sweep font-semibold text-navy-deep">
            Ask us directly
          </Link>
        </p>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
