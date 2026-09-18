import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function PublishingForm() {
  const [stage, setStage] = useState("");

  return (
    <div className="relative w-full max-w-[560px] mx-auto">
      {/* Gold ambient glow */}
      <div
        className="absolute -inset-2 rounded-3xl blur-2xl opacity-25"
        style={{ background: "radial-gradient(ellipse, rgba(212,175,55,0.65), transparent 70%)" }}
      />

      <div className="relative rounded-3xl border border-navy-deep/10 bg-white p-7 shadow-[0_24px_60px_rgba(0,0,0,0.25)] xl:p-8">
        {/* Gold star accent */}
        <div className="absolute top-7 right-7 opacity-30 select-none">
          <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
            <path d="M11 1L13.39 7.26L20 8.27L15.5 12.64L16.78 19.22L11 16.09L5.22 19.22L6.5 12.64L2 8.27L8.61 7.26L11 1Z" fill="#d4af37" />
          </svg>
        </div>

        {/* Header */}
        <div className="mb-6 border-b border-navy-deep/10 pb-5">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-brown">Publishing Services</p>
          <h2 className="mt-1.5 font-serif text-2xl leading-snug text-navy-deep">Your book, published.</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground font-light">
            From manuscript to bookshelf — tell us where you are and we'll guide you through.
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="pub-name" className="text-[0.68rem] font-semibold uppercase tracking-widest text-navy-deep/60">Full Name</Label>
              <Input
                id="pub-name"
                placeholder="Your name"
                className="h-11 rounded-xl border-navy-deep/15 bg-cream/45 px-4 text-sm text-navy-deep placeholder:text-navy-deep/35 shadow-none transition-all hover:border-navy-deep/25 focus-visible:border-gold/60 focus-visible:bg-cream focus-visible:ring-2 focus-visible:ring-gold/20"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="pub-email" className="text-[0.68rem] font-semibold uppercase tracking-widest text-navy-deep/60">Email Address</Label>
              <Input
                id="pub-email"
                type="email"
                placeholder="you@example.com"
                className="h-11 rounded-xl border-navy-deep/15 bg-cream/45 px-4 text-sm text-navy-deep placeholder:text-navy-deep/35 shadow-none transition-all hover:border-navy-deep/25 focus-visible:border-gold/60 focus-visible:bg-cream focus-visible:ring-2 focus-visible:ring-gold/20"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="pub-stage" className="text-[0.68rem] font-semibold uppercase tracking-widest text-navy-deep/60">Where are you now?</Label>
            <select
              id="pub-stage"
              value={stage}
              onChange={(e) => setStage(e.target.value)}
              className="h-11 w-full rounded-xl border border-navy-deep/15 bg-cream/45 px-4 text-sm text-navy-deep shadow-none transition-all hover:border-navy-deep/25 focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold/20"
            >
              <option value="" disabled>Select your stage...</option>
              <option value="early-draft">Early draft</option>
              <option value="completed">Manuscript complete</option>
              <option value="edited">Already edited</option>
              <option value="ready">Ready to design &amp; produce</option>
              <option value="unsure">Not sure — need guidance</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="pub-goals" className="text-[0.68rem] font-semibold uppercase tracking-widest text-navy-deep/60">Publishing Goals</Label>
            <Textarea
              id="pub-goals"
              placeholder="Print, ebook, distribution, timeline, budget — whatever matters most..."
              className="min-h-[90px] resize-none rounded-xl border-navy-deep/15 bg-cream/45 p-4 text-sm text-navy-deep placeholder:text-navy-deep/35 shadow-none transition-all hover:border-navy-deep/25 focus-visible:border-gold/60 focus-visible:bg-cream focus-visible:ring-2 focus-visible:ring-gold/20"
            />
          </div>

          <div className="flex items-start gap-3 pt-1">
            <Checkbox
              id="pub-consent"
              className="mt-0.5 h-4 w-4 rounded border-navy-deep/25 data-[state=checked]:bg-gold data-[state=checked]:border-gold data-[state=checked]:text-navy-deep"
            />
            <label htmlFor="pub-consent" className="text-xs leading-relaxed text-muted-foreground">
              I agree to receive communications from Penova Publishers and accept the <a href="#" className="text-gold hover:underline">Privacy Policy</a>.
            </label>
          </div>

          <Button
            type="submit"
            className="h-12 w-full rounded-xl bg-gradient-to-r from-gold to-gold-light text-[0.8rem] font-semibold uppercase tracking-widest text-navy-deep shadow-[0_4px_24px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_6px_32px_rgba(212,175,55,0.45)] hover:brightness-105"
          >
            Begin Your Journey
          </Button>
        </form>
      </div>
    </div>
  );
}
