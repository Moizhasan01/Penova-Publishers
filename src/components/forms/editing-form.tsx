import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

// Light form surface for clear contrast against the navy hero
export function EditingForm() {
  const [type, setType] = useState("");

  return (
    <div className="relative w-full max-w-[560px] mx-auto">
      {/* Gold ambient glow */}
      <div
        className="absolute -inset-2 rounded-3xl blur-2xl opacity-20"
        style={{ background: "radial-gradient(ellipse, rgba(212,175,55,0.55), transparent 70%)" }}
      />

      <div className="relative rounded-3xl border border-navy-deep/10 bg-white p-7 shadow-[0_24px_60px_rgba(0,0,0,0.2)] xl:p-8">
        {/* Header */}
        <div className="mb-6 border-b border-navy-deep/10 pb-5">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-brown">
            Editorial Services
          </p>
          <h2 className="mt-1.5 font-serif text-2xl leading-snug text-navy-deep">
            Your manuscript, refined.
          </h2>
          <p className="mt-2 text-sm font-light leading-relaxed text-navy-deep/60">
            Tell us about your manuscript and the editorial help you need.
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label
                htmlFor="edit-name"
                className="text-[0.68rem] font-semibold uppercase tracking-widest text-on-navy-muted"
              >
                Full Name
              </Label>
              <Input
                id="edit-name"
                placeholder="Your name"
                className="h-11 rounded-xl border-navy-deep/15 bg-cream/35 px-4 text-sm text-navy-deep placeholder:text-navy-deep/35 shadow-none transition-all hover:border-navy-deep/25 focus-visible:border-gold/60 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-gold/20"
              />
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="edit-email"
                className="text-[0.68rem] font-semibold uppercase tracking-widest text-on-navy-muted"
              >
                Email Address
              </Label>
              <Input
                id="edit-email"
                type="email"
                placeholder="you@example.com"
                className="h-11 rounded-xl border-navy-deep/15 bg-cream/35 px-4 text-sm text-navy-deep placeholder:text-navy-deep/35 shadow-none transition-all hover:border-navy-deep/25 focus-visible:border-gold/60 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-gold/20"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label
              htmlFor="edit-type"
              className="text-[0.68rem] font-semibold uppercase tracking-widest text-navy-deep/60"
            >
              Editing Service
            </Label>
            <select
              id="edit-type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="h-11 w-full rounded-xl border border-navy-deep/15 bg-cream/35 px-4 text-sm text-navy-deep shadow-none transition-all hover:border-navy-deep/25 focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold/20"
            >
              <option value="" disabled className="bg-white text-navy-deep">
                Select service...
              </option>
              <option value="developmental" className="bg-white">
                Developmental Editing
              </option>
              <option value="line" className="bg-white">
                Line Editing
              </option>
              <option value="copy" className="bg-white">
                Copy Editing
              </option>
              <option value="proofreading" className="bg-white">
                Proofreading
              </option>
            </select>
          </div>

          <div className="space-y-1.5">
            <Label
              htmlFor="edit-notes"
              className="text-[0.68rem] font-semibold uppercase tracking-widest text-navy-deep/60"
            >
              About Your Manuscript
            </Label>
            <Textarea
              id="edit-notes"
              placeholder="Genre, page count, current stage, and specific goals..."
              className="min-h-[90px] resize-none rounded-xl border-navy-deep/15 bg-cream/35 p-4 text-sm text-navy-deep placeholder:text-navy-deep/35 shadow-none transition-all hover:border-navy-deep/25 focus-visible:border-gold/60 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-gold/20"
            />
          </div>

          <div className="flex items-start gap-3 pt-1">
            <Checkbox
              id="edit-consent"
              className="mt-0.5 h-4 w-4 rounded border-navy-deep/25 data-[state=checked]:border-gold data-[state=checked]:bg-gold data-[state=checked]:text-navy-deep"
            />
            <label htmlFor="edit-consent" className="text-xs leading-relaxed text-navy-deep/60">
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
            Request Assessment
          </Button>
        </form>
      </div>
    </div>
  );
}
