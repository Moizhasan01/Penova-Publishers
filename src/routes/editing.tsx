import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search, PenTool, Highlighter, CheckCheck, FileText, Quote, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { Reveal } from "@/components/reveal";
import { CtaBanner, FaqAccordion, HeroReviewRatings, PlatformStrip, SectionHeading } from "@/components/sections";
import { EditingForm } from "@/components/forms/editing-form";
import editingDesk from "@/assets/editing-desk.jpg";
import manuscriptImg from "@/assets/blog-manuscript.jpg";

const TITLE = "Book Editing Services — Penova Publishers";
const DESC =
  "Our book editing team goes line by line, word by word, making sure your prose flows and your errors disappear. From developmental editing to proofreading.";

export const Route = createFileRoute("/editing")({
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

const editingServices = [
  {
    icon: Search,
    title: "Developmental Editing",
    body: "The big picture. We look at plot holes, character arcs, pacing, and structural flow. This is where we make sure the foundation of your story is rock solid before refining the details.",
  },
  {
    icon: PenTool,
    title: "Line Editing",
    body: "Focusing on the craft of your prose. We sharpen sentences, improve rhythm, tighten dialogue, and ensure your voice is consistent and compelling from beginning to end.",
  },
  {
    icon: Highlighter,
    title: "Copy Editing",
    body: "The meticulous cleanup. We correct grammar, spelling, punctuation, and enforce stylistic consistency (like Chicago Manual of Style). Your manuscript becomes clean, clear, and correct.",
  },
  {
    icon: CheckCheck,
    title: "Proofreading",
    body: "The final polish. Before your book goes to print, we do a final pass to catch any lingering typos, formatting issues, or stray errors that slipped through previous edits.",
  },
];

const editingFaqs = [
  {
    q: "What is the difference between copy editing and line editing?",
    a: "Line editing focuses on the style, flow, and rhythm of your sentences—making sure your voice sounds its best. Copy editing is more technical, focusing on grammar, spelling, punctuation, and consistency.",
  },
  {
    q: "Will an editor try to change my voice?",
    a: "Never. Our goal is to make you sound like the best version of yourself, not someone else. We preserve your unique style and tone while enhancing clarity and flow.",
  },
  {
    q: "Do I have to accept all the editor's changes?",
    a: "No. You have the final say. We provide our edits as suggestions (using track changes). We'll explain why we made a change, but the creative authority remains entirely yours.",
  },
  {
    q: "What format should I submit my manuscript in?",
    a: "We prefer standard Microsoft Word documents (.docx) so we can use the Track Changes feature. This allows you to easily see, accept, or reject every edit we propose.",
  },
];

function Page() {
  return (
    <SiteLayout>
      <style>{`
        @keyframes editing-strikethrough {
          0% { width: 0; opacity: 0; }
          20% { opacity: 1; }
          50%, 100% { width: 100%; opacity: 1; }
        }
        @keyframes editing-correction-drop {
          0% { transform: translateY(-10px); opacity: 0; }
          30% { transform: translateY(-10px); opacity: 0; }
          60%, 100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes editing-highlight {
          0% { width: 0; opacity: 0; }
          10% { opacity: 1; }
          40%, 100% { width: 100%; opacity: 1; }
        }
        @keyframes editing-caret {
          0%, 45% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes editing-typing {
          from { width: 0; }
          to { width: 100%; }
        }
        
        .animate-strikethrough {
          position: relative;
          display: inline-block;
          color: rgba(255, 255, 255, 0.4);
        }
        .animate-strikethrough::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          height: 3px;
          background-color: #EB6358;
          animation: editing-strikethrough 6s cubic-bezier(0.8, 0, 0.2, 1) infinite;
          transform: translateY(-50%) rotate(-2deg);
        }
        .animate-correction {
          position: absolute;
          top: -1.2em;
          left: 50%;
          transform: translateX(-50%);
          color: #d4af37;
          font-family: 'Inter', sans-serif;
          font-size: 0.5em;
          font-style: italic;
          font-weight: 600;
          letter-spacing: 0.1em;
          animation: editing-correction-drop 6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
        }
        .animate-highlight-wrap {
          position: relative;
          display: inline-block;
        }
        .animate-highlight-wrap::before {
          content: '';
          position: absolute;
          top: 5%;
          bottom: 5%;
          left: -2%;
          background-color: rgba(212, 175, 55, 0.3);
          border-radius: 4px;
          z-index: -1;
          animation: editing-highlight 6s cubic-bezier(0.6, 0, 0.4, 1) infinite;
          animation-delay: 2.5s;
          opacity: 0;
          width: 0;
        }
        .typing-container {
          display: inline-block;
          position: relative;
        }
        .typing-text {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid #d4af37;
          animation: editing-typing 3s steps(30, end) infinite, editing-caret 0.8s step-end infinite;
          max-width: fit-content;
        }
      `}</style>

      {/* -------- Hero Section -------- */}
      <section className="relative isolate overflow-hidden bg-navy-deep min-h-[90vh] flex items-center">
        <img
          src={editingDesk}
          alt="A writer's desk with an open manuscript"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30 ken-burns"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-deep/80 via-navy-deep/60 to-navy-deep" />
        <div className="absolute inset-0 -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <Reveal>
            <div>
              <span className="glass-navy inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-8 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                <Highlighter className="h-3.5 w-3.5" />
                Professional Editing
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif text-white leading-[1.1] tracking-tight">
                <span className="text-gold-shimmer">Your manuscript,</span> refined.
              </h1>
              
              <p className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed text-on-navy-muted font-light">
                Polished prose. Clear structure. Readers who stay engaged. Our editors work line by line to make your manuscript the best it can be.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row items-start gap-4">
                <Link
                  to="/signup"
                  className="beam-sweep group inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-navy-deep shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
                >
                  Submit Your Manuscript
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </div>
              <HeroReviewRatings className="mt-9" />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <EditingForm />
          </Reveal>
        </div>
      </section>

      <PlatformStrip />

      {/* -------- Services Grid -------- */}
      <section className="bg-cream-deep py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Editing at every altitude."
            intro="Whether your book needs a complete structural overhaul or just a final polish before the presses roll, we have the specialized editor for the job."
            align="center"
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {editingServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={i * 80}>
                  <div className="group relative h-full rounded-2xl border border-border/60 bg-white p-10 transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.2)] overflow-hidden">
                    <div className="absolute right-0 top-0 -mt-8 -mr-8 text-9xl font-serif text-navy-deep/5 transition-transform duration-700 group-hover:scale-110 group-hover:text-gold/5 pointer-events-none select-none">
                      0{i + 1}
                    </div>
                    
                    <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-xl bg-navy-deep shadow-lg transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(212,175,55,0.2)]">
                      <Icon className="h-7 w-7 text-gold transition-transform duration-500 group-hover:scale-110" />
                    </span>
                    
                    <h3 className="relative mt-8 text-3xl font-serif text-navy-deep tracking-tight">
                      {service.title}
                    </h3>
                    
                    <p className="relative mt-4 text-base leading-relaxed text-muted-foreground font-light">
                      {service.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------- The Invisible Craft -------- */}
      <section className="mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal className="relative min-h-[500px]">
            <div className="overflow-hidden rounded-2xl border border-border/60 shadow-[0_24px_60px_rgba(15,27,45,0.12)] absolute inset-0 z-0">
              <img 
                src={manuscriptImg} 
                alt="A manuscript being edited" 
                className="h-full w-full object-cover transition-transform duration-[2000ms] hover:scale-105" 
              />
              <div className="absolute inset-0 bg-navy-deep/20 mix-blend-overlay" />
            </div>
            
            {/* Animated Highlight Box */}
            <div className="absolute -right-6 top-1/4 z-10 w-80 rounded-xl border border-white/80 bg-white/95 p-6 shadow-2xl backdrop-blur-md transform transition-transform duration-700 hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-4 border-b border-border/50 pb-3">
                <div className="h-8 w-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold font-serif font-bold italic">Ed</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-navy-deep uppercase tracking-widest">Editorial Note</p>
                  <p className="text-[10px] text-muted-foreground">10:42 AM</p>
                </div>
              </div>
              <p className="font-serif text-lg leading-snug text-navy-deep">
                <span className="animate-highlight-wrap">This paragraph is beautiful.</span> 
                <br/><span className="text-sm text-muted-foreground mt-2 block font-sans font-light">Let's move it to the opening to hook the reader immediately.</span>
              </p>
            </div>
            
            {/* Animated Typing Box */}
            <div className="absolute -left-6 bottom-1/4 z-10 w-72 rounded-xl border border-white/80 bg-navy-deep p-6 shadow-2xl transform transition-transform duration-700 hover:translate-y-2">
              <Quote className="h-6 w-6 text-gold mb-3 opacity-50" />
              <div className="typing-container">
                <p className="typing-text font-serif text-xl leading-snug text-white">
                  Finding your voice...
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading 
              eyebrow="The philosophy" 
              title="Your story, amplified. Never rewritten." 
              intro="The best editing is invisible. We don't rewrite your book to sound like us; we refine it to sound like the absolute best version of you." 
            />
            
            <div className="mt-12 space-y-8">
              {[
                { title: "Preserving your voice", body: "We study your cadence, your vocabulary, and your intent before we make a single change." },
                { title: "Transparent suggestions", body: "Every edit is tracked. You review our suggestions and maintain complete creative control." },
                { title: "Industry standards", body: "We edit to the Chicago Manual of Style, ensuring your book meets the rigorous standards of traditional publishing." }
              ].map((item, i) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <CheckCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-navy-deep">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -------- FAQ Section -------- */}
      <section className="bg-navy-deep py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Reveal className="mb-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
              Common Questions
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Editing demystified.
            </h2>
            <p className="text-lg leading-relaxed text-white/70 font-light">
              Clear answers about our editorial process.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="bg-white/5 rounded-2xl p-8 lg:p-12 border border-white/10 backdrop-blur-sm shadow-2xl">
              <FaqAccordion items={editingFaqs} dark={true} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------- CTA Banner -------- */}
      <CtaBanner
        title="Your manuscript. Our expertise. One fixed price."
        body="Tell us about your book and where it stands today. A senior editor will read it, send back an honest assessment, outline the editorial route, and quote you a fixed price."
        primary="Request a Free Assessment"
      />
    </SiteLayout>
  );
}
