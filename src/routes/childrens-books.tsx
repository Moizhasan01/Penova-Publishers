import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Star,
  Sparkles,
  Heart,
  Palette,
  Pen,
  Globe,
  Printer,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { HeroReviewRatings } from "@/components/sections";
import { ChildrensBooksForm } from "@/components/forms/childrens-books-form";
import heroIllustration from "@/assets/childrens-spread.jpg";

/* ─── SEO ─────────────────────────────────────────────── */
const TITLE = "Children's Books | Penova Publishers";
const DESC =
  "From the first word to the final printed page, Penova Publishers crafts children's books that kids remember forever. Full-service writing, illustration, design, and publishing.";

export const Route = createFileRoute("/childrens-books")({
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
      (entries) => { if (entries[0].isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Data ────────────────────────────────────────────── */
const BOOK_TYPES = [
  { label: "Board Books", icon: "📚", color: "#FF6B6B", desc: "Sturdy pages for tiny hands" },
  { label: "Picture Books", icon: "🎨", color: "#4ECDC4", desc: "Art-first storytelling" },
  { label: "Early Readers", icon: "🐣", color: "#FFB347", desc: "Ages 4 to 7 adventure" },
  { label: "Chapter Books", icon: "🌟", color: "#A8E6CF", desc: "Young chapter readers" },
  { label: "Educational", icon: "🔬", color: "#C7CEEA", desc: "Learn & grow" },
  { label: "Bilingual", icon: "🌍", color: "#FFDAC1", desc: "Two languages, one story" },
];

const ART_STYLES = [
  { name: "Watercolor", emoji: "🎨", bg: "#E8F5E9", accent: "#66BB6A" },
  { name: "Bold Cartoon", emoji: "✏️", bg: "#FFF3E0", accent: "#FFA726" },
  { name: "Soft Pastel", emoji: "🌸", bg: "#FCE4EC", accent: "#F48FB1" },
  { name: "Cut Paper", emoji: "✂️", bg: "#E3F2FD", accent: "#42A5F5" },
  { name: "Pencil & Wash", emoji: "🖊️", bg: "#F3E5F5", accent: "#AB47BC" },
  { name: "Painterly", emoji: "🖌️", bg: "#E0F7FA", accent: "#26C6DA" },
  { name: "Whimsical Folk", emoji: "🦊", bg: "#FFF8E1", accent: "#FFCA28" },
  { name: "Storybook Classic", emoji: "📖", bg: "#EFEBE9", accent: "#8D6E63" },
];

const PROCESS_STEPS = [
  {
    num: "01", icon: "💬", color: "#FF6B6B",
    title: "Story Consultation",
    body: "Tell us your idea, your characters, your world. We listen and map a plan that turns your vision into a real book.",
  },
  {
    num: "02", icon: "✍️", color: "#4ECDC4",
    title: "Write & Develop",
    body: "Your manuscript crafted by children's book specialists, with every word chosen for the right reader age and read-aloud rhythm.",
  },
  {
    num: "03", icon: "🎨", color: "#FFB347",
    title: "Illustrate & Design",
    body: "One dedicated illustrator from cover to back endpaper. Character sheets locked. Color scripts planned. Every spread consistent and magical.",
  },
  {
    num: "04", icon: "🖨️", color: "#A8E6CF",
    title: "Print & Publish",
    body: "ISBN registration, print-ready files, and distribution to Amazon, IngramSpark, and bookshops worldwide. Your rights. Your royalties.",
  },
  {
    num: "05", icon: "🚀", color: "#C7CEEA",
    title: "Launch & Market",
    body: "Campaigns reaching parents, teachers, and librarians. Book trailers, school outreach, and social content all handled.",
  },
];

const WHY_ITEMS = [
  {
    icon: Palette, color: "#FF6B6B", bg: "#FFF0F0",
    title: "Art That Kids Ask to See Again",
    body: "Children return to the spread, not the sentence. The artwork is the memory, and we make sure yours sticks.",
  },
  {
    icon: Pen, color: "#4ECDC4", bg: "#F0FFFE",
    title: "Words Built for Read-Aloud",
    body: "Every sentence tested for rhythm, pace, and that magical quality that makes parents happy to read it a tenth time.",
  },
  {
    icon: Globe, color: "#FFB347", bg: "#FFFBF0",
    title: "Distributed Everywhere",
    body: "Amazon, bookshops, school catalogues and libraries. Your book lives wherever parents and teachers look.",
  },
  {
    icon: Printer, color: "#A8E6CF", bg: "#F0FFF4",
    title: "Print That Feels Premium",
    body: "Board book, hardcover or paperback. We specify the right stock, binding and finish for each format.",
  },
];

const FAQS = [
  {
    q: "Do I need to have a finished manuscript?",
    a: "Not at all. Many of our authors come with just an idea. We offer full ghostwriting and development services, or we can work with your existing draft.",
  },
  {
    q: "How long does a children's book take to produce?",
    a: "A typical picture book takes 3 to 5 months from first consultation to print-ready files. Board books and chapter books vary based on length and illustration scope.",
  },
  {
    q: "Who owns the illustrations and rights?",
    a: "You do, completely. Every illustration, file and ISBN is registered in your name. Penova is a services partner, never a rights-acquiring publisher.",
  },
  {
    q: "Can I choose the art style?",
    a: "Absolutely. We match you with an illustrator whose natural style fits your story and age group. You see character sketches before any spread is painted.",
  },
  {
    q: "What does children's book publishing cost?",
    a: "Packages start at $3,500 for assisted publishing and $6,500+ for full-service. We provide a fixed quote after understanding your manuscript, page count, and illustration scope.",
  },
];

const STATS = [
  { value: "340+", label: "Children's Books", emoji: "📚" },
  { value: "4.9★", label: "Author Rating", emoji: "⭐" },
  { value: "22+", label: "Art Styles", emoji: "🎨" },
  { value: "18 yrs", label: "Experience", emoji: "🏆" },
];

/* ─── FloatingShape ───────────────────────────────────── */
function FloatingShape({
  size, color, top, left, delay, shape = "circle",
}: {
  size: number; color: string; top: string; left: string; delay: number; shape?: "circle" | "star" | "heart";
}) {
  const paths: Record<string, string> = {
    star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    heart: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
    circle: "",
  };

  const style: React.CSSProperties = {
    position: "absolute",
    top, left,
    width: size, height: size,
    opacity: 0.2,
    animation: `kids-float ${3 + delay * 0.4}s ease-in-out infinite`,
    animationDelay: `${delay * 0.5}s`,
    pointerEvents: "none",
    zIndex: 0,
  };

  if (shape === "circle") {
    return <div style={{ ...style, borderRadius: "50%", background: color }} />;
  }
  return (
    <svg style={style} viewBox="0 0 24 24" fill={color}>
      <path d={paths[shape]} />
    </svg>
  );
}

/* ─── WhyCard ─────────────────────────────────────────── */
function WhyCard({ item, index }: { item: typeof WHY_ITEMS[0]; index: number }) {
  const { ref, visible } = useReveal();
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)",
        transitionDelay: `${index * 80}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? (hovered ? "translateY(-8px)" : "translateY(0)") : "translateY(24px)",
        background: hovered ? item.bg : "white",
        borderRadius: 20,
        padding: "32px 28px",
        border: `2px solid ${hovered ? item.color : "#f0f0f0"}`,
        boxShadow: hovered ? `0 20px 50px ${item.color}25` : "0 4px 16px rgba(0,0,0,0.05)",
        cursor: "pointer",
      }}
    >
      <span style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: 52, height: 52, borderRadius: 16,
        background: item.color, marginBottom: 18,
        transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
        transform: hovered ? "scale(1.15) rotate(-8deg)" : "scale(1)",
        boxShadow: `0 8px 20px ${item.color}50`,
      }}>
        <Icon style={{ width: 26, height: 26, color: "white" }} />
      </span>
      <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, fontWeight: 700, color: "#1a1a2e", marginBottom: 10, lineHeight: 1.2 }}>
        {item.title}
      </h3>
      <p style={{ fontSize: 15, lineHeight: 1.65, color: "#666" }}>{item.body}</p>
    </div>
  );
}

/* ─── ProcessStep ─────────────────────────────────────── */
function ProcessStep({ step, index }: { step: typeof PROCESS_STEPS[0]; index: number }) {
  const { ref, visible } = useReveal();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transition: "all 0.6s cubic-bezier(0.22,1,0.36,1)",
        transitionDelay: `${index * 100}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? (hovered ? "translateY(-8px)" : "translateY(0)") : "translateY(30px)",
        background: "white",
        borderRadius: 24, padding: "32px 24px",
        border: `3px solid ${hovered ? step.color : "#eee"}`,
        boxShadow: hovered ? `0 20px 50px ${step.color}25` : "0 4px 20px rgba(0,0,0,0.06)",
        height: "100%",
      }}
    >
      <div style={{
        width: 48, height: 48, borderRadius: "50%",
        background: step.color,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: 18, fontWeight: 700, color: "white",
        marginBottom: 16,
        boxShadow: `0 8px 20px ${step.color}50`,
        transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
        transform: hovered ? "scale(1.15) rotate(-5deg)" : "scale(1)",
      }}>
        {step.num}
      </div>
      <div style={{ fontSize: 32, marginBottom: 12, transition: "transform 0.3s", transform: hovered ? "scale(1.2)" : "scale(1)" }}>
        {step.icon}
      </div>
      <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 20, fontWeight: 700, color: "#1a1a2e", marginBottom: 10 }}>
        {step.title}
      </h3>
      <p style={{ fontSize: 14, lineHeight: 1.65, color: "#666" }}>{step.body}</p>
    </div>
  );
}

/* ─── ArtStyleCard ────────────────────────────────────── */
function ArtStyleCard({ item, index }: { item: typeof ART_STYLES[0]; index: number }) {
  const { ref, visible } = useReveal();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)",
        transitionDelay: `${index * 55}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? (hovered ? "translateY(-8px) scale(1.03)" : "translateY(0)") : "translateY(24px)",
        background: item.bg,
        borderRadius: 20,
        border: `3px solid ${hovered ? item.accent : "transparent"}`,
        padding: "24px 16px",
        textAlign: "center",
        boxShadow: hovered ? `0 20px 40px ${item.accent}30` : "0 4px 12px rgba(0,0,0,0.06)",
        cursor: "pointer",
      }}
    >
      <div style={{ fontSize: 36, marginBottom: 10, transition: "transform 0.3s", transform: hovered ? "scale(1.3) rotate(-5deg)" : "scale(1)" }}>
        {item.emoji}
      </div>
      <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", color: item.accent }}>
        {item.name}
      </p>
    </div>
  );
}

/* ─── FaqItem ─────────────────────────────────────────── */
function FaqItem({ item, index }: { item: typeof FAQS[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const { ref, visible } = useReveal();
  const colors = ["#FF6B6B", "#4ECDC4", "#FFB347", "#A8E6CF", "#C7CEEA"];
  const c = colors[index % colors.length];
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        transitionDelay: `${index * 80}ms`,
        borderRadius: 16,
        border: `2px solid ${open ? c : "#f0f0f0"}`,
        background: open ? `${c}10` : "white",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "20px 24px", background: "none", border: "none", cursor: "pointer",
          textAlign: "left", gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{
            width: 32, height: 32, borderRadius: "50%", background: c, flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, fontWeight: 800, color: "white",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
          }}>
            {index + 1}
          </span>
          <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 18, fontWeight: 700, color: "#1a1a2e", lineHeight: 1.3 }}>
            {item.q}
          </span>
        </div>
        <ChevronDown style={{ width: 20, height: 20, color: c, flexShrink: 0, transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }} />
      </button>
      {open && (
        <div style={{ padding: "0 24px 20px 70px", fontSize: 15, lineHeight: 1.7, color: "#555" }}>
          {item.a}
        </div>
      )}
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────── */
function Page() {
  return (
    <SiteLayout>
      <style>{`
        @keyframes kids-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33%       { transform: translateY(-14px) rotate(4deg); }
          66%       { transform: translateY(-6px) rotate(-3deg); }
        }
        @keyframes kids-spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes kids-bounce-in {
          0%   { opacity: 0; transform: scale(0.5) translateY(30px); }
          60%  { transform: scale(1.08) translateY(-4px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes kids-wiggle {
          0%, 100% { transform: rotate(-2deg); }
          50%       { transform: rotate(2deg); }
        }
        @keyframes marquee-kids {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .kids-marquee { animation: marquee-kids 32s linear infinite; }
        .kids-marquee:hover { animation-play-state: paused; }
      `}</style>

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section style={{
        position: "relative", overflow: "hidden",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 55%, #0f3460 100%)",
        minHeight: "88vh", display: "flex", alignItems: "center",
      }}>
        {/* Ambient blobs */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, #FF6B6B22 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", bottom: "-15%", left: "-8%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, #4ECDC422 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", top: "30%", left: "40%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, #FFE66D15 0%, transparent 70%)" }} />
        </div>

        {/* Floating shapes */}
        <FloatingShape size={55} color="#FF6B6B" top="10%" left="5%" delay={0} shape="star" />
        <FloatingShape size={40} color="#4ECDC4" top="20%" left="85%" delay={1} shape="circle" />
        <FloatingShape size={50} color="#FFE66D" top="75%" left="8%" delay={2} shape="heart" />
        <FloatingShape size={35} color="#A8E6CF" top="60%" left="88%" delay={3} shape="star" />
        <FloatingShape size={50} color="#C7CEEA" top="85%" left="50%" delay={4} shape="circle" />
        <FloatingShape size={38} color="#FFDAC1" top="5%" left="55%" delay={5} shape="heart" />
        <FloatingShape size={30} color="#FF6B6B" top="40%" left="92%" delay={6} shape="star" />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: "80px 32px", width: "100%", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 64, alignItems: "center" }}>

          {/* Left */}
          <div>
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(8px)", borderRadius: 999, padding: "8px 20px",
              animation: "kids-bounce-in 0.7s cubic-bezier(0.34,1.56,0.64,1) both",
              marginBottom: 28,
            }}>
              <Sparkles style={{ width: 14, height: 14, color: "#FFE66D" }} />
              <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FFE66D" }}>
                Full-service children's publishing
              </span>
            </div>

            {/* H1 */}
            <h1 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(3rem, 6vw, 5.5rem)", fontWeight: 700,
              lineHeight: 1.05, color: "white", marginBottom: 28,
              animation: "kids-bounce-in 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.15s both",
            }}>
              Books kids{" "}
              <span style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #FF6B6B, #FFB347, #FFE66D)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                animation: "kids-wiggle 3s ease-in-out infinite",
              }}>
                remember
              </span>{" "}
              <span style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #4ECDC4, #A8E6CF)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                forever.
              </span>
            </h1>

            {/* Rainbow rule */}
            <div style={{ height: 4, width: 80, borderRadius: 99, background: "linear-gradient(90deg, #FF6B6B, #FFE66D, #4ECDC4)", marginBottom: 28, animation: "kids-bounce-in 0.7s 0.3s both" }} />

            {/* Body */}
            <p style={{
              fontFamily: "'Manrope', sans-serif", fontSize: 18, lineHeight: 1.7,
              color: "rgba(255,255,255,0.78)", maxWidth: 520, marginBottom: 40,
              animation: "kids-bounce-in 0.7s 0.45s both",
            }}>
              From the first word to the final printed page, Penova Publishers handles writing, illustration, design, publishing, and marketing.{" "}
              <strong style={{ color: "white" }}>One studio. Every stage. Nothing left to chance.</strong>
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, animation: "kids-bounce-in 0.7s 0.6s both" }}>
              <Link
                to="/signup"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  background: "linear-gradient(135deg, #FF6B6B, #FFB347)",
                  color: "white", padding: "16px 32px", borderRadius: 999,
                  fontFamily: "'Manrope', sans-serif", fontSize: 14, fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 12px 35px rgba(255,107,107,0.45)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; }}
              >
                <BookOpen style={{ width: 18, height: 18 }} />
                Start My Children's Book
                <ArrowRight style={{ width: 16, height: 16 }} />
              </Link>
              <Link
                to="/signup"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  background: "rgba(255,255,255,0.1)", border: "2px solid rgba(255,255,255,0.3)",
                  backdropFilter: "blur(8px)", color: "white",
                  padding: "16px 32px", borderRadius: 999,
                  fontFamily: "'Manrope', sans-serif", fontSize: 14, fontWeight: 700,
                  textDecoration: "none", transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#4ECDC4"; el.style.color = "#4ECDC4"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.3)"; el.style.color = "white"; }}
              >
                See Our Services
              </Link>
            </div>
            <HeroReviewRatings className="mt-8" />

            {/* Mini stats */}
            <div style={{ display: "flex", gap: 28, marginTop: 44, flexWrap: "wrap", animation: "kids-bounce-in 0.7s 0.75s both" }}>
              {[["340+", "Books Published"], ["4.9★", "Author Rating"], ["18 yrs", "Experience"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 26, fontWeight: 700, color: "#FFE66D", lineHeight: 1 }}>{val}</p>
                  <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "0.12em", marginTop: 4 }}>{lbl}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side form */}
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", animation: "kids-bounce-in 1s cubic-bezier(0.34,1.56,0.64,1) 0.25s both" }}
            className="hidden lg:flex">
            <ChildrensBooksForm />
          </div>
          {[
            { emoji: "✨", size: 40, delay: 0, top: "10%", left: "5%" },
            { emoji: "🐰", size: 60, delay: 1, top: "20%", right: "10%" },
            { emoji: "🚀", size: 50, delay: 2, bottom: "15%", left: "15%" },
            { emoji: "🌟", size: 45, delay: 3, bottom: "10%", right: "20%" }
            ].map(({ emoji, size, delay, ...pos }) => (
              <div key={emoji} style={{
                position: "absolute", ...(pos as React.CSSProperties),
                width: size, height: size, borderRadius: "50%",
                background: "white", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: size * 0.5,
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                animation: `kids-float ${3 + delay * 0.5}s ease-in-out infinite`,
                animationDelay: `${delay * 0.6}s`,
              }}>{emoji}</div>
            ))}
          </div>

        {/* Wave bottom */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 80 }}>
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FFF9F4" />
          </svg>
        </div>
      </section>

      {/* ══ MARQUEE STATS ═══════════════════════════════════════ */}
      <section style={{ background: "#FFF9F4", padding: "24px 0", overflow: "hidden", borderBottom: "2px solid #f0e8e0" }}>
        <div className="kids-marquee" style={{ display: "flex", width: "max-content" }}>
          {[...STATS, ...STATS, ...STATS].map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 32, paddingRight: 64, flexShrink: 0 }}>
              <span style={{ fontSize: 22 }}>{s.emoji}</span>
              <div>
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, fontWeight: 700, color: "#1a1a2e" }}>{s.value} </span>
                <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 12, color: "#888", textTransform: "uppercase", letterSpacing: "0.12em" }}>{s.label}</span>
              </div>
              <span style={{ color: "#e0d4c8", fontSize: 20 }}>✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══ BOOK TYPES ══════════════════════════════════════════ */}
      <section style={{ background: "#FFF9F4", padding: "96px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#FF6B6B18", border: "2px solid #FF6B6B30", borderRadius: 999, padding: "6px 18px", marginBottom: 20 }}>
              <span style={{ fontSize: 16 }}>📖</span>
              <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#FF6B6B" }}>What we make</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 700, color: "#1a1a2e", lineHeight: 1.1, marginBottom: 16 }}>
              Every kind of book{" "}
              <span style={{ display: "inline-block", background: "linear-gradient(135deg, #FF6B6B, #FFB347)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                a child loves.
              </span>
            </h2>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 17, color: "#888", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
              From board books for tiny hands to chapter books for growing readers, we craft every format with care.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 20 }}>
            {BOOK_TYPES.map((item) => (
              <div
                key={item.label}
                style={{ borderRadius: 24, border: `3px solid ${item.color}40`, background: `${item.color}12`, padding: "28px 20px", textAlign: "center", cursor: "pointer", transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-10px) rotate(-2deg) scale(1.04)"; el.style.borderColor = item.color; el.style.boxShadow = `0 20px 40px ${item.color}30`; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = ""; el.style.borderColor = `${item.color}40`; el.style.boxShadow = ""; }}
              >
                <div style={{ width: 60, height: 60, borderRadius: "50%", background: item.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, margin: "0 auto 14px", boxShadow: `0 8px 20px ${item.color}40` }}>
                  {item.icon}
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 17, fontWeight: 700, color: "#1a1a2e", marginBottom: 6 }}>{item.label}</h3>
                <p style={{ fontSize: 12, color: "#888", lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY US ══════════════════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(160deg, #e8f8f5 0%, #fff3e8 50%, #fce4f4 100%)", padding: "96px 32px" }}>
        <FloatingShape size={100} color="#FF6B6B" top="-5%" left="-3%" delay={0} shape="circle" />
        <FloatingShape size={80} color="#4ECDC4" top="70%" left="92%" delay={2} shape="circle" />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#4ECDC418", border: "2px solid #4ECDC430", borderRadius: 999, padding: "6px 18px", marginBottom: 20 }}>
              <span style={{ fontSize: 16 }}>💡</span>
              <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#4ECDC4" }}>Why choose Penova</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 700, color: "#1a1a2e", lineHeight: 1.1, marginBottom: 16 }}>
              Publishing that puts the{" "}
              <span style={{ display: "inline-block", background: "linear-gradient(135deg, #4ECDC4, #A8E6CF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                story first.
              </span>
            </h2>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 17, color: "#888", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
              We don't just print pages. We build worlds that children want to visit again and again.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {WHY_ITEMS.map((item, i) => (
              <WhyCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ ART STYLES ══════════════════════════════════════════ */}
      <section style={{ background: "#FFF9F4", padding: "96px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#C7CEEA30", border: "2px solid #C7CEEA60", borderRadius: 999, padding: "6px 18px", marginBottom: 20 }}>
              <span style={{ fontSize: 16 }}>🖌️</span>
              <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8a90c8" }}>Art styles</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 700, color: "#1a1a2e", lineHeight: 1.1, marginBottom: 16 }}>
              The styles we{" "}
              <span style={{ display: "inline-block", background: "linear-gradient(135deg, #C7CEEA, #8a90c8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                paint in.
              </span>
            </h2>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 17, color: "#888", maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>
              Watercolor, bold cartoon, pastel, cut paper and more, with every style matched to the story and its readers.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: 16 }}>
            {ART_STYLES.map((item, i) => <ArtStyleCard key={item.name} item={item} index={i} />)}
          </div>
          <p style={{ textAlign: "center", marginTop: 36, fontFamily: "'Manrope', sans-serif", fontSize: 13, color: "#aaa", fontStyle: "italic" }}>
            + 14 more styles available on request
          </p>
        </div>
      </section>

      {/* ══ PROCESS ═════════════════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)", padding: "96px 32px" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <FloatingShape size={70} color="#FF6B6B" top="10%" left="2%" delay={1} shape="star" />
        <FloatingShape size={55} color="#4ECDC4" top="80%" left="92%" delay={3} shape="circle" />
        <FloatingShape size={45} color="#FFE66D" top="55%" left="1%" delay={5} shape="heart" />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,230,109,0.15)", border: "2px solid rgba(255,230,109,0.3)", borderRadius: 999, padding: "6px 18px", marginBottom: 20 }}>
              <span style={{ fontSize: 16 }}>🚀</span>
              <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#FFE66D" }}>How it works</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 700, color: "white", lineHeight: 1.1, marginBottom: 16 }}>
              From idea to{" "}
              <span style={{ display: "inline-block", background: "linear-gradient(135deg, #FF6B6B, #FFB347, #FFE66D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                printed book.
              </span>
            </h2>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.65)", maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>
              Five clear stages. Nothing rushed. Nothing finalised without your sign-off.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 20 }}>
            {PROCESS_STEPS.map((step, i) => <ProcessStep key={step.num} step={step} index={i} />)}
          </div>
        </div>
      </section>

      {/* ══ GUARANTEE ═══════════════════════════════════════════ */}
      <section style={{ background: "linear-gradient(160deg, #fce4f4 0%, #e8f8f5 100%)", padding: "96px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
          className="grid-cols-1 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#A8E6CF30", border: "2px solid #A8E6CF60", borderRadius: 999, padding: "6px 18px", marginBottom: 24 }}>
              <span style={{ fontSize: 16 }}>✅</span>
              <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5daa8a" }}>Our promise</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, color: "#1a1a2e", lineHeight: 1.1, marginBottom: 24 }}>
              One illustrator.{" "}
              <span style={{ display: "inline-block", background: "linear-gradient(135deg, #A8E6CF, #4ECDC4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                One consistent book.
              </span>
            </h2>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 16, color: "#666", lineHeight: 1.7, marginBottom: 36 }}>
              Children's books fail the moment two artists stitch a book together. Every project belongs to one illustrator, from cover to back endpaper.
            </p>
            {[
              "One illustrator from cover to back endpaper",
              "Locked character sheet before any spread is painted",
              "Color script that holds across the whole book",
              "Print-ready files reviewed at every stage",
              "Author sign-off at every milestone",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 16 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#A8E6CF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                  <CheckCircle2 style={{ width: 16, height: 16, color: "#2d8060" }} />
                </div>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 15, color: "#444", lineHeight: 1.5 }}>{item}</p>
              </div>
            ))}
            <Link
              to="/signup"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10, marginTop: 12,
                background: "linear-gradient(135deg, #4ECDC4, #A8E6CF)",
                color: "white", padding: "14px 28px", borderRadius: 999,
                fontFamily: "'Manrope', sans-serif", fontSize: 14, fontWeight: 700,
                textDecoration: "none", boxShadow: "0 12px 30px rgba(78,205,196,0.35)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; }}
            >
              Start My Book <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
          </div>

          {/* Right side orbiting planets */}
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "relative", width: 340, height: 340 }}>
              <div style={{
                position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                width: 200, height: 200, borderRadius: "50%",
                background: "linear-gradient(135deg, #A8E6CF, #4ECDC4)",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                boxShadow: "0 20px 60px rgba(78,205,196,0.3)",
              }}>
                <span style={{ fontSize: 56 }}>📚</span>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 14, fontWeight: 700, color: "white", marginTop: 4 }}>Your Story</p>
              </div>
              {[
                { emoji: "🎨", color: "#FF6B6B", angle: 0 },
                { emoji: "✨", color: "#FFE66D", angle: 72 },
                { emoji: "🐰", color: "#C7CEEA", angle: 144 },
                { emoji: "🌟", color: "#FFDAC1", angle: 216 },
                { emoji: "🦋", color: "#A8E6CF", angle: 288 },
              ].map(({ emoji, color, angle }) => {
                const rad = (angle * Math.PI) / 180;
                const r = 150;
                const x = 170 + r * Math.cos(rad) - 26;
                const y = 170 + r * Math.sin(rad) - 26;
                return (
                  <div key={emoji} style={{
                    position: "absolute", left: x, top: y,
                    width: 52, height: 52, borderRadius: "50%",
                    background: color, display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 22, boxShadow: `0 8px 20px ${color}60`,
                    animation: `kids-float ${2.5 + angle * 0.01}s ease-in-out infinite`,
                    animationDelay: `${angle * 0.008}s`,
                  }}>{emoji}</div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ═════════════════════════════════════════════════ */}
      <section style={{ background: "#FFF9F4", padding: "96px 32px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#FFE66D20", border: "2px solid #FFE66D40", borderRadius: 999, padding: "6px 18px", marginBottom: 20 }}>
              <span style={{ fontSize: 16 }}>❓</span>
              <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9920a" }}>Got questions?</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#1a1a2e", lineHeight: 1.1, marginBottom: 12 }}>
              Everything you need to know.
            </h2>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 16, color: "#888", lineHeight: 1.7 }}>
              Simple answers to the questions every author asks first.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {FAQS.map((item, i) => <FaqItem key={item.q} item={item} index={i} />)}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══════════════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 60%, #1a1a2e 100%)", padding: "96px 32px" }}>
        <div style={{ position: "absolute", top: "-30%", right: "-10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, #FF6B6B18 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-30%", left: "-10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, #4ECDC418 0%, transparent 70%)", pointerEvents: "none" }} />
        <FloatingShape size={55} color="#FFE66D" top="15%" left="10%" delay={0} shape="star" />
        <FloatingShape size={40} color="#4ECDC4" top="70%" left="85%" delay={2} shape="heart" />
        <FloatingShape size={45} color="#FF6B6B" top="80%" left="15%" delay={4} shape="circle" />

        <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: 72, marginBottom: 24, animation: "kids-float 3s ease-in-out infinite" }}>📚</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 700, color: "white", lineHeight: 1.08, marginBottom: 20 }}>
            The book a child asks for{" "}
            <span style={{ display: "inline-block", background: "linear-gradient(135deg, #FF6B6B, #FFB347, #FFE66D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              again tomorrow.
            </span>
          </h2>
          <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.72)", maxWidth: 540, margin: "0 auto 44px", lineHeight: 1.7 }}>
            Built page by page. Painted with care. Tell us your story and we'll build the book your child will never want to stop reading.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              to="/signup"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "linear-gradient(135deg, #FF6B6B, #FFB347)",
                color: "white", padding: "18px 40px", borderRadius: 999,
                fontFamily: "'Manrope', sans-serif", fontSize: 15, fontWeight: 700,
                textDecoration: "none", boxShadow: "0 12px 40px rgba(255,107,107,0.5)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px) scale(1.02)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; }}
            >
              <Star style={{ width: 18, height: 18 }} />
              Start My Children's Book
              <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
            <Link
              to="/signup"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "rgba(255,255,255,0.1)", border: "2px solid rgba(255,255,255,0.25)",
                backdropFilter: "blur(8px)", color: "white",
                padding: "18px 36px", borderRadius: 999,
                fontFamily: "'Manrope', sans-serif", fontSize: 15, fontWeight: 700,
                textDecoration: "none", transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#4ECDC4"; el.style.color = "#4ECDC4"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.25)"; el.style.color = "white"; }}
            >
              <Heart style={{ width: 16, height: 16 }} />
              Book a Free Consultation
            </Link>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 36, marginTop: 52, flexWrap: "wrap" }}>
            {["340+ Books Published", "Author keeps all rights", "Fixed price, no surprises"].map((t) => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <CheckCircle2 style={{ width: 16, height: 16, color: "#A8E6CF" }} />
                <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.65)" }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
