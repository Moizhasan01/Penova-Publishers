import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections";
import { SiteLayout } from "@/components/site-layout";

const TITLE = "Terms & Conditions — Penova Publishers";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: "Terms and conditions for using the Penova Publishers website and services." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Penova Publishers"
        title="Terms & Conditions"
        intro="The terms that apply when you use our website or engage Penova Publishers for publishing services."
      />
      <main className="mx-auto max-w-3xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="text-sm text-muted-foreground">Effective date: September 15, 2026</p>
        <div className="mt-10 space-y-10 text-base leading-relaxed text-navy-deep/75">
          <section>
            <h2 className="font-serif text-3xl text-navy-deep">Using this website</h2>
            <p className="mt-4">
              You may use this website for lawful purposes and in a way that does not disrupt the
              website, misuse our forms, or infringe another person&apos;s rights. Website content is
              provided for general information and may change without notice.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-navy-deep">Services and proposals</h2>
            <p className="mt-4">
              Information on this website is not a binding offer. Project scope, pricing, timing,
              deliverables, ownership, and payment terms are confirmed in a written agreement before
              work begins. A proposal expires according to the terms stated in that proposal.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-navy-deep">Intellectual property</h2>
            <p className="mt-4">
              Unless a written agreement says otherwise, the website, branding, text, graphics, and
              other materials belong to Penova Publishers or their respective owners. You may not
              reproduce or redistribute them without permission.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-navy-deep">Disclaimers and limits</h2>
            <p className="mt-4">
              We work to keep the website accurate and available, but do not guarantee that it will
              always be complete, uninterrupted, or error-free. To the extent permitted by law,
              Penova Publishers is not responsible for indirect losses arising from use of this
              website.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-navy-deep">Contact</h2>
            <p className="mt-4">
              Questions about these terms can be sent to hello@penovapublishers.com.
            </p>
          </section>
        </div>
      </main>
    </SiteLayout>
  );
}