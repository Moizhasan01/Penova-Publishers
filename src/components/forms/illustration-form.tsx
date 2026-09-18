import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function IllustrationForm() {
  const [hoveredField, setHoveredField] = useState<string | null>(null);

  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      {/* Artistic gradient background */}
      <div className="absolute -inset-1.5 rounded-[2rem] opacity-30 blur-2xl" style={{
        background: "linear-gradient(135deg, rgba(255,107,107,0.4), rgba(255,157,0,0.3), rgba(139,92,246,0.3))"
      }} />

      <div className="relative rounded-[2rem] border border-white/60 bg-white/70 p-7 shadow-[0_24px_50px_rgba(0,0,0,0.05)] backdrop-blur-xl xl:p-9 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
        
        {/* Decorative doodles */}
        <div className="absolute top-8 right-8 text-2xl opacity-40 font-serif italic text-purple-600 transition-transform duration-700 hover:rotate-12 hover:opacity-80">✦</div>

        <div className="mb-6 border-b border-purple-200/40 pb-6">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-purple-600/80">Bring your vision to life</p>
          <h2 className="mt-2 font-serif text-3xl leading-tight text-navy-deep">Let&apos;s create together.</h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground font-light">
            Share your artistic vision. Tell us about the illustrations you need, and our creative team will bring your story to life.
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="ill-name" className="text-[0.7rem] font-semibold uppercase tracking-widest text-navy-deep/70">Your Name</Label>
              <Input 
                id="ill-name" 
                placeholder="Full name" 
                className="h-11 rounded-xl border-white/40 bg-white/60 px-4 text-sm font-medium text-navy-deep shadow-sm backdrop-blur-sm transition-all placeholder:text-navy-deep/30 hover:bg-white/80 focus-visible:border-purple-400 focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-purple-400/10"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ill-email" className="text-[0.7rem] font-semibold uppercase tracking-widest text-navy-deep/70">Email Address</Label>
              <Input 
                id="ill-email" 
                type="email" 
                placeholder="you@example.com" 
                className="h-11 rounded-xl border-white/40 bg-white/60 px-4 text-sm font-medium text-navy-deep shadow-sm backdrop-blur-sm transition-all placeholder:text-navy-deep/30 hover:bg-white/80 focus-visible:border-purple-400 focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-purple-400/10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="ill-style" className="text-[0.7rem] font-semibold uppercase tracking-widest text-navy-deep/70">Art Style Preference</Label>
            <Input 
              id="ill-style" 
              placeholder="e.g., Watercolor, Digital, Character..." 
              className="h-11 rounded-xl border-white/40 bg-white/60 px-4 text-sm font-medium text-navy-deep shadow-sm backdrop-blur-sm transition-all placeholder:text-navy-deep/30 hover:bg-white/80 focus-visible:border-purple-400 focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-purple-400/10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ill-description" className="text-[0.7rem] font-semibold uppercase tracking-widest text-navy-deep/70">Describe Your Project</Label>
            <Textarea 
              id="ill-description" 
              placeholder="What's the vision? Any references?" 
              className="min-h-[100px] resize-none rounded-xl border-white/40 bg-white/60 p-4 text-sm font-medium leading-relaxed text-navy-deep shadow-sm backdrop-blur-sm transition-all placeholder:text-navy-deep/30 hover:bg-white/80 focus-visible:border-purple-400 focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-purple-400/10"
            />
          </div>

          <div className="flex items-start gap-3 pt-2">
            <Checkbox 
              id="ill-consent" 
              className="mt-1 border-purple-300/60 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-500 data-[state=checked]:to-pink-500 data-[state=checked]:text-white data-[state=checked]:border-transparent h-5 w-5 rounded-md" 
            />
            <label htmlFor="ill-consent" className="text-xs leading-relaxed text-muted-foreground">
              I consent to receive communications from Penova Publishers. I agree to the <a href="#" className="font-semibold text-purple-600/80 hover:text-purple-500 transition-colors">Privacy Choices</a>.
            </label>
          </div>

          <Button 
            type="submit" 
            className="mt-4 h-12 w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-[0.8rem] font-semibold uppercase tracking-widest text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/30 hover:brightness-105"
          >
            Share Your Vision
          </Button>
        </form>
      </div>
    </div>
  );
}
