import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  TrendingUp,
  Target,
  Megaphone,
  Mail,
  BarChart,
  Globe,
  Search,
} from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { Reveal } from "@/components/reveal";
import {
  SectionHeading,
  CtaBanner,
  PlatformStrip,
  ProcessSteps,
  FaqAccordion,
  HeroReviewRatings,
} from "@/components/sections";
import { HeroForm } from "@/components/home/hero-form";
import { MarketingForm } from "@/components/forms/marketing-form";

import marketingHeroImg from "@/assets/marketing-hero.jpg";
import marketingChannelsImg from "@/assets/marketing-channels.jpg";
import marketingResultsImg from "@/assets/marketing-results.jpg";

const TITLE = "Book Marketing Services | Penova Publishers";
const DESC =
  "Amazon ads, social campaigns, PR outreach, and email marketing built for authors. Honest reporting, clear pricing.";

export const Route = createFileRoute("/marketing")({
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

const marketingServices = [
  {
    title: "Amazon Ads & Optimization",
    body: "We run highly targeted Amazon Ad campaigns that place your book alongside similar titles. We optimize keywords, bids, and A+ content to maximize return on ad spend (ROAS).",
    icon: Search,
  },
  {
    title: "Social Media Campaigns",
    body: "Strategic ad campaigns across Meta (Facebook & Instagram) and TikTok to capture readers where they spend time. We handle ad creative, audience targeting, and daily optimization.",
    icon: Megaphone,
  },
  {
    title: "PR & Media Outreach",
    body: "Targeted pitching to podcasters, bloggers, and book reviewers. We craft the press kit and secure interviews and features that build your authority and long-term discoverability.",
    icon: Globe,
  },
  {
    title: "Email Marketing & Automation",
    body: "We help you build a direct line to your readers. From setting up reader magnets to designing automated welcome sequences that turn subscribers into loyal buyers.",
    icon: Mail,
  },
];

const marketingProcess = [
  {
    title: "The Strategy Audit",
    body: "We start by analyzing your book's current metadata, category placement, and existing assets. We define the target audience and outline a custom marketing roadmap.",
  },
  {
    title: "Asset Creation",
    body: "Our designers and copywriters build the ad creatives, write the copy, and set up your tracking links. Everything is prepared for a cohesive launch across all channels.",
  },
  {
    title: "Launch & Testing",
    body: "Campaigns go live. We spend the first two weeks testing different audiences, ad creatives, and bids to find the most cost-effective path to acquiring readers.",
  },
  {
    title: "Scale & Optimize",
    body: "We shift budget to the winning campaigns. You receive honest, plain-English reports showing exactly what was spent, what it yielded, and our strategy for the next month.",
  },
];

const marketingFaqs = [
  {
    q: "How much should I spend on ads?",
    a: "We usually recommend a minimum starting ad budget of $500/month to gather enough data for meaningful optimization. This budget is paid directly to the ad platforms (Amazon, Meta) and is separate from our management fee. We'll advise on the best allocation based on your genre.",
  },
  {
    q: "Do I keep my royalties?",
    a: "100%. We are a marketing agency, not a publisher taking a cut. All sales flow through your own accounts, and all royalties go directly to you. We just manage the campaigns that drive those sales.",
  },
  {
    q: "Can you guarantee a specific number of sales?",
    a: "No honest marketer can guarantee specific book sales. Success depends on the book's genre, cover, reviews, and market demand. What we do guarantee is professional execution, transparent reporting, and relentless optimization to find your most profitable readers.",
  },
  {
    q: "Do you market books published by other companies?",
    a: "Yes. While we often market books we've published at Penova, our marketing services are available to traditionally published and independently published authors alike.",
  },
  {
    q: "How do you handle reporting?",
    a: "You'll receive a detailed, plain-English report every month (or weekly during a launch). We cover ad spend, clicks, conversion rates, and estimated royalties, along with our analysis of what's working and our plan for the next period.",
  },
  {
    q: "Do you do TikTok (BookTok) marketing?",
    a: "Yes. We run paid TikTok ad campaigns and can advise on organic BookTok strategy. However, organic viral success on TikTok requires the author to be heavily involved in content creation.",
  },
];

function Page() {
  return (
    <SiteLayout>
      {/* -------- Animated Hero Section -------- */}
      <section className="relative isolate overflow-hidden bg-navy-deep">
        {/* Background image */}
        <img
          src={marketingHeroImg}
          alt=""
          aria-hidden="true"
          className="ken-burns absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-navy-deep/60" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep/95 via-navy-deep/70 to-navy-deep/20" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/15 via-transparent to-transparent pointer-events-none" />
        
        {/* Animated grid lines overlay for a "data/marketing" feel */}
        <div className="absolute inset-0 -z-10 hairline-grid opacity-30 pointer-events-none mix-blend-overlay" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-24 bg-gradient-to-t from-cream-deep via-cream-deep/50 to-transparent" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
          <div>
            <span
              className="glass-navy inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
              style={{
                animation: "hero-slide-right 0.7s cubic-bezier(0.22,1,0.36,1) both",
                animationDelay: "0.1s",
              }}
            >
              <Target className="h-3.5 w-3.5" />
              Book Marketing & PR
            </span>

            <h1 className="mt-8 text-5xl leading-[1.05] text-on-navy md:text-6xl lg:text-[4.4rem]">
              <span
                className="block"
                style={{
                  animation: "hero-fade-up 0.75s cubic-bezier(0.22,1,0.36,1) both",
                  animationDelay: "0.3s",
                }}
              >
                Find your readers.
              </span>
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
                  (e.target as HTMLElement).style.animation =
                    "hero-cursor-blink 1s step-end infinite";
                }}
              >
                Grow your royalties.
              </span>
            </h1>

            <span
              className="rule-gold mt-8"
              style={{
                animation: "hero-fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
                animationDelay: "0.75s",
              }}
            />

            <p
              className="mt-8 max-w-xl text-lg leading-relaxed text-on-navy-muted font-light"
              style={{
                animation: "hero-fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
                animationDelay: "0.9s",
              }}
            >
              Amazon ads, social campaigns, PR outreach, and email marketing built specifically for authors. Honest reporting, clear pricing, and you keep 100% of your rights.
            </p>

            <div
              className="mt-10 flex flex-wrap gap-4"
              style={{
                animation: "hero-fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
                animationDelay: "1.05s",
              }}
            >
              <Link
                to="/signup"
                className="beam-sweep group inline-flex items-center gap-2 rounded-sm bg-gold px-8 py-4 text-sm font-semibold text-navy-deep transition-all duration-500 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-glow"
              >
                Get a Marketing Plan
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            </div>
            <HeroReviewRatings className="mt-9" />
          </div>

          <Reveal delay={180} className="hidden lg:block relative z-10 w-full max-w-[400px] mx-auto">
            <MarketingForm />
          </Reveal>
        </div>
      </section>

      <PlatformStrip className="relative z-20 rounded-t-[2rem] border-t-0 shadow-[0_-12px_35px_rgba(15,27,45,0.08)]" />

      {/* -------- Services Overview -------- */}
      <section className="bg-cream-deep py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Our Capabilities"
            title="Comprehensive marketing for authors."
            intro="We don't just run ads; we build holistic campaigns that increase discoverability, drive sales, and turn casual readers into super fans."
            align="center"
          />
          
          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {marketingServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={i * 100}>
                  <div className="group relative h-full rounded-2xl border border-border bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] hover:border-gold/30">
                    <div className="absolute top-0 right-0 -mt-6 -mr-6 h-24 w-24 bg-gradient-to-br from-gold/10 to-transparent rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    
                    <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-navy-deep transition-all duration-500 group-hover:bg-navy-deep group-hover:text-gold group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] group-hover:scale-110">
                      <Icon className="h-5 w-5 transition-transform duration-500 group-hover:rotate-[15deg]" />
                    </span>
                    
                    <h3 className="relative mt-8 font-serif text-xl text-navy-deep group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground font-light">
                      {service.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------- Visual Storytelling / Data & Results -------- */}
      <section className="mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-navy-deep/10 via-gold/5 to-transparent blur-2xl pointer-events-none" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_70px_-20px_rgba(15,23,63,0.35)] ring-1 ring-border">
              <img
                src={marketingResultsImg}
                alt="Marketing analytics and reporting"
                className="w-full h-auto object-cover block aspect-[4/3] transition-transform duration-1000 hover:scale-105"
              />
              
              {/* Overlay elements for a data-driven feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Animated Floating Chart Box */}
              <div className="absolute bottom-6 left-6 right-6 lg:right-auto lg:w-3/4 rounded-xl glass-navy p-5 flex items-end gap-3 float-slow">
                <div className="flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-gold mb-3">Audience Growth</p>
                  <div className="flex items-end gap-2 h-16 w-full">
                    {[30, 45, 60, 50, 75, 90, 100].map((height, i) => (
                      <div key={i} className="w-full bg-white/20 rounded-t-sm relative overflow-hidden" style={{ height: `${height}%` }}>
                         <div 
                           className="absolute bottom-0 inset-x-0 bg-gold w-full transition-all duration-1000 ease-out" 
                           style={{ 
                             height: '100%', 
                             animation: `penova-fade-in-up ${0.5 + i * 0.1}s cubic-bezier(0.22,1,0.36,1) both`
                           }} 
                         />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-2xl font-serif text-white flex items-center gap-1">
                    <TrendingUp className="h-5 w-5 text-gold" />
                    +248%
                  </p>
                  <p className="text-xs text-white/60 mt-1">vs. last month</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Honest Reporting"
              title="Data-driven strategy. Transparent results."
              intro="We believe in marketing that you can measure. No vanity metrics or confusing spreadsheets, just clear reporting on what was spent and what it returned."
            />
            <ul className="mt-12 space-y-8">
              {[
                {
                  title: "Clear ROI Tracking",
                  body: "We set up tracking so you can see exactly which ads and campaigns are driving book sales and page reads.",
                },
                {
                  title: "Continuous Optimization",
                  body: "We don't set it and forget it. We monitor campaigns daily, killing underperforming ads and scaling the winners.",
                },
                {
                  title: "Plain-English Reports",
                  body: "Every month, you receive a video walkthrough or written summary explaining the numbers in a way that actually makes sense.",
                },
              ].map((benefit, i) => (
                <Reveal as="li" key={benefit.title} delay={i * 100}>
                  <div className="flex gap-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold">
                      <BarChart className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="font-serif text-xl text-navy-deep">
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
        </div>
      </section>

      {/* -------- Full-width visual banner -------- */}
      <section className="relative h-[40vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center">
        <img 
          src={marketingChannelsImg} 
          alt="Marketing channels" 
          className="absolute inset-0 w-full h-full object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-navy-deep/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-transparent to-navy-deep/40" />
        
        <Reveal className="relative z-10 text-center px-5">
          <p className="text-gold font-semibold tracking-[0.2em] uppercase text-sm mb-4">Multi-Channel Approach</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white max-w-3xl mx-auto leading-tight text-glow">
            Be everywhere your readers are looking for their next great book.
          </h2>
        </Reveal>
      </section>

      {/* -------- Process -------- */}
      <section className="mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-36">
        <SectionHeading
          eyebrow="How it works"
          title="The road to a successful campaign."
          intro="We follow a systematic approach to launching and scaling your book's marketing."
          align="center"
        />
        <div className="mt-16">
          <ProcessSteps steps={marketingProcess} />
        </div>
      </section>

      {/* -------- FAQ -------- */}
      <section className="mx-auto max-w-3xl px-5 py-28 lg:px-8 lg:py-36">
        <Reveal className="mb-16">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-brown mb-4">
            Common Questions
          </p>
          <h2 className="text-center text-4xl md:text-5xl font-serif text-navy-deep mb-6">
            Marketing FAQs
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <FaqAccordion items={marketingFaqs} dark={false} />
        </Reveal>
      </section>

      {/* -------- CTA Banner -------- */}
      <CtaBanner
        title="Ready to reach more readers?"
        body="Let's discuss your book and build a custom marketing plan. Request a free assessment, and a senior strategist will outline exactly how we would market your title."
        primary="Get a Free Marketing Plan"
      />
    </SiteLayout>
  );
}
