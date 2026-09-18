import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function HeroForm() {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-gold/40 via-gold/10 to-transparent opacity-50 blur-xl" />

      <div className="relative rounded-2xl border border-white/70 bg-white/95 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-sm xl:p-7">
        <div className="mb-5 border-b border-navy-deep/10 pb-5">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-brown">Begin your book</p>
          <h2 className="mt-2 font-serif text-3xl leading-tight text-navy-deep">Let&apos;s talk about your story.</h2>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-navy-deep/60">
            Tell us where you are in the process. A senior member of our team will reply personally.
          </p>
        </div>

        <form className="space-y-3.5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="name" className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-navy-deep/60">Name</Label>
              <Input id="name" placeholder="Your full name" className="h-10 border-navy-deep/15 bg-cream/35 text-sm text-navy-deep placeholder:text-navy-deep/35 focus-visible:border-gold focus-visible:ring-gold/30" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-navy-deep/60">Email Address</Label>
              <Input id="email" type="email" placeholder="name@example.com" className="h-10 border-navy-deep/15 bg-cream/35 text-sm text-navy-deep placeholder:text-navy-deep/35 focus-visible:border-gold focus-visible:ring-gold/30" />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="phone" className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-navy-deep/60">Contact Number</Label>
            <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="h-10 border-navy-deep/15 bg-cream/35 text-sm text-navy-deep placeholder:text-navy-deep/35 focus-visible:border-gold focus-visible:ring-gold/30" />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="service" className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-navy-deep/60">I am interested in</Label>
            <select id="service" name="service" defaultValue="" className="flex h-10 w-full rounded-md border border-navy-deep/15 bg-cream/35 px-3 text-sm text-navy-deep shadow-sm outline-none focus-visible:border-gold focus-visible:ring-1 focus-visible:ring-gold/30">
              <option value="" disabled>Select a service...</option>
              <option>Book Publishing</option>
              <option>Book Marketing</option>
              <option>Audiobook Production</option>
              <option>Book Illustration</option>
              <option>Children&apos;s Book</option>
              <option>Not sure yet, advise me</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="info" className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-navy-deep/60">About Your Book</Label>
            <Textarea id="info" placeholder="Share some details about your manuscript or idea..." className="min-h-[76px] resize-none border-navy-deep/15 bg-cream/35 text-sm leading-relaxed text-navy-deep placeholder:text-navy-deep/35 focus-visible:border-gold focus-visible:ring-gold/30" />
          </div>

          <div className="flex items-start gap-2.5 pt-1">
            <Checkbox id="consent" className="mt-0.5 border-navy-deep/25 data-[state=checked]:bg-gold data-[state=checked]:text-navy-deep" />
            <label htmlFor="consent" className="text-[0.65rem] font-medium leading-relaxed text-navy-deep/55">
              By checking this box, you consent to receive communications from Penova Publishers. By submitting, you agree to our <a href="#" className="font-semibold text-gold hover:underline">Privacy Choices</a>.
            </label>
          </div>

          <Button type="submit" className="mt-2 h-11 w-full bg-navy-deep text-sm font-semibold uppercase tracking-[0.18em] text-on-navy shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy hover:shadow-xl">
            Request a conversation
          </Button>
        </form>
      </div>
    </div>
  );
}
