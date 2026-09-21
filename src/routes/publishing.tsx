import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  BookOpen,
  Globe,
  TrendingUp,
  Award,
  Users,
  Zap,
  Shield,
} from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { Reveal } from "@/components/reveal";
import {
  PageHero,
  SectionHeading,
  CtaBanner,
  PlatformStrip,
  ProcessSteps,
  FaqAccordion,
  TrustBadges,
} from "@/components/sections";
import { HeroForm } from "@/components/home/hero-form";
import { PublishingForm } from "@/components/forms/publishing-form";
import { cn } from "@/lib/utils";
import publishingBanner from "@/assets/publishing banner.jpg";
import penovaMockup from "@/assets/penove mockup.png";
import publishingProcessImg from "@/assets/publishing-process.jpg";
import publishingDistributionImg from "@/assets/publishing-distribution.jpg";
import publishingCoverImg from "@/assets/publishing-cover.jpg";

const TITLE = "Publishing — Penova Publishers";
const DESC =
  "Full-service and assisted publishing for authors who keep 100% of their rights. From manuscript to bookshelf with print, ebook, and audio distribution handled end to end.";

export const Route = createFileRoute("/publishing")({
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
  component: Page,
});

const publishingOptions = [
  {
    title: "Full-Service Publishing",
    description:
      "Complete end-to-end publishing from manuscript assessment through launch and beyond. Our team handles every stage.",
    features: [
      "Senior editorial assessment & developmental editing",
      "Professional cover design with retail optimization",
      "Interior typesetting and layout",
      "ISBN, copyright registration, and metadata",
      "Print and ebook production",
      "Distribution to all major retailers",
      "Audio book coordination",
      "Launch strategy and campaign support",
      "Six months post-launch support",
    ],
    cta: "Explore Full-Service",
    featured: true,
  },
  {
    title: "Assisted Publishing",
    description:
      "You lead the vision, we provide the expertise. Choose which services you need at each stage.",
    features: [
      "À la carte editing and cover design",
      "Interior typesetting only",
      "ISBN and metadata support",
      "Print and ebook production setup",
      "Distribution coordination",
      "Marketing strategy consultation",
      "Pre-launch quality review",
      "Author support portal access",
    ],
    cta: "Learn About Assisted Publishing",
    featured: false,
  },
];

const publishingProcess = [
  {
    title: "The Assessment",
    body: "Your manuscript arrives as an honest conversation. A senior editor reads it completely, then outlines what the book needs, what's already working, and the realistic route from here to print.",
  },
  {
    title: "The Scope",
    body: "We return a written plan: the editorial scope, design direction, production timeline, distribution strategy, and one fixed price. Everything is in writing. Nothing changes without your approval.",
  },
  {
    title: "The Production",
    body: "Editing, design, typesetting, and proofing move through their stages. You review at every checkpoint. The book evolves the way you want it to, with professional guidance at every turn.",
  },
  {
    title: "The Launch",
    body: "Print and ebook files go live across Amazon, IngramSpark, Apple Books, and beyond. Your author page goes up. We execute the campaign you approved. Your book is in the world.",
  },
];

const whyPublishWith = [
  {
    title: "You Keep Everything",
    body: "Rights, ISBN, royalties, finished files—all yours. Penova is a services partner, never a rights-acquiring publisher. The contract is plain English, not legalese.",
    icon: Shield,
  },
  {
    title: "One Team Per Book",
    body: "The same editor, designer, and strategist work with your title from first read to six months post-launch. You're not a ticket in a queue.",
    icon: Users,
  },
  {
    title: "Fixed Price, Written Scope",
    body: "You know the investment and the schedule before we begin. No hourly creep. No invoices that surprise you. Transparency is non-negotiable.",
    icon: TrendingUp,
  },
  {
    title: "Read First, Advise Second",
    body: "Every publishing engagement opens with a senior editor telling you honestly what your manuscript needs—even if it's less editing than you thought.",
    icon: Zap,
  },
];

