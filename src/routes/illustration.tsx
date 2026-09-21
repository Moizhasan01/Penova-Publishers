import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { Reveal } from "@/components/reveal";
import { CtaBanner, FaqAccordion, HeroReviewRatings } from "@/components/sections";
import { IllustrationForm } from "@/components/forms/illustration-form";
import marketingHeroImg from "@/assets/marketing hero.jpg";
import bookCoversImg from "@/assets/illustration-book-covers.jpg";
import processImg from "@/assets/illustration-process.jpg";

/* ─── SEO ──────────────────────────────────────────────── */
const TITLE = "Book Illustration | Penova Publishers";
const DESC =
  "Premium book illustration services: whimsical children's art, character design, scene illustration, cover art, and complete visual direction. Funky, creative, professionally-crafted illustrations for every story and genre.";

export const Route = createFileRoute("/illustration")({
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

/* ─── Scroll-reveal hook ──────────────────────────────── */
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setVisible(true); return; }
    const io = new IntersectionObserver(
      (entries) => { if (entries[0]?.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Counter hook ─────────────────────────────────────── */
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let frame = 0;
    const totalFrames = Math.round(duration / 16);
    const step = target / totalFrames;
    const timer = setInterval(() => {
      frame++;
      setCount(Math.min(Math.round(step * frame), target));
      if (frame >= totalFrames) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [start, target, duration]);
  return count;
}

/* ─── Data ─────────────────────────────────────────────── */
const ILLUSTRATION_STYLES = [
  {
    name: "Children's Book Art",
    emoji: "🐣",
    desc: "Whimsical, age-appropriate storytelling through vibrant, joyful visuals that young readers adore.",
    color: "#FF6B6B",
    bg: "linear-gradient(135deg, #fff5f5 0%, #ffe0e0 100%)",
    tags: ["Ages 0 to 10", "Playful", "Expressive"],
    doodle: "✦",
  },
  {
    name: "Character Design",
    emoji: "🦊",
    desc: "Memorable personalities brought to life with consistent character sheets, expressions, and poses.",
    color: "#FF9D00",
    bg: "linear-gradient(135deg, #fffbf0 0%, #fff0cc 100%)",
    tags: ["Expressive", "Consistent", "Loveable"],
    doodle: "★",
  },
  {
    name: "Fantasy & Magic",
    emoji: "🔮",
    desc: "Immersive worlds of dragons, castles, and wonder. Epic scope with intricate, atmospheric details.",
    color: "#8B5CF6",
    bg: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)",
    tags: ["Epic", "Immersive", "Magical"],
    doodle: "◈",
  },
  {
    name: "Watercolor & Painterly",
    emoji: "🎨",
    desc: "Soft, textured artwork with the warmth of traditional brushwork. Beautiful and timeless.",
    color: "#06B6D4",
    bg: "linear-gradient(135deg, #f0fdff 0%, #cffafe 100%)",
    tags: ["Textured", "Soft", "Artistic"],
    doodle: "⬟",
  },
  {
    name: "Scene Illustration",
    emoji: "🏞️",
    desc: "Rich, detailed spreads that place readers inside your world, from cozy cottages to alien planets.",
    color: "#10B981",
    bg: "linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%)",
    tags: ["Detailed", "Atmospheric", "Lush"],
    doodle: "◉",
  },
  {
    name: "Cover Art & Visual Identity",
    emoji: "📚",
    desc: "Eye-catching covers engineered to stop scrolling and win shelf presence, optimized for print and digital.",
    color: "#F43F5E",
    bg: "linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)",
    tags: ["Market-ready", "Striking", "Genre-smart"],
    doodle: "⬡",
  },
];

const SHOWCASE_PROJECTS = [
  {
    title: "The Lantern Whale",
    category: "Picture Book",
    style: "Watercolor",
    count: 24,
    palette: ["#A5F3FC", "#0EA5E9", "#F472B6"],
    emoji: "🐳",
  },
  {
    title: "Threads of Fate",
    category: "Fantasy Novel",
    style: "Digital Painting",
    count: 12,
    palette: ["#C4B5FD", "#7C3AED", "#F9A8D4"],
    emoji: "🔮",
  },
  {
    title: "Kid Lightning",
    category: "Graphic Novel",
    style: "Bold Cartoon",
    count: 42,
    palette: ["#FCD34D", "#EF4444", "#3B82F6"],
    emoji: "⚡",
  },
  {
    title: "Fox & the Forest",
    category: "Picture Book",
    style: "Character Design",
    count: 18,
    palette: ["#86EFAC", "#F97316", "#FDE68A"],
    emoji: "🦊",
  },
  {
    title: "Starlight Citadel",
    category: "YA Fantasy",
    style: "Atmospheric",
    count: 16,
    palette: ["#818CF8", "#1E3A8A", "#F0ABFC"],
    emoji: "🏰",
  },
  {
    title: "The Map Maker's Secret",
    category: "Adventure",
    style: "Maps & Illustration",
    count: 8,
    palette: ["#FDE68A", "#D97706", "#A7F3D0"],
    emoji: "🗺️",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    emoji: "💬",
    color: "#FF6B6B",
    title: "Story Consultation",
    body: "We start by deeply understanding your story, your characters, the world and the emotional journey. Everything visual stems from this conversation.",
  },
  {
    num: "02",
    emoji: "🖊️",
    color: "#FF9D00",
    title: "Style & Vision",
    body: "We craft a visual direction document: color palettes, character archetypes, mood references, and atmosphere guidelines tailored to your story.",
  },
  {
    num: "03",
    emoji: "✏️",
    color: "#8B5CF6",
    title: "Concept Development",
    body: "Rough sketches, character studies, scene thumbnails. You review at every stage. This is where ideas become visual reality, one iteration at a time.",
  },
  {
    num: "04",
    emoji: "🎨",
    color: "#06B6D4",
    title: "Final Artwork",
    body: "High-resolution, production-ready illustrations in every format you need, from print and digital to eBook and beyond. Every pixel perfect.",
  },
];

const WHY_ITEMS = [
  { emoji: "🏅", title: "You Own Everything", body: "Full copyright and usage rights belong to you, with no licensing fees and no ongoing royalties. Your art, forever." },
  { emoji: "🎭", title: "One Dedicated Illustrator", body: "The same artist sees your project from first sketch to final file, ensuring absolute visual consistency." },
  { emoji: "💎", title: "Fixed, Transparent Pricing", body: "You see the full investment before we start. No surprise invoices, no scope creep, no hourly drift." },
  { emoji: "🔄", title: "Revision Rounds Built In", body: "Multiple rounds where your feedback actively shapes the artwork. We refine until it's exactly right." },
  { emoji: "📦", title: "Production-Ready Files", body: "High-res print files, digital formats and source files, whatever your publishing pipeline needs." },
  { emoji: "📖", title: "Manuscript-First Approach", body: "We read your book before we draw a single line. Illustrations come from understanding, not templates." },
];

const ILLUSTRATION_FAQS = [
  {
    q: "What illustration styles do you specialise in?",
    a: "We cover the full range, from whimsical watercolor and bold cartoon to painterly digital, character design, concept art and maps. We match the style to your story and audience.",
  },
  {
    q: "How long does an illustration project take?",
    a: "A single cover typically takes 3 to 6 weeks. Full interior illustration projects run 3 to 6 months. We provide a detailed timeline in your proposal upfront.",
  },
  {
    q: "Can I request revisions at every stage?",
    a: "Yes. Our structured process includes dedicated review rounds at sketch, refined sketch, and final colour stages. Your feedback actively shapes every piece.",
  },
  {
    q: "Who owns the artwork, me or Penova?",
    a: "You own everything. All illustration rights, layered files, and usage belong to you in perpetuity. We are a services partner, not a rights-holding publisher.",
  },
  {
    q: "Can you illustrate just one piece, or must I commission the full book?",
    a: "We work at any scope, from a single cover and a few interior spreads to an entire full-colour picture book. We scope and price exactly to your needs.",
  },
  {
    q: "How do you ensure illustrations match the tone of my story?",
    a: "We read your manuscript and build a visual direction document before a single sketch is drawn. Tone, palette and character personality are all locked before artwork begins.",
  },
];

const STATS = [
  { target: 500, suffix: "+", label: "Illustrations Created", emoji: "🎨" },
  { target: 50, suffix: "+", label: "Illustrated Projects", emoji: "📚" },
  { target: 98, suffix: "%", label: "Client Satisfaction", emoji: "⭐" },
  { target: 12, suffix: "+", label: "Illustration Styles", emoji: "🖌️" },
];

const ART_STYLES_TICKER = [
  "Watercolor", "Bold Cartoon", "Soft Pastel", "Cut Paper", "Pencil & Wash",
  "Digital Painting", "Painterly", "Whimsical Folk", "Storybook Classic",
  "Ink & Wash", "Character Design", "Concept Art", "Maps & Diagrams",
];

/* ─── Floating Doodle ──────────────────────────────────── */
function FloatingDoodle({
  children, top, left, size, delay, color, rotate = 0,
}: {
  children: React.ReactNode;
  top: string;
  left: string;
  size: number;
  delay: number;
  color: string;
  rotate?: number;
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top,
        left,
        fontSize: size,
        color,
        opacity: 0.18,
        pointerEvents: "none",
        zIndex: 0,
        animation: `illus-float ${4 + delay * 0.6}s ease-in-out ${delay * 0.4}s infinite`,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Stat Card ────────────────────────────────────────── */
function StatCard({ stat, visible }: { stat: typeof STATS[0]; visible: boolean }) {
  const count = useCounter(stat.target, 2200, visible);
  return (
    <div className="illus-stat-card">
      <div className="illus-stat-emoji">{stat.emoji}</div>
      <div className="illus-stat-number">
        {count}{stat.suffix}
      </div>
      <div className="illus-stat-label">{stat.label}</div>
    </div>
  );
}

/* ─── Style Card ───────────────────────────────────────── */
function StyleCard({ s, index }: { s: typeof ILLUSTRATION_STYLES[0]; index: number }) {
  const { ref, visible } = useReveal();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="illus-style-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms`,
        background: s.bg,
        borderColor: hovered ? s.color : "transparent",
        boxShadow: hovered ? `0 20px 60px ${s.color}30, 0 0 0 2px ${s.color}` : "0 4px 24px rgba(0,0,0,0.07)",
      }}
    >
      <div className="illus-style-emoji">
        <span className="illus-icon-glyph" style={{ transform: hovered ? "scale(1.1) rotate(-5deg)" : "scale(1)" }}>
          {s.emoji}
        </span>
      </div>
      <div
        className="illus-style-doodle"
        style={{ color: s.color, opacity: hovered ? 0.3 : 0.12 }}
      >
        {s.doodle}
      </div>
      <h3 className="illus-style-name" style={{ color: "#1a1a2e" }}>{s.name}</h3>
      <p className="illus-style-desc">{s.desc}</p>
      <div className="illus-style-tags">
        {s.tags.map((t) => (
          <span
            key={t}
            className="illus-tag"
            style={{
              background: hovered ? s.color : "#f3f4f6",
              color: hovered ? "#fff" : "#374151",
            }}
          >
            {t}
          </span>
        ))}
      </div>
      <div
        className="illus-style-arrow"
        style={{ color: s.color, transform: hovered ? "translateX(6px)" : "translateX(0)" }}
      >
        <ArrowRight size={18} />
      </div>
    </div>
  );
}

/* ─── Showcase Card ────────────────────────────────────── */
function ShowcaseCard({ p, index }: { p: typeof SHOWCASE_PROJECTS[0]; index: number }) {
  const { ref, visible } = useReveal();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="illus-showcase-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered ? "translateY(-8px) scale(1.02)" : "translateY(0)"
          : "translateY(40px)",
        transition: `opacity 0.6s ease ${index * 90}ms, transform 0.4s ease`,
        boxShadow: hovered ? "0 30px 70px rgba(0,0,0,0.18)" : "0 6px 28px rgba(0,0,0,0.09)",
      }}
    >
      {/* Colour swatch bar */}
      <div className="illus-swatch-bar">
        {p.palette.map((c) => (
          <div key={c} className="illus-swatch" style={{ background: c }} />
        ))}
      </div>

      {/* Big emoji */}
      <div className="illus-showcase-emoji">
        <span className="illus-icon-glyph" style={{ transform: hovered ? "scale(1.1) rotate(8deg)" : "scale(1)" }}>
          {p.emoji}
        </span>
      </div>

      <div className="illus-showcase-body">
        <p className="illus-showcase-category">{p.category}</p>
        <h4 className="illus-showcase-title">{p.title}</h4>
        <p className="illus-showcase-style">{p.style}</p>
      </div>

      <div className="illus-showcase-footer">
        <span className="illus-showcase-count">{p.count} illustrations</span>
        <ArrowRight
          size={18}
          style={{
            color: "#8B5CF6",
            transform: hovered ? "translateX(6px)" : "translateX(0)",
            transition: "transform 0.3s ease",
          }}
        />
      </div>
    </div>
  );
}

