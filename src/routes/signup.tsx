import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Mail, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const TITLE = "Get a Free Quote | Penova Publishers";
const DESC =
  "Tell Penova Publishers about your book and receive a thoughtful route to publication with a clear, fixed quote.";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: SignupPage,
});

function SignupPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <SiteLayout>
      <div className="relative overflow-hidden bg-cream">
        <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(ellipse_at_top_right,_color-mix(in_oklab,var(--gold)_18%,transparent),transparent_60%)]" />
        <section className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:pb-32 lg:pt-24">
          <div className="max-w-xl lg:pt-12">
            <p className="eyebrow">Begin your book&apos;s journey</p>
            <span className="rule-gold mt-5" />
            <h1 className="mt-8 text-5xl text-navy-deep md:text-7xl">Let&apos;s find the right <em className="text-gold">way in.</em></h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground">Tell us a little about your project. A senior member of our team will read your note and reply with an honest recommendation, a clear scope, and a fixed quote.</p>
            <div className="mt-12 space-y-5 border-t border-border pt-7">
              <div className="flex gap-4"><Check className="mt-1 h-5 w-5 shrink-0 text-gold" /><p className="text-sm leading-relaxed text-navy-deep/75">A personal response from an experienced publishing team</p></div>
              <div className="flex gap-4"><Check className="mt-1 h-5 w-5 shrink-0 text-gold" /><p className="text-sm leading-relaxed text-navy-deep/75">A practical route matched to your goals and manuscript</p></div>
              <div className="flex gap-4"><ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-gold" /><p className="text-sm leading-relaxed text-navy-deep/75">Your ideas and information stay private</p></div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 bg-gold/10 blur-2xl" aria-hidden="true" />
            <div className="relative border border-border bg-white/85 p-6 shadow-[0_25px_70px_-35px_rgba(15,27,45,0.45)] md:p-10">
              {submitted ? (
                <div className="flex min-h-[30rem] flex-col items-center justify-center py-20 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-gold"><Check className="h-8 w-8" /></div>
                  <h2 className="mt-7 text-4xl text-navy-deep">Your note is with us.</h2>
                  <p className="mt-4 max-w-md text-muted-foreground">Thank you for telling us about your book. We&apos;ll be in touch shortly with the next thoughtful step.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-border pb-6"><p className="eyebrow">Request a quote</p><h2 className="mt-3 text-3xl text-navy-deep">A few words to get us started.</h2></div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="space-y-2 text-sm font-semibold text-navy-deep">First name<Input name="firstName" required autoComplete="given-name" placeholder="Your first name" /></label>
                    <label className="space-y-2 text-sm font-semibold text-navy-deep">Last name<Input name="lastName" required autoComplete="family-name" placeholder="Your last name" /></label>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="space-y-2 text-sm font-semibold text-navy-deep">Email address<Input type="email" name="email" required autoComplete="email" placeholder="you@example.com" /></label>
                    <label className="space-y-2 text-sm font-semibold text-navy-deep">Phone number <span className="font-normal text-muted-foreground">(optional)</span><Input type="tel" name="phone" autoComplete="tel" placeholder="+1 555 000 0000" /></label>
                  </div>
                  <label className="space-y-2 text-sm font-semibold text-navy-deep">I am interested in
                    <select name="service" required defaultValue="" className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-sm outline-none focus-visible:ring-1 focus-visible:ring-ring"><option value="" disabled>Select a service...</option><option>Book Publishing</option><option>Book Marketing</option><option>Audiobook Production</option><option>Book Illustration</option><option>Children&apos;s Book</option><option>Not sure yet, advise me</option></select>
                  </label>
                  <label className="space-y-2 text-sm font-semibold text-navy-deep">Tell us about your book <span className="font-normal text-muted-foreground">(optional)</span><Textarea name="message" rows={5} placeholder="What are you making, and where are you in the process?" /></label>
                  <button type="submit" className="group inline-flex w-full items-center justify-center gap-3 rounded-md bg-navy-deep px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-on-navy transition-all hover:bg-navy hover:shadow-[0_10px_30px_rgba(15,27,45,0.2)]">Send my enquiry <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></button>
                  <p className="flex items-center justify-center gap-2 text-center text-xs text-muted-foreground"><Mail className="h-3.5 w-3.5" /> We&apos;ll only use your details to reply to this enquiry.</p>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}