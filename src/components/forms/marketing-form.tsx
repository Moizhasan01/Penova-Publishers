import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

// Light form surface for clear contrast against the navy hero
export function MarketingForm() {
  const [hoveredField, setHoveredField] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-[560px] mx-auto">
      {/* Gold ambient glow */}
      <div
        className="absolute -inset-2 rounded-3xl blur-2xl opacity-20"
        style={{ background: "radial-gradient(ellipse, rgba(212,175,55,0.55), transparent 70%)" }}
      />

      <div className="relative rounded-3xl border border-navy-deep/10 bg-white p-7 shadow-[0_24px_60px_rgba(0,0,0,0.2)] xl:p-8">
        {/* Trending arrow */}
        <div className="absolute top-7 right-7 text-xl font-bold text-gold/20 select-none">↗</div>

        {/* Header */}
        <div className="mb-6 border-b border-navy-deep/10 pb-5">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-brown">
            Book Marketing
          </p>
          <h2 className="mt-1.5 font-serif text-2xl leading-snug text-navy-deep">
            Reach the right readers.
          </h2>
          <p className="mt-2 text-sm font-light leading-relaxed text-navy-deep/60">
            Tell us about your book and goals — we'll build a plan that delivers results.
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label
                htmlFor="mkt-name"
                className="text-[0.68rem] font-semibold uppercase tracking-widest text-on-navy-muted"
              >
                Full Name
              </Label>
              <Input
                id="mkt-name"
                placeholder="Your name"
                className="h-11 rounded-xl border-navy-deep/15 bg-cream/35 px-4 text-sm text-navy-deep placeholder:text-navy-deep/35 shadow-none transition-all hover:border-navy-deep/25 focus-visible:border-gold/60 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-gold/20"
              />
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="mkt-email"
                className="text-[0.68rem] font-semibold uppercase tracking-widest text-on-navy-muted"
              >
                Email Address
              </Label>
              <Input
                id="mkt-email"
                type="email"
                placeholder="you@example.com"
                className="h-11 rounded-xl border-navy-deep/15 bg-cream/35 px-4 text-sm text-navy-deep placeholder:text-navy-deep/35 shadow-none transition-all hover:border-navy-deep/25 focus-visible:border-gold/60 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-gold/20"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label
              htmlFor="mkt-title"
              className="text-[0.68rem] font-semibold uppercase tracking-widest text-navy-deep/60"
            >
              Book Title &amp; Genre
            </Label>
            <Input
              id="mkt-title"
              placeholder="e.g., The Silent Garden (Literary Fiction)"
              className="h-11 rounded-xl border-navy-deep/15 bg-cream/35 px-4 text-sm text-navy-deep placeholder:text-navy-deep/35 shadow-none transition-all hover:border-navy-deep/25 focus-visible:border-gold/60 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-gold/20"
            />
          </div>

          <div className="space-y-1.5">
            <Label
              htmlFor="mkt-goals"
              className="text-[0.68rem] font-semibold uppercase tracking-widest text-navy-deep/60"
            >
              Marketing Goals
            </Label>
            <Textarea
              id="mkt-goals"
              placeholder="Sales targets, channels of interest, timeline, budget range..."
              className="min-h-[90px] resize-none rounded-xl border-navy-deep/15 bg-cream/35 p-4 text-sm text-navy-deep placeholder:text-navy-deep/35 shadow-none transition-all hover:border-navy-deep/25 focus-visible:border-gold/60 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-gold/20"
            />
          </div>

          <div className="flex items-start gap-3 pt-1">
            <Checkbox
              id="mkt-consent"
              className="mt-0.5 h-4 w-4 rounded border-navy-deep/25 data-[state=checked]:border-gold data-[state=checked]:bg-gold data-[state=checked]:text-navy-deep"
            />
            <label htmlFor="mkt-consent" className="text-xs leading-relaxed text-navy-deep/60">
              I agree to receive communications from Penova Publishers and accept the{" "}
              <a href="#" className="text-gold hover:underline">
                Privacy Policy
              </a>
              .
            </label>
          </div>

          <Button
            type="submit"
            className="h-12 w-full rounded-xl bg-gradient-to-r from-gold to-gold-light text-[0.8rem] font-semibold uppercase tracking-widest text-navy-deep shadow-[0_4px_24px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_6px_32px_rgba(212,175,55,0.45)] hover:brightness-105"
          >
            Grow Your Audience
          </Button>
        </form>
      </div>
    </div>
  );
}