const publishingBenefits = [
  {
    title: "Global Distribution",
    body: "Your book lives on Amazon, in independent bookshops, on shelves at Barnes & Noble, in libraries worldwide, and in the hands of readers everywhere.",
  },
  {
    title: "Professional Production",
    body: "Print and ebook files built to retail standards. Your book looks like a book, not a DIY project. Every file tested across platforms.",
  },
  {
    title: "Revenue That Lasts",
    body: "Books sell for years. Unlike other mediums, publishing is a long-term asset. Month seven still counts. Your royalties are tracked and paid regularly.",
  },
  {
    title: "Author Authority",
    body: "Published author status opens doors: speaking engagements, media, partnerships, teaching positions. The book becomes your calling card.",
  },
];

const publishingFaqs = [
  {
    q: "How long does the publishing process take?",
    a: "Most projects take 4-6 months from acceptance to print availability. Rushed timelines are possible but not recommended—great books deserve time. We'll discuss your deadline at the assessment stage.",
  },
  {
    q: "What if my manuscript needs heavy editing?",
    a: "That's what the assessment is for. We'll be honest about the scope and time required. Heavy developmental editing is a service we provide—it simply means more editing passes and a longer timeline. The cost is in the scope you approve upfront.",
  },
  {
    q: "How much does publishing cost?",
    a: "Full-service publishing ranges from $4,500–$8,500 depending on manuscript length, cover complexity, and distribution scope. We discuss your needs, build a scope, then quote a fixed price. Assisted publishing is typically $2,000–$5,000 depending on which services you select. Request a quote to see exact pricing for your project.",
  },
  {
    q: "Who owns the ISBN and cover design?",
    a: "You do. Everything produced belongs to you. You can use the files on other platforms, modify them later, or republish independently. The ISBN is registered in your name as the publisher.",
  },
  {
    q: "What about audio books?",
    a: "We coordinate audio production—recording, editing, and distribution to Audible and other platforms. Most authors work with professional narrators; we handle the logistics and quality checks. Audio is an optional add-on.",
  },
  {
    q: "Can I publish if I have a traditional publishing deal for a different book?",
    a: "Usually yes, but contracts vary. We've worked with hybrid authors who have some titles traditionally published and others independently published. We'll review your contract and advise.",
  },
  {
    q: "Do you handle marketing after launch?",
    a: "We provide launch campaign support and post-launch strategy for the first six months. Long-term marketing (paid ads, ongoing outreach) is usually handled by the author or a separate marketing specialist.",
  },
  {
    q: "What if I'm not ready to publish yet?",
    a: "Many authors come to us with manuscripts that need editing first. We offer standalone editing services, and authors often return to publish after their manuscript is polished. No pressure to publish—only when it's right.",
  },
];