/* ─── Process Step ─────────────────────────────────────── */
function ProcessStep({ step, index }: { step: typeof PROCESS_STEPS[0]; index: number }) {
  const { ref, visible } = useReveal();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="illus-process-step"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease ${index * 120}ms, transform 0.6s ease ${index * 120}ms`,
      }}
    >
      <div
        className="illus-process-num"
        style={{
          background: hovered ? step.color : "#f9fafb",
          color: hovered ? "#fff" : step.color,
          borderColor: step.color,
          transform: hovered ? "scale(1.1)" : "scale(1)",
          boxShadow: hovered ? `0 0 0 6px ${step.color}22` : "none",
        }}
      >
        {step.num}
      </div>
      {index < PROCESS_STEPS.length - 1 && (
        <div className="illus-process-connector" style={{ background: step.color }} />
      )}
      <div className="illus-process-emoji">
        <span className="illus-icon-glyph" style={{ transform: hovered ? "rotate(-10deg) scale(1.1)" : "rotate(0)" }}>
          {step.emoji}
        </span>
      </div>
      <h3 className="illus-process-title" style={{ color: "#1a1a2e" }}>{step.title}</h3>
      <p className="illus-process-body">{step.body}</p>
    </div>
  );
}

/* ─── Why Card ─────────────────────────────────────────── */
function WhyCard({ item, index }: { item: typeof WHY_ITEMS[0]; index: number }) {
  const { ref, visible } = useReveal();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="illus-why-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms`,
        background: hovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)",
        borderColor: hovered ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.1)",
      }}
    >
      <div className="illus-why-emoji">
        <span className="illus-icon-glyph" style={{ transform: hovered ? "scale(1.1) rotate(-8deg)" : "scale(1)" }}>
          {item.emoji}
        </span>
      </div>
      <h3 className="illus-why-title">{item.title}</h3>
      <p className="illus-why-body">{item.body}</p>
      <CheckCircle2
        size={16}
        style={{
          color: "#86EFAC",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(-8px)",
          transition: "all 0.3s ease",
          marginTop: "12px",
        }}
      />
    </div>
  );
}

/* ─── Testimonial ──────────────────────────────────────── */
const TESTIMONIALS = [
  {
    quote: "The illustrations for my children's book were beyond anything I imagined. My daughter cried, the happy kind, when she saw the characters come to life.",
    name: "Sarah M.",
    book: "The Lantern Whale",
    rating: 5,
    emoji: "🐳",
  },
  {
    quote: "Penova's illustrator understood my fantasy world better than I did. Every spread felt like a window into a place I actually wanted to visit.",
    name: "James K.",
    book: "Threads of Fate",
    rating: 5,
    emoji: "🔮",
  },
  {
    quote: "I came with a vague concept and they turned it into a wildly colourful, personality-packed graphic novel. Absolutely professional from day one.",
    name: "Layla P.",
    book: "Kid Lightning",
    rating: 5,
    emoji: "⚡",
  },
];

function TestimonialCard({ t, index }: { t: typeof TESTIMONIALS[0]; index: number }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className="illus-testimonial-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${index * 100}ms, transform 0.6s ease ${index * 100}ms`,
      }}
    >
      <div className="illus-testimonial-stars">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={14} fill="#FF9D00" color="#FF9D00" />
        ))}
      </div>
      <p className="illus-testimonial-quote">"{t.quote}"</p>
      <div className="illus-testimonial-author">
        <span className="illus-testimonial-emoji">{t.emoji}</span>
        <div>
          <p className="illus-testimonial-name">{t.name}</p>
          <p className="illus-testimonial-book">{t.book}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Inline Styles ────────────────────────────────────── */
