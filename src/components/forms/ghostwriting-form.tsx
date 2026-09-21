import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

// Dark-glass form sits on top of the navy hero.
export function GhostwritingForm() {
  const [hoveredField, setHoveredField] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-[560px] mx-auto">
      {/* Gold ambient glow */}
      <div
        className="absolute -inset-2 rounded-3xl blur-2xl opacity-20"
        style={{ background: "radial-gradient(ellipse, rgba(212,175,55,0.55), transparent 70%)" }}
      />

      <div className="relative rounded-3xl border border-white/10 bg-navy/60 p-7 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl xl:p-8">
        {/* Literary mark */}
        <div className="absolute top-7 right-7 font-serif text-2xl text-gold/20 select-none">❦</div>

        {/* Header */}
        <div className="mb-6 border-b border-white/10 pb-5">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold/80">Ghostwriting Studio</p>
          <h2 className="mt-1.5 font-serif text-2xl leading-snug text-on-navy">Share your story.</h2>
          <p className="mt-2 text-sm leading-relaxed text-on-navy-muted font-light">
            Every great book begins with a conversation. Tell us what you want to say and we will do the writing.
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="ghost-name" className="text-[0.68rem] font-semibold uppercase tracking-widest text-on-navy-muted">Full Name</Label>
              <Input
                id="ghost-name"
                placeholder="Your name"
                className="h-11 rounded-xl border-white/10 bg-white/8 px-4 text-sm text-on-navy placeholder:text-on-navy/30 shadow-none backdrop-blur-sm transition-all hover:border-white/20 focus-visible:border-gold/60 focus-visible:bg-white/10 focus-visible:ring-2 focus-visible:ring-gold/20"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="ghost-email" className="text-[0.68rem] font-semibold uppercase tracking-widest text-on-navy-muted">Email Address</Label>
              <Input
                id="ghost-email"
                type="email"
                placeholder="you@example.com"
                className="h-11 rounded-xl border-white/10 bg-white/8 px-4 text-sm text-on-navy placeholder:text-on-navy/30 shadow-none backdrop-blur-sm transition-all hover:border-white/20 focus-visible:border-gold/60 focus-visible:bg-white/10 focus-visible:ring-2 focus-visible:ring-gold/20"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="ghost-booktype" className="text-[0.68rem] font-semibold uppercase tracking-widest text-on-navy-muted">Book Type</Label>
            <Input
              id="ghost-booktype"
              placeholder="e.g., Memoir, Business, Fiction, Self-Help..."
              className="h-11 rounded-xl border-white/10 bg-white/8 px-4 text-sm text-on-navy placeholder:text-on-navy/30 shadow-none backdrop-blur-sm transition-all hover:border-white/20 focus-visible:border-gold/60 focus-visible:bg-white/10 focus-visible:ring-2 focus-visible:ring-gold/20"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="ghost-story" className="text-[0.68rem] font-semibold uppercase tracking-widest text-on-navy-muted">Your Story</Label>
            <Textarea
              id="ghost-story"
              placeholder="What experience or insight are you sharing with the world?"
              className="min-h-[90px] resize-none rounded-xl border-white/10 bg-white/8 p-4 text-sm text-on-navy placeholder:text-on-navy/30 shadow-none backdrop-blur-sm transition-all hover:border-white/20 focus-visible:border-gold/60 focus-visible:bg-white/10 focus-visible:ring-2 focus-visible:ring-gold/20"
            />
          </div>

          <div className="flex items-start gap-3 pt-1">
            <Checkbox
              id="ghost-consent"
              className="mt-0.5 h-4 w-4 rounded border-white/20 data-[state=checked]:bg-gold data-[state=checked]:border-gold data-[state=checked]:text-navy-deep"
            />
            <label htmlFor="ghost-consent" className="text-xs leading-relaxed text-on-navy-muted">
              I agree to receive communications from Penova Publishers and accept the <a href="#" className="text-gold hover:underline">Privacy Policy</a>.
            </label>
          </div>

          <Button
            type="submit"
            className="h-12 w-full rounded-xl bg-gradient-to-r from-gold to-gold-light text-[0.8rem] font-semibold uppercase tracking-widest text-navy-deep shadow-[0_4px_24px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_6px_32px_rgba(212,175,55,0.45)] hover:brightness-105"
          >
            Start the Conversation
          </Button>
        </form>
      </div>
    </div>
  );
}
