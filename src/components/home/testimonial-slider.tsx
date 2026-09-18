import { useEffect, useState } from "react";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 7000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden rounded-2xl border border-gold/20 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] ring-1 ring-black/5">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="w-full shrink-0 px-7 py-12 md:px-16 md:py-16">
              <Quote className="mx-auto h-12 w-12 text-gold/40" />
              <blockquote className="mx-auto mt-8 max-w-3xl text-center font-serif text-2xl leading-snug text-navy-deep md:text-4xl md:leading-tight">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-10 text-center">
                <div className="flex justify-center gap-1">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-navy-deep">
                  {t.name}
                </p>
                <p className="mt-1 text-sm italic text-brown">{t.book}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-5">
        <button
          type="button"
          aria-label="Previous review"
          onClick={() => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-white text-navy-deep shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold/5 hover:text-brown hover:shadow-md"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2.5">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Review ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-500",
                i === index ? "w-10 bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]" : "w-2 bg-navy-deep/20 hover:bg-navy-deep/40",
              )}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next review"
          onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-white text-navy-deep shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold/5 hover:text-brown hover:shadow-md"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