const PAGE_STYLES = `
  /* ── Animation keyframes ──────────────────────────── */
  @keyframes illus-float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33%       { transform: translateY(-18px) rotate(3deg); }
    66%       { transform: translateY(-8px) rotate(-2deg); }
  }
  @keyframes illus-spin-slow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes illus-marquee {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes illus-shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
  @keyframes illus-blob {
    0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    50%       { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  }
  @keyframes illus-bounce-in {
    0%   { transform: scale(0.6); opacity: 0; }
    70%  { transform: scale(1.06); }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes illus-pulse-ring {
    0%   { box-shadow: 0 0 0 0 rgba(139,92,246,0.4); }
    70%  { box-shadow: 0 0 0 16px rgba(139,92,246,0); }
    100% { box-shadow: 0 0 0 0 rgba(139,92,246,0); }
  }
  @keyframes illus-wiggle {
    0%, 100% { transform: rotate(0deg); }
    25%       { transform: rotate(5deg); }
    75%       { transform: rotate(-5deg); }
  }
  @keyframes illus-draw {
    from { stroke-dashoffset: 800; }
    to   { stroke-dashoffset: 0; }
  }
  @keyframes illus-gradient-shift {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* ── Hero Section ─────────────────────────────────── */
  .illus-hero {
    position: relative;
    min-height: 100svh;
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: 120px 24px 80px;
    background: linear-gradient(160deg, #fdf4ff 0%, #fef9f0 30%, #f0f9ff 60%, #fff0f5 100%);
  }
  .illus-hero-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
    position: relative;
    z-index: 2;
  }
  @media (max-width: 900px) {
    .illus-hero-grid { grid-template-columns: 1fr; gap: 40px; }
    .illus-hero { padding: 100px 20px 60px; }
  }
  .illus-hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 18px;
    border-radius: 100px;
    background: linear-gradient(135deg, #8B5CF620, #F43F5E15);
    border: 1.5px solid #8B5CF640;
    font-size: 13px;
    font-weight: 700;
    color: #7C3AED;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: 24px;
    animation: illus-bounce-in 0.7s ease both;
  }
  .illus-hero-badge-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: #8B5CF6;
    animation: illus-pulse-ring 2s infinite;
  }
  .illus-hero-h1 {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(48px, 6vw, 88px);
    font-weight: 700;
    line-height: 1.0;
    letter-spacing: -0.02em;
    color: #1a1a2e;
    margin-bottom: 24px;
  }
  .illus-hero-h1 span {
    background: linear-gradient(135deg, #8B5CF6 0%, #F43F5E 40%, #FF9D00 80%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: illus-gradient-shift 5s ease infinite;
  }
  .illus-hero-desc {
    font-size: 18px;
    line-height: 1.7;
    color: #4b5563;
    margin-bottom: 40px;
    font-weight: 400;
  }
  .illus-hero-ctas {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }
  .illus-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 16px 32px;
    border-radius: 100px;
    background: linear-gradient(135deg, #8B5CF6, #F43F5E);
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
    letter-spacing: 0.03em;
    box-shadow: 0 8px 30px rgba(139,92,246,0.4);
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
  }
  .illus-btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 40px rgba(139,92,246,0.55);
  }
  .illus-btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 15px 32px;
    border-radius: 100px;
    background: transparent;
    color: #1a1a2e;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
    border: 2px solid #1a1a2e;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .illus-btn-secondary:hover {
    background: #1a1a2e;
    color: #fff;
    transform: translateY(-2px);
  }
  .illus-hero-img-wrap {
    position: relative;
  }
  .illus-hero-img {
    width: 100%;
    border-radius: 24px;
    box-shadow: 0 30px 80px rgba(0,0,0,0.18);
    display: block;
  }
  .illus-hero-img-badge {
    position: absolute;
    bottom: -20px;
    left: -20px;
    background: #fff;
    border-radius: 16px;
    padding: 14px 20px;
    box-shadow: 0 12px 40px rgba(0,0,0,0.15);
    display: flex;
    align-items: center;
    gap: 12px;
    animation: illus-float 6s ease-in-out 0.5s infinite;
  }
  .illus-hero-img-badge2 {
    position: absolute;
    top: -16px;
    right: -16px;
    background: linear-gradient(135deg, #8B5CF6, #F43F5E);
    border-radius: 100px;
    padding: 10px 18px;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    box-shadow: 0 8px 24px rgba(139,92,246,0.4);
    animation: illus-float 7s ease-in-out 1s infinite;
    white-space: nowrap;
  }

  /* ── Stats Bar ─────────────────────────────────────── */
  .illus-stats-section {
    background: linear-gradient(135deg, #1a1a2e 0%, #2d1b69 50%, #1a1a2e 100%);
    padding: 64px 24px;
    position: relative;
    overflow: hidden;
  }
  .illus-stats-grid {
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }
  @media (max-width: 700px) {
    .illus-stats-grid { grid-template-columns: repeat(2, 1fr); }
  }
  .illus-stat-card {
    text-align: center;
    padding: 24px;
    border-radius: 16px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    transition: all 0.3s ease;
  }
  .illus-stat-card:hover {
    background: rgba(255,255,255,0.1);
    transform: translateY(-4px);
  }
  .illus-stat-emoji {
    font-size: 28px;
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    animation: illus-wiggle 3s ease-in-out infinite;
  }
  .illus-stat-number {
    font-family: 'Cormorant Garamond', serif;
    font-size: 48px;
    font-weight: 700;
    color: #fff;
    line-height: 1;
    margin-bottom: 6px;
    background: linear-gradient(135deg, #c4b5fd, #f9a8d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .illus-stat-label {
    font-size: 13px;
    color: rgba(255,255,255,0.6);
    font-weight: 500;
    letter-spacing: 0.04em;
  }

  /* ── Styles Ticker ─────────────────────────────────── */
  .illus-ticker {
    background: #FDFBF7;
    border-top: 1px solid #f0e8d0;
    border-bottom: 1px solid #f0e8d0;
    padding: 18px 0;
    overflow: hidden;
    mask-image: linear-gradient(to right, transparent 0, black 120px, black calc(100% - 120px), transparent 100%);
    -webkit-mask-image: linear-gradient(to right, transparent 0, black 120px, black calc(100% - 120px), transparent 100%);
  }
  .illus-ticker-inner {
    display: flex;
    gap: 0;
    animation: illus-marquee 22s linear infinite;
    width: max-content;
  }
  .illus-ticker-item {
    display: inline-flex;
    align-items: center;
    gap: 16px;
    padding: 0 32px;
    font-size: 14px;
    font-weight: 700;
    color: #8B5CF6;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    white-space: nowrap;
  }
  .illus-ticker-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: linear-gradient(135deg, #8B5CF6, #F43F5E);
    flex-shrink: 0;
  }

  /* ── Services Section ──────────────────────────────── */
  .illus-services-section {
    padding: 100px 24px;
    background: #FDFBF7;
    position: relative;
    overflow: hidden;
  }
  .illus-section-eyebrow {
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #8B5CF6;
    margin-bottom: 12px;
  }
  .illus-section-title {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(36px, 4vw, 56px);
    font-weight: 700;
    color: #1a1a2e;
    line-height: 1.1;
    margin-bottom: 16px;
    letter-spacing: -0.02em;
  }
  .illus-section-intro {
    font-size: 17px;
    color: #6b7280;
    max-width: 560px;
    line-height: 1.7;
    font-weight: 400;
  }
  .illus-section-rule {
    width: 48px;
    height: 3px;
    border-radius: 100px;
    background: linear-gradient(to right, #8B5CF6, #F43F5E);
    margin: 20px 0 0;
  }
  .illus-styles-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 64px;
  }
  @media (max-width: 900px) { .illus-styles-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px) { .illus-styles-grid { grid-template-columns: 1fr; } }
  .illus-style-card {
    position: relative;
    border-radius: 20px;
    padding: 36px 32px;
    border: 2px solid transparent;
    transition: all 0.35s ease;
    cursor: default;
    overflow: hidden;
  }
  .illus-style-emoji {
    font-size: 36px;
    width: 52px;
    height: 52px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    transition: transform 0.3s ease;
    transform-origin: center;
  }
  .illus-icon-glyph {
    display: inline-block;
    line-height: 1;
    transition: transform 0.3s ease;
    transform-origin: center;
  }
  .illus-style-doodle {
    position: absolute;
    top: 20px;
    right: 28px;
    font-size: 64px;
    font-weight: 900;
    transition: opacity 0.3s ease;
    pointer-events: none;
    line-height: 1;
  }
  .illus-style-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .illus-style-desc {
    font-size: 14px;
    color: #6b7280;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  .illus-style-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
  }
  .illus-tag {
    font-size: 11px;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 100px;
    letter-spacing: 0.06em;
    transition: all 0.25s ease;
  }
  .illus-style-arrow {
    transition: transform 0.3s ease;
  }

  /* ── Showcase Section ──────────────────────────────── */
  .illus-showcase-section {
    padding: 100px 24px;
    background: linear-gradient(180deg, #f5f3ff 0%, #fdf4ff 50%, #fff0f5 100%);
    position: relative;
    overflow: hidden;
  }
  .illus-showcase-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 64px;
  }
  @media (max-width: 900px) { .illus-showcase-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px) { .illus-showcase-grid { grid-template-columns: 1fr; } }
  .illus-showcase-card {
    background: #fff;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    min-height: 218px;
    flex-direction: column;
    transition: transform 0.4s ease, box-shadow 0.4s ease, opacity 0.6s ease;
  }
  .illus-swatch-bar {
    display: flex;
    height: 6px;
  }
  .illus-swatch {
    flex: 1;
  }
  .illus-showcase-emoji {
    font-size: 42px;
    width: 96px;
    height: 68px;
    padding: 20px 28px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    box-sizing: border-box;
    transition: transform 0.35s ease;
    transform-origin: center;
  }
  .illus-showcase-body {
    flex: 1;
    padding: 0 28px 16px;
  }
  .illus-showcase-category {
    font-size: 11px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #8B5CF6;
    margin-bottom: 6px;
  }
  .illus-showcase-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    font-weight: 700;
    color: #1a1a2e;
    margin-bottom: 4px;
  }
  .illus-showcase-style {
    font-size: 13px;
    color: #9ca3af;
  }
  .illus-showcase-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 28px;
    border-top: 1px solid #f3f4f6;
    margin-top: 8px;
  }
  .illus-showcase-count {
    font-size: 12px;
    font-weight: 700;
    color: #6b7280;
    background: #f3f4f6;
    padding: 4px 12px;
    border-radius: 100px;
  }

  /* ── Process Section ───────────────────────────────── */
  .illus-process-section {
    padding: 100px 24px;
    background: #FDFBF7;
    position: relative;
    overflow: hidden;
  }
  .illus-process-split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    margin-top: 64px;
  }
  @media (max-width: 900px) {
    .illus-process-split { grid-template-columns: 1fr; gap: 40px; }
  }
  .illus-process-img {
    width: 100%;
    border-radius: 24px;
    box-shadow: 0 24px 64px rgba(0,0,0,0.14);
  }
  .illus-process-steps-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .illus-process-step {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 28px;
    border-radius: 16px;
    background: #fff;
    border: 1.5px solid #f3f4f6;
    transition: all 0.3s ease;
  }
  .illus-process-step:hover {
    border-color: #e9d5ff;
    box-shadow: 0 8px 32px rgba(139,92,246,0.1);
  }
  .illus-process-num {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid;
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 16px;
    transition: all 0.3s ease;
    flex-shrink: 0;
    align-self: flex-start;
  }
  .illus-process-connector {
    display: none;
  }
  .illus-process-emoji {
    font-size: 24px;
    width: 38px;
    height: 38px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    transition: transform 0.3s ease;
    transform-origin: center;
  }
  .illus-process-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  .illus-process-body {
    font-size: 14px;
    line-height: 1.65;
    color: #6b7280;
  }

  /* ── Why Section ───────────────────────────────────── */
  .illus-why-section {
    padding: 100px 24px;
    background: linear-gradient(135deg, #1a1a2e 0%, #2d1b69 40%, #1e1b4b 70%, #1a1a2e 100%);
    position: relative;
    overflow: hidden;
  }
  .illus-why-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 64px;
  }
  @media (max-width: 900px) { .illus-why-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px) { .illus-why-grid { grid-template-columns: 1fr; } }
  .illus-why-card {
    padding: 32px;
    border-radius: 20px;
    border: 1px solid;
    transition: all 0.3s ease;
    cursor: default;
  }
  .illus-why-emoji {
    font-size: 30px;
    width: 46px;
    height: 46px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    transition: transform 0.3s ease;
    transform-origin: center;
  }
  .illus-why-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 10px;
  }
  .illus-why-body {
    font-size: 14px;
    color: rgba(255,255,255,0.6);
    line-height: 1.6;
  }

  /* ── Testimonials ──────────────────────────────────── */
  .illus-testimonials-section {
    padding: 100px 24px;
    background: #FDFBF7;
  }
  .illus-testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 64px;
  }
  @media (max-width: 900px) { .illus-testimonials-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px) { .illus-testimonials-grid { grid-template-columns: 1fr; } }
  .illus-testimonial-card {
    background: #fff;
    border-radius: 20px;
    padding: 32px;
    border: 1.5px solid #f3e8ff;
    box-shadow: 0 4px 24px rgba(139,92,246,0.06);
    transition: all 0.3s ease;
  }
  .illus-testimonial-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(139,92,246,0.14);
    border-color: #c4b5fd;
  }
  .illus-testimonial-stars {
    display: flex;
    gap: 4px;
    margin-bottom: 16px;
  }
  .illus-testimonial-quote {
    font-family: 'Cormorant Garamond', serif;
    font-size: 18px;
    line-height: 1.6;
    color: #1a1a2e;
    margin-bottom: 24px;
  }
  .illus-testimonial-author {
    display: flex;
    align-items: center;
    gap: 12px;
    border-top: 1px solid #f3f4f6;
    padding-top: 20px;
  }
  .illus-testimonial-emoji {
    font-size: 28px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5f3ff;
    border-radius: 50%;
  }
  .illus-testimonial-name {
    font-size: 14px;
    font-weight: 700;
    color: #1a1a2e;
  }
  .illus-testimonial-book {
    font-size: 12px;
    color: #8B5CF6;
    font-style: italic;
  }

  /* ── FAQ Section ───────────────────────────────────── */
  .illus-faq-section {
    padding: 100px 24px;
    background: linear-gradient(180deg, #f5f3ff 0%, #FDFBF7 100%);
  }

  /* ── Final CTA ─────────────────────────────────────── */
  .illus-final-cta {
    position: relative;
    overflow: hidden;
    padding: 120px 24px;
    text-align: center;
    background: linear-gradient(135deg, #8B5CF6 0%, #F43F5E 50%, #FF9D00 100%);
    background-size: 200% 200%;
    animation: illus-gradient-shift 8s ease infinite;
  }
  .illus-final-cta-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(40px, 5vw, 72px);
    font-weight: 700;
    color: #fff;
    margin-bottom: 20px;
    line-height: 1.05;
    letter-spacing: -0.02em;
  }
  .illus-final-cta-desc {
    font-size: 18px;
    color: rgba(255,255,255,0.88);
    max-width: 520px;
    margin: 0 auto 48px;
    line-height: 1.65;
  }
  .illus-final-cta-btns {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
  }
  .illus-cta-white {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 16px 36px;
    border-radius: 100px;
    background: #fff;
    color: #8B5CF6;
    font-size: 15px;
    font-weight: 800;
    text-decoration: none;
    box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
    letter-spacing: 0.02em;
  }
  .illus-cta-white:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 48px rgba(0,0,0,0.25);
  }
  .illus-cta-outline {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 15px 36px;
    border-radius: 100px;
    background: transparent;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
    border: 2.5px solid rgba(255,255,255,0.7);
    transition: all 0.3s ease;
  }
  .illus-cta-outline:hover {
    background: rgba(255,255,255,0.15);
    border-color: #fff;
    transform: translateY(-2px);
  }

  /* ── Blob background shapes ──────────────────────── */
  .illus-blob {
    position: absolute;
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    pointer-events: none;
    z-index: 0;
    animation: illus-blob 12s ease-in-out infinite, illus-float 8s ease-in-out infinite;
  }

  /* ── Section wrapper ─────────────────────────────── */
  .illus-section-inner {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }
`;

