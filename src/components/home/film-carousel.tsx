import { useCallback, useEffect, useRef, useState } from "react";
import { Play, Pause, ArrowLeft, ArrowRight } from "lucide-react";
import { FILMS } from "@/lib/home-data";
import { cn } from "@/lib/utils";

const DURATION = 6000;

export function FilmCarousel() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const raf = useRef<number | null>(null);
  const start = useRef<number>(0);

  const go = useCallback((next: number) => {
    setIndex((i) => (next + FILMS.length) % FILMS.length);
    setProgress(0);
    start.current = performance.now();
  }, []);

  useEffect(() => {
    if (!playing) return;
    start.current = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start.current) / DURATION, 1);
      setProgress(p);
      if (p >= 1) {
        setIndex((i) => (i + 1) % FILMS.length);
        start.current = t;
        setProgress(0);
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [playing, index]);

  const active = FILMS[index]!;

  return (
    <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14 items-center">
      {/* Stage */}
      <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-navy-deep shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/5 transition-all duration-700 hover:shadow-[0_20px_60px_rgba(0,0,0,0.7)] hover:border-white/20">
        {FILMS.map((f, i) => (
          <img
            key={f.title}
            src={f.poster}
            alt={f.alt}
            width={1200}
            height={800}
            loading="lazy"
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-out",
              i === index ? "opacity-100 ken-burns" : "opacity-0",
            )}
          />
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/20 to-transparent" />

        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause showreel" : "Play showreel"}
          className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold/95 text-navy-deep transition-transform duration-500 hover:scale-110 pulse-ring"
        >
          {playing ? (
            <Pause className="h-6 w-6" />
          ) : (
            <Play className="ml-1 h-7 w-7 fill-navy-deep" />
          )}
        </button>

        <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
          <p className="eyebrow-on-navy">
            {active.kicker} · {active.runtime}
          </p>
          <h3 className="mt-2 max-w-lg text-2xl text-on-navy md:text-3xl">{active.title}</h3>
          <p className="mt-1 text-sm text-on-navy-muted">{active.author}</p>

          <div className="mt-6 flex items-center gap-4">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous film"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-on-navy/25 text-on-navy transition-colors hover:border-gold hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next film"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-on-navy/25 text-on-navy transition-colors hover:border-gold hover:text-gold"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
            <div className="h-px flex-1 bg-on-navy/20">
              <div
                className="h-px bg-gold transition-[width] duration-100 ease-linear"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <span className="font-serif text-lg text-gold">
              {String(index + 1).padStart(2, "0")}
              <span className="text-on-navy-muted">/{String(FILMS.length).padStart(2, "0")}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Playlist */}
      <ul className="flex flex-col gap-2">
        {FILMS.map((f, i) => (
          <li key={f.title}>
            <button
              type="button"
              onClick={() => go(i)}
              className={cn(
                "group/item relative flex w-full items-center gap-5 rounded-xl p-4 text-left transition-all duration-500 overflow-hidden",
                i === index
                  ? "bg-white/5 border border-gold/30 shadow-[inset_4px_0_0_rgba(212,175,55,1)]"
                  : "border border-transparent hover:bg-white/5 hover:border-white/10",
              )}
            >
              {i === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent pointer-events-none" />
              )}
              <span className="relative h-20 w-28 shrink-0 overflow-hidden rounded-md shadow-md">
                <img
                  src={f.poster}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <span className="absolute inset-0 grid place-items-center bg-navy-deep/35">
                  <Play className="h-5 w-5 fill-white text-white opacity-80 transition-opacity group-hover/item:opacity-100" />
                </span>
              </span>
              <span className="min-w-0">
                <span
                  className={cn(
                    "block truncate font-serif text-xl tracking-wide",
                    i === index ? "text-gold" : "text-white/90 group-hover/item:text-white",
                  )}
                >
                  {f.title}
                </span>
                <span className="mt-1 block truncate text-xs uppercase tracking-widest text-on-navy-muted">
                  {f.kicker} · {f.runtime}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