function PublishingOption({
  option,
}: {
  option: (typeof publishingOptions)[0];
}) {
  return (
    <Reveal>
      <div
        className={cn(
          "relative h-full rounded-2xl border p-10 lg:p-12 transition-all duration-500 overflow-hidden group hover-lift",
          option.featured
            ? "border-gold/40 bg-gradient-to-br from-gold/10 to-transparent shadow-[0_20px_50px_-15px_rgba(212,175,55,0.3)] ring-1 ring-gold/20 hover:shadow-[0_30px_60px_-20px_rgba(212,175,55,0.4)] scale-105 lg:scale-100 lg:hover:scale-105"
            : "border-border bg-card hover:border-gold/30 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)]"
        )}
      >
        {option.featured && (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/15 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        )}
        <div className="relative">
          {option.featured && (
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-gold mb-4 smooth-scale-in">
              <Award className="h-3.5 w-3.5" />
              Most Popular
            </span>
          )}
          <h3 className="text-3xl font-serif text-navy-deep">{option.title}</h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground font-light">
            {option.description}
          </p>

          <ul className="mt-10 space-y-4">
            {option.features.map((feature, i) => (
              <li key={i} className="flex gap-4 group/item">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-gold mt-0.5 transition-transform duration-300 group-hover/item:scale-110" />
                <span className="text-sm leading-relaxed text-navy-deep">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <Link
            to="/signup"
            className={cn(
              "mt-10 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold uppercase tracking-widest transition-all duration-500",
              option.featured
                ? "bg-gold text-navy-deep shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:bg-gold-light hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.7)]"
                : "border border-navy-deep/20 text-navy-deep hover:border-gold hover:text-gold hover:bg-gold/5"
            )}
          >
            {option.cta}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}

function WhyPublishCard({
  item,
  index,
}: {
  item: (typeof whyPublishWith)[0];
  index: number;
}) {
  const Icon = item.icon;
  return (
    <Reveal delay={index * 80}>
      <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-white p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] hover:border-gold/30">
        <div className="absolute right-0 top-0 -mt-8 -mr-8 h-32 w-32 bg-gradient-to-br from-gold/10 to-transparent rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-deep text-gold shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
          <Icon className="h-6 w-6 transition-transform duration-500 group-hover:rotate-12" />
        </span>
        <h3 className="relative mt-6 text-2xl font-serif text-navy-deep group-hover:text-gold transition-colors duration-300">
          {item.title}
        </h3>
        <p className="relative mt-3 text-base leading-relaxed text-muted-foreground font-light">
          {item.body}
        </p>
      </div>
    </Reveal>
  );
}

function Page() {
  return (
    <SiteLayout>
      {/* -------- Hero with Form -------- */}
      <section className="relative isolate overflow-hidden bg-navy-deep">
        {/* Background image */}
        <img
          src={publishingBanner}
          alt=""
          aria-hidden="true"
          className="ken-burns absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        {/* Lighter overlay — lets the photo breathe */}
        <div className="absolute inset-0 -z-10 bg-navy-deep/50" />
        {/* Left-side gradient — text column stays crisp, right side opens up */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep/90 via-navy-deep/55 to-navy-deep/15" />
        {/* Subtle radial glow */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent pointer-events-none" />
        {/* Grain texture */}
        <div className="absolute inset-0 -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.07] brightness-100 contrast-150 mix-blend-overlay pointer-events-none" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-20 bg-gradient-to-t from-cream-deep via-cream-deep/35 to-transparent" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
          <div>
            {/* Badge — slide in from left */}
            <span
              className="glass-navy inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
              style={{
                animation: "hero-slide-right 0.7s cubic-bezier(0.22,1,0.36,1) both",
                animationDelay: "0.1s",
              }}
            >
              <Zap className="h-3.5 w-3.5" />
              Full-service &amp; assisted publishing
            </span>

            {/* Headline — words fade up with stagger */}
            <h1 className="mt-8 text-5xl leading-[1.02] text-on-navy md:text-6xl lg:text-[4.6rem]">
              <span
                className="block"
                style={{
                  animation: "hero-fade-up 0.75s cubic-bezier(0.22,1,0.36,1) both",
                  animationDelay: "0.3s",
                }}
              >
                From manuscript to
              </span>
              {/* Gold word with typewriter-cursor underline */}
              <span
                className="mt-2 block text-gold-shimmer"
                style={{
                  animation: "hero-word-in 0.75s cubic-bezier(0.22,1,0.36,1) both",
                  animationDelay: "0.55s",
                  display: "inline-block",
                  borderRight: "3px solid var(--gold)",
                  paddingRight: "4px",
                  animationFillMode: "forwards",
                }}
                onAnimationEnd={(e) => {
                  // Start blinking cursor after word appears
                  (e.target as HTMLElement).style.animation =
                    "hero-cursor-blink 1s step-end infinite";
                }}
              >
                bookshelf.
              </span>
            </h1>

            {/* Rule — fade up */}
            <span
              className="rule-gold mt-8"
              style={{
                animation: "hero-fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
                animationDelay: "0.75s",
              }}
            />

            {/* Body copy — fade up */}
            <p
              className="mt-8 max-w-xl text-lg leading-relaxed text-on-navy-muted"
              style={{
                animation: "hero-fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
                animationDelay: "0.9s",
              }}
            >
              Print, ebook, and audio distribution handled end to end. You keep everything. We handle the craft.
            </p>

            {/* CTA buttons — fade up last */}
            <div
              className="mt-10 flex flex-wrap gap-3"
              style={{
                animation: "hero-fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
                animationDelay: "1.05s",
              }}
            >
              <Link
                to="/signup"
                className="beam-sweep group inline-flex items-center gap-2 rounded-sm bg-gold px-8 py-4 text-sm font-semibold text-navy-deep transition-all duration-500 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-glow"
              >
                Start Publishing
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
              <button
                type="button"
                onClick={() => {
                  (window as Window & { BrevoConversations?: (command: string) => void }).BrevoConversations?.("open");
                }}
                className="inline-flex items-center gap-2 rounded-sm border border-on-navy/30 px-8 py-4 text-sm font-semibold text-on-navy transition-all duration-500 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                Chat With Us
              </button>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-10 gap-y-4 text-on-navy-muted" aria-label="Reader review ratings">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="bg-[conic-gradient(from_20deg,#4285f4,#34a853,#fbbc05,#ea4335,#4285f4)] bg-clip-text text-[1.75rem] font-bold leading-none text-transparent">G</span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-on-navy">Google</p>
                  <p className="mt-0.5 text-[0.62rem] uppercase tracking-[0.14em]">4.8 rating</p>
                </div>
              </div>
              <span className="h-8 w-px bg-on-navy/15" aria-hidden="true" />
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#00b67a] text-xl leading-none text-white">★</span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-on-navy">Trustpilot</p>
                  <p className="mt-0.5 text-[0.62rem] uppercase tracking-[0.14em]">4.9 rating</p>
                </div>
              </div>
            </div>
          </div>

          <Reveal delay={180} className="hidden lg:block relative z-10 w-full max-w-[400px] mx-auto">
            <PublishingForm />
          </Reveal>
        </div>
      </section>

      <PlatformStrip className="relative z-20 rounded-t-[2rem] border-t-0 shadow-[0_-12px_35px_rgba(15,27,45,0.08)]" />

      {/* -------- Why Publishing Matters -------- */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why your book deserves publishing"
              title="A book is an asset. For life."
              intro="Unlike a blog post or social media, a published book compounds—selling years from now, building authority, opening doors. Publishing is a strategic choice that pays forward."
            />
            <ul className="mt-12 space-y-6">
              {publishingBenefits.map((benefit, i) => (
                <Reveal as="li" key={benefit.title} delay={i * 70}>
                  <div className="flex gap-4">
                    <div className="mt-1 h-2 w-2 rounded-full bg-gold shrink-0" />
                    <div>
                      <h4 className="font-serif text-lg text-navy-deep">
                        {benefit.title}
                      </h4>
                      <p className="mt-2 text-base leading-relaxed text-muted-foreground font-light">
                        {benefit.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal className="relative">
            {/* Decorative gold ring behind the mockup */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/20 via-gold/5 to-transparent blur-2xl pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_70px_-20px_rgba(15,23,63,0.35)] ring-1 ring-gold/20">
              <img
                src={penovaMockup}
                alt="Penova publishing mockup"
                className="w-full h-auto object-contain block"
              />
            </div>
            {/* Floating stats badge */}
            <div className="absolute -bottom-5 -left-5 flex items-center gap-4 rounded-2xl bg-white border border-border shadow-[0_10px_30px_rgba(0,0,0,0.12)] px-5 py-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-deep">
                <BookOpen className="h-5 w-5 text-gold" />
              </span>
              <div>
                <p className="text-xl font-serif font-bold text-navy-deep leading-none">1,240+</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-widest font-semibold text-navy-deep/50">Books Published</p>
              </div>
              <div className="w-px h-8 bg-border mx-1" />
              <div>
                <p className="text-xl font-serif font-bold text-navy-deep leading-none">18 yrs</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-widest font-semibold text-navy-deep/50">Experience</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------- Publishing Options -------- */}
      <section className="bg-cream-deep py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Two paths to print"
            title="Choose your publishing route."
            intro="Whether you want us to lead the charge or support your vision, we adapt to how you work best."
            align="center"
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-6">
            {publishingOptions.map((option) => (
              <PublishingOption key={option.title} option={option} />
            ))}
          </div>
        </div>
      </section>

      {/* -------- The publishing journey -------- */}
      <section className="relative mt-12 overflow-hidden bg-navy-deep py-20 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_50%,rgba(212,175,55,0.13),transparent_32%)] pointer-events-none" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">The publishing journey</p>
            <h2 className="mt-5 max-w-lg font-serif text-4xl leading-tight text-white md:text-5xl">A manuscript becomes a book in stages.</h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70 font-light">From the first editorial read to the moment a reader finds your cover, every decision has a purpose. We keep the craft visible, the process calm, and the finished book unmistakably yours.</p>
            <div className="mt-10 grid max-w-lg grid-cols-3 border-y border-white/15 py-5">
              {[['01', 'Shape'], ['02', 'Make'], ['03', 'Reach']].map(([number, label]) => (
                <div key={number} className="border-r border-white/15 pl-4 first:pl-0 last:border-0">
                  <p className="font-serif text-3xl text-gold">{number}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="relative min-h-[420px]">
            <div className="absolute left-0 top-0 w-[58%] overflow-hidden rounded-xl border border-white/15 shadow-2xl transition-transform duration-700 hover:-translate-y-2 hover:rotate-[-2deg]">
              <img src={publishingProcessImg} alt="A book moving through the publishing process" className="aspect-[4/3] w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent px-5 pb-4 pt-12"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">01 / Editorial craft</p></div>
            </div>
            <div className="absolute right-0 top-12 w-[52%] overflow-hidden rounded-xl border border-gold/30 bg-white p-1 shadow-2xl transition-transform duration-700 hover:translate-y-2 hover:rotate-[2deg]">
              <img src={publishingCoverImg} alt="A professionally designed book cover" className="aspect-[4/3] w-full rounded-lg object-cover" />
              <div className="px-4 py-3"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-brown">02 / Cover &amp; production</p></div>
            </div>
            <div className="absolute bottom-0 left-[25%] w-[55%] overflow-hidden rounded-xl border border-white/15 shadow-2xl transition-transform duration-700 hover:-translate-y-2 hover:rotate-[-1deg]">
              <img src={publishingDistributionImg} alt="A finished book reaching readers through distribution" className="aspect-[16/9] w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent px-5 pb-4 pt-12"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">03 / Into the world</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------- Why Publish With Penova -------- */}
      <section className="mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-36">
        <SectionHeading
          eyebrow="Why authors choose Penova"
          title="Publishing built around you."
          intro="Five principles that guide how we work."
          align="center"
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {whyPublishWith.map((item, i) => (
            <WhyPublishCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* -------- Publishing Process -------- */}
      <section className="bg-cream-deep py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="How it works"
            title="Four stages to your published book."
            intro="Clear, predictable, professional. You always know what's happening this week and what comes next."
            align="center"
          />
          <div className="mt-16">
            <ProcessSteps steps={publishingProcess} />
          </div>
        </div>
      </section>

      {/* -------- Social Proof / Trust -------- */}
      <section className="mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-36">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brown mb-4">
            Trusted by authors
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-navy-deep mb-8">
            The numbers speak.
          </h2>
        </div>
        <TrustBadges />
      </section>

      {/* -------- FAQ -------- */}
      <section className="bg-navy-deep py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Reveal className="mb-16">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
              Got questions?
            </p>
            <h2 className="text-center text-4xl md:text-5xl font-serif text-white mb-6">
              Publishing questions answered.
            </h2>
            <p className="text-center text-lg leading-relaxed text-white/70 font-light">
              Everything you need to know about publishing with Penova.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="bg-white/5 rounded-2xl p-8 lg:p-12 border border-white/10 backdrop-blur-sm">
              <FaqAccordion items={publishingFaqs} dark={true} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------- CTA Banner -------- */}
      <CtaBanner
        title="Your manuscript. Our expertise. One fixed price."
        body="Tell us about your book and where it stands today. A senior editor will read it, send back an honest assessment, outline a route to publication, and quote you a fixed price—no obligation."
        primary="Request a Free Assessment"
      />
    </SiteLayout>
  );
}