/* ─── Page Component ───────────────────────────────────── */
function Page() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => { if (entries[0]?.isIntersecting) { setStatsVisible(true); io.disconnect(); } },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const tickerItems = [...ART_STYLES_TICKER, ...ART_STYLES_TICKER];

  return (
    <SiteLayout>
      <style>{PAGE_STYLES}</style>

      {/* ─── Hero ───────────────────────────────────── */}
      <section className="illus-hero">
        <img
          src={marketingHeroImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-40 ken-burns"
        />
        <div className="absolute inset-0 z-[1] bg-white/55" aria-hidden="true" />

        {/* Background blobs */}
        <div
          className="illus-blob"
          style={{ width: 400, height: 400, top: "-100px", left: "-120px", background: "radial-gradient(circle, #c4b5fd33, transparent 70%)" }}
        />
        <div
          className="illus-blob"
          style={{ width: 300, height: 300, bottom: "0", right: "-80px", background: "radial-gradient(circle, #fda4af30, transparent 70%)", animationDelay: "4s" }}
        />

        {/* Floating doodles */}
        <FloatingDoodle top="12%" left="5%" size={32} delay={0} color="#8B5CF6">✦</FloatingDoodle>
        <FloatingDoodle top="25%" left="88%" size={24} delay={1} color="#F43F5E">★</FloatingDoodle>
        <FloatingDoodle top="70%" left="7%" size={20} delay={2} color="#FF9D00">◉</FloatingDoodle>
        <FloatingDoodle top="80%" left="90%" size={28} delay={0.5} color="#06B6D4">⬡</FloatingDoodle>
        <FloatingDoodle top="45%" left="92%" size={18} delay={1.5} color="#10B981">◈</FloatingDoodle>
        <FloatingDoodle top="15%" left="45%" size={14} delay={3} color="#8B5CF6">✦</FloatingDoodle>

        <div className="illus-hero-grid">
          {/* Left: Copy */}
          <div>
            <Reveal delay={0}>
              <div className="illus-hero-badge">
                <span className="illus-hero-badge-dot" />
                Premium Illustration Studio
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="illus-hero-h1">
                Art That Makes<br />
                <span>Readers Stay</span><br />
                on Every Page
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="illus-hero-desc">
                From whimsical children's picture books to epic fantasy covers, Penova's illustrators craft visuals that do more than decorate stories. They become them.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="illus-hero-ctas">
                <Link to="/signup" className="illus-btn-primary">
                  Start Your Project <ArrowRight size={18} />
                </Link>
                <a href="#showcase" className="illus-btn-secondary">
                  See Our Work
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <HeroReviewRatings className="mt-8" onLight />
            </Reveal>
          </div>

          {/* Right: Form */}
          <Reveal delay={100}>
            <IllustrationForm />
          </Reveal>
        </div>
      </section>

      {/* ─── Style Ticker ───────────────────────────── */}
      <div className="illus-ticker" aria-hidden="true">
        <div className="illus-ticker-inner">
          {tickerItems.map((item, i) => (
            <span key={i} className="illus-ticker-item">
              <span className="illus-ticker-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ─── Stats Bar ──────────────────────────────── */}
      <section className="illus-stats-section" ref={statsRef}>
        {/* Decorative star shapes */}
        <FloatingDoodle top="20%" left="3%" size={18} delay={0} color="#c4b5fd">✦</FloatingDoodle>
        <FloatingDoodle top="60%" left="95%" size={16} delay={2} color="#f9a8d4">★</FloatingDoodle>

        <div className="illus-stats-grid illus-section-inner">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} visible={statsVisible} />
          ))}
        </div>
      </section>

      {/* ─── Illustration Styles ─────────────────────── */}
      <section className="illus-services-section" id="services">
        <div
          className="illus-blob"
          style={{ width: 350, height: 350, top: "10%", right: "-80px", background: "radial-gradient(circle, #ede9fe40, transparent 70%)", opacity: 0.6 }}
        />

        <div className="illus-section-inner">
          <Reveal>
            <p className="illus-section-eyebrow">Our Services</p>
            <h2 className="illus-section-title">Every Style.<br />Every Story.</h2>
            <div className="illus-section-rule" />
            <p className="illus-section-intro" style={{ marginTop: 20 }}>
              We don't have one signature style. We have yours. Whatever visual language your story speaks, we speak it fluently.
            </p>
          </Reveal>

          <div className="illus-styles-grid">
            {ILLUSTRATION_STYLES.map((s, i) => (
              <StyleCard key={s.name} s={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Showcase ───────────────────────────────── */}
      <section className="illus-showcase-section" id="showcase">
        <div
          className="illus-blob"
          style={{ width: 400, height: 400, bottom: "5%", left: "-100px", background: "radial-gradient(circle, #f3e8ff50, transparent 70%)", opacity: 0.7 }}
        />

        <div className="illus-section-inner">
          <Reveal>
            <p className="illus-section-eyebrow">Featured Projects</p>
            <h2 className="illus-section-title">Illustrated<br />Worlds</h2>
            <div className="illus-section-rule" />
            <p className="illus-section-intro" style={{ marginTop: 20 }}>
              A selection of books we've brought to life, each one a unique visual world built from scratch around the story it tells.
            </p>
          </Reveal>

          <div className="illus-showcase-grid">
            {SHOWCASE_PROJECTS.map((p, i) => (
              <ShowcaseCard key={p.title} p={p} index={i} />
            ))}
          </div>

          {/* Book covers image showcase */}
          <Reveal delay={200}>
            <div style={{ marginTop: 60, borderRadius: 24, overflow: "hidden", boxShadow: "0 24px 72px rgba(0,0,0,0.14)" }}>
              <img
                src={bookCoversImg}
                alt="Sample illustrated book covers for children's books, fantasy novels and graphic novels"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Process ────────────────────────────────── */}
      <section className="illus-process-section" id="process">
        <div className="illus-section-inner">
          <Reveal>
            <p className="illus-section-eyebrow">How It Works</p>
            <h2 className="illus-section-title">Concept to Canvas<br />in Four Steps</h2>
            <div className="illus-section-rule" />
          </Reveal>

          <div className="illus-process-split">
            <Reveal delay={100}>
              <img
                src={processImg}
                alt="Illustration process showing a sketchbook with character development stages"
                className="illus-process-img"
              />
            </Reveal>
            <div className="illus-process-steps-list">
              {PROCESS_STEPS.map((step, i) => (
                <ProcessStep key={step.num} step={step} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Penova ─────────────────────────────── */}
      <section className="illus-why-section">
        {/* Decorative blobs */}
        <div
          className="illus-blob"
          style={{ width: 500, height: 500, top: "-100px", right: "-150px", background: "radial-gradient(circle, #7c3aed20, transparent 70%)" }}
        />
        <div
          className="illus-blob"
          style={{ width: 300, height: 300, bottom: "-60px", left: "-80px", background: "radial-gradient(circle, #be185d20, transparent 70%)", animationDelay: "6s" }}
        />

        {/* Floating doodles */}
        <FloatingDoodle top="10%" left="2%" size={22} delay={0} color="#c4b5fd">★</FloatingDoodle>
        <FloatingDoodle top="75%" left="95%" size={18} delay={2} color="#f9a8d4">✦</FloatingDoodle>

        <div className="illus-section-inner">
          <Reveal>
            <p className="illus-section-eyebrow" style={{ color: "#c4b5fd" }}>Why Penova</p>
            <h2 className="illus-section-title" style={{ color: "#fff" }}>
              Illustration Is<br />Storytelling
            </h2>
            <div className="illus-section-rule" style={{ background: "linear-gradient(to right, #c4b5fd, #f9a8d4)" }} />
            <p className="illus-section-intro" style={{ color: "rgba(255,255,255,0.65)", marginTop: 20, maxWidth: 520 }}>
              Every sketch, every colour choice, every composition serves your narrative and your readers. That's the Penova difference.
            </p>
          </Reveal>

          <div className="illus-why-grid">
            {WHY_ITEMS.map((item, i) => (
              <WhyCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ───────────────────────────── */}
      <section className="illus-testimonials-section">
        <div className="illus-section-inner">
          <Reveal>
            <p className="illus-section-eyebrow">Author Stories</p>
            <h2 className="illus-section-title">What Authors Say</h2>
            <div className="illus-section-rule" />
          </Reveal>

          <div className="illus-testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={t.name} t={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ────────────────────────────────────── */}
      <section className="illus-faq-section">
        <div className="illus-section-inner" style={{ maxWidth: 760 }}>
          <Reveal>
            <p className="illus-section-eyebrow" style={{ textAlign: "center" }}>Questions</p>
            <h2 className="illus-section-title" style={{ textAlign: "center", margin: "0 auto" }}>
              Illustration FAQs
            </h2>
            <div className="illus-section-rule" style={{ margin: "20px auto 0" }} />
          </Reveal>
          <div style={{ marginTop: 52 }}>
            <FaqAccordion
              items={ILLUSTRATION_FAQS.map((f) => ({ q: f.q, a: f.a }))}
            />
          </div>
        </div>
      </section>

      {/* ─── Final CTA ──────────────────────────────── */}
      <section className="illus-final-cta">
        {/* Floating doodles */}
        <FloatingDoodle top="12%" left="5%" size={36} delay={0} color="#fff">✦</FloatingDoodle>
        <FloatingDoodle top="70%" left="90%" size={28} delay={1.5} color="#fff">★</FloatingDoodle>
        <FloatingDoodle top="30%" left="92%" size={22} delay={0.8} color="#fff">◉</FloatingDoodle>
        <FloatingDoodle top="80%" left="4%" size={20} delay={2} color="#fff">◈</FloatingDoodle>

        <div style={{ position: "relative", zIndex: 2 }}>
          <Reveal>
            <h2 className="illus-final-cta-title">
              Let's Illustrate<br />Your Story
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="illus-final-cta-desc">
              Share your manuscript and vision with us. We'll review it and send back a tailored proposal with exactly what your book needs.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="illus-final-cta-btns">
              <Link to="/signup" className="illus-cta-white">
                Start Your Illustration Project <ArrowRight size={18} />
              </Link>
              <a href="tel:+1234567890" className="illus-cta-outline">
                Call Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Standard CTA Banner ────────────────────── */}
      <CtaBanner />
    </SiteLayout>
  );
}
