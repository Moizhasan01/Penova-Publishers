import { createFileRoute } from "@tanstack/react-router";
import { Anchor, Compass, Feather, HeartHandshake } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { Reveal } from "@/components/reveal";
import { CtaBanner, PageHero, SectionHeading, TrustBadges } from "@/components/sections";
import spines from "@/assets/book-spines.jpg";

const TITLE = "About Penova Publishers — A Boutique Publishing House";
const DESC =
  "Meet the editors, designers and strategists behind Penova Publishers, and the values that shape how we treat every author's manuscript.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const values = [
  {
    Icon: Feather,
    title: "The author's voice wins",
    body: "Our editors sharpen sentences; they do not overwrite personality. If a change would make the book sound like us instead of you, we do not make it.",
  },
  {
    Icon: Anchor,
    title: "Fixed scope, fixed price",
    body: "You approve a written scope before work begins. No hourly creep, no surprise upsells at proof stage, no invoices you did not expect.",
  },
  {
    Icon: Compass,
    title: "Honest counsel first",
    body: "Sometimes the right advice is 'not yet' or 'this is two books.' We say it early, when it still saves you money.",
  },
  {
    Icon: HeartHandshake,
    title: "You keep everything",
    body: "Rights, royalties, files, ISBNs and retail accounts remain yours. If you leave us tomorrow, your book leaves with you.",
  },
];

const team = [
  {
    name: "Eleanor Voss",
    role: "Founder & Publisher",
    bio: "Fourteen years in trade editorial before founding Penova. Believes a manuscript should be read twice before a single note is written.",
  },
  {
    name: "Marcus Adeyemi",
    role: "Editorial Director",
    bio: "Developmental editor for literary and commercial fiction. Known among authors for structural notes that are blunt, warm and correct.",
  },
  {
    name: "Ingrid Halvorsen",
    role: "Design Director",
    bio: "Cover and interior designer with a background in fine printing. Obsessive about spine typography and paper stock.",
  },
  {
    name: "Sofia Marchetti",
    role: "Head of Author Marketing",
    bio: "Built launch campaigns for indie titles that outsold their imprint peers. Reports numbers plainly, without dashboard theatre.",
  },
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Penova Publishers"
        title="We keep the light on for writers."
        intro="Penova Publishers exists because too many good books never reach a reader — not for lack of talent, but for lack of a steady hand between manuscript and market."
        image={spines}
        imageAlt="Gold-lettered book spines on a dark shelf"
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <SectionHeading eyebrow="Our story" title="Founded on a rejected manuscript." />
          </Reveal>
          <Reveal delay={100} className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              In 2011 our founder, Eleanor Voss, was a commissioning editor who had to turn down a
              memoir she loved. It was not weak writing — it was an unshaped middle and a house that
              had no room on its list. She wrote three pages of notes she was not paid to write and
              posted them to the author.
            </p>
            <p>
              Two years later that book was published independently and sold thirty thousand copies.
              What changed was not the writer's talent; it was that someone had told her the truth
              about her structure and then stayed to help.
            </p>
            <p>
              Penova Publishers was built to do that at scale without losing the intimacy: senior
              editors on every project, designers who read the manuscript before opening a canvas,
              and marketers who plan for month seven rather than launch week alone.
            </p>
            <p>
              We are deliberately small. We take on a limited number of titles each quarter so that
              no author is ever handed to a coordinator and forgotten. That is the whole business
              model — attention, kept.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-deep py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Mission & values"
            title="What we refuse to compromise."
            align="center"
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card-lift flex h-full gap-5 rounded-md border border-border bg-card p-8">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-navy-deep text-gold">
                    <v.Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-2xl text-navy-deep">{v.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <SectionHeading
          eyebrow="The team"
          title="The people who will actually touch your book."
          intro="No account managers relaying messages. You work with the editor, the designer and the strategist directly."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <article className="card-lift h-full rounded-md border border-border bg-card p-7">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold font-serif text-2xl text-brown">
                  {m.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-6 text-xl text-navy-deep">{m.name}</h3>
                <p className="text-xs uppercase tracking-widest text-gold">{m.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream-deep py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Why authors choose Penova"
            title="Reputation earned one book at a time."
            align="center"
          />
          <div className="mt-14">
            <TrustBadges />
          </div>
        </div>
      </section>

      <CtaBanner
        title="Bring us the book you cannot stop thinking about."
        body="A senior editor will read your sample and reply personally within two working days."
      />
    </SiteLayout>
  );
}
