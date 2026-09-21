import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function ChildrensBooksForm() {
  const [hoveredField, setHoveredField] = useState<string | null>(null);

  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      {/* Soft magical glow */}
      <div className="absolute -inset-1.5 rounded-[2rem] opacity-30 blur-2xl" style={{
        background: "linear-gradient(135deg, rgba(255,179,71,0.4), rgba(78,205,196,0.3), rgba(255,107,107,0.3))"
      }} />

      <div className="kids-form-shell relative rounded-[2rem] border border-white/60 bg-white/70 p-5 shadow-[0_24px_50px_rgba(0,0,0,0.05)] backdrop-blur-xl sm:p-7 xl:p-9 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
        
        {/* Decorative elements */}
        <div className="absolute top-8 right-8 text-2xl opacity-60 transition-transform duration-700 hover:rotate-12">✨</div>
        
        <div className="mb-6 border-b border-orange-100/50 pb-6">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-orange-600/80">Let&apos;s write a story</p>
          <h2 className="mt-2 font-serif text-3xl leading-tight text-navy-deep">Every child deserves magic.</h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground font-light">
            Tell us about your characters, your world, and the adventure you want to share with young readers.
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="kids-name" className="text-[0.7rem] font-semibold uppercase tracking-widest text-navy-deep/70">Your Name</Label>
              <Input 
                id="kids-name" 
                placeholder="Full name" 
                className="h-11 rounded-xl border-white/40 bg-white/60 px-4 text-sm font-medium text-navy-deep shadow-sm backdrop-blur-sm transition-all placeholder:text-navy-deep/30 hover:bg-white/80 focus-visible:border-orange-300 focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-orange-300/10"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="kids-email" className="text-[0.7rem] font-semibold uppercase tracking-widest text-navy-deep/70">Email Address</Label>
              <Input 
                id="kids-email" 
                type="email" 
                placeholder="you@example.com" 
                className="h-11 rounded-xl border-white/40 bg-white/60 px-4 text-sm font-medium text-navy-deep shadow-sm backdrop-blur-sm transition-all placeholder:text-navy-deep/30 hover:bg-white/80 focus-visible:border-orange-300 focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-orange-300/10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="kids-age" className="text-[0.7rem] font-semibold uppercase tracking-widest text-navy-deep/70">Target Age Group</Label>
            <Input 
              id="kids-age" 
              placeholder="e.g., Ages 3-5, Early Readers..." 
              className="h-11 rounded-xl border-white/40 bg-white/60 px-4 text-sm font-medium text-navy-deep shadow-sm backdrop-blur-sm transition-all placeholder:text-navy-deep/30 hover:bg-white/80 focus-visible:border-orange-300 focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-orange-300/10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="kids-story" className="text-[0.7rem] font-semibold uppercase tracking-widest text-navy-deep/70">Story Idea</Label>
            <Textarea 
              id="kids-story" 
              placeholder="What makes your story special?" 
              className="min-h-[100px] resize-none rounded-xl border-white/40 bg-white/60 p-4 text-sm font-medium leading-relaxed text-navy-deep shadow-sm backdrop-blur-sm transition-all placeholder:text-navy-deep/30 hover:bg-white/80 focus-visible:border-orange-300 focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-orange-300/10"
            />
          </div>

          <div className="flex items-start gap-3 pt-2">
            <Checkbox 
              id="kids-consent" 
              className="mt-1 border-orange-300/60 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-orange-400 data-[state=checked]:to-pink-400 data-[state=checked]:text-white data-[state=checked]:border-transparent h-5 w-5 rounded-md" 
            />
            <label htmlFor="kids-consent" className="text-xs leading-relaxed text-muted-foreground">
              I consent to receive communications from Penova Publishers. I agree to the <a href="#" className="font-semibold text-orange-600/80 hover:text-orange-500 transition-colors">Privacy Choices</a>.
            </label>
          </div>

          <Button 
            type="submit" 
            className="mt-4 h-12 w-full rounded-xl bg-gradient-to-r from-orange-400 to-pink-400 text-[0.8rem] font-semibold uppercase tracking-widest text-white shadow-lg shadow-orange-400/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-400/30 hover:brightness-105"
          >
            Start Your Book
          </Button>
        </form>
      </div>
    </div>
  );
}
