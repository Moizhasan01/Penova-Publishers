import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/sections";

const TITLE = "Privacy Policy — Penova Publishers";
const DESC =
  "Penova Publishers: boutique publishing, ghostwriting, editing, marketing, children's books and illustration for authors who keep 100% of their rights.";

export const Route = createFileRoute("/privacy")({
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
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Penova Publishers"
        title="Privacy Policy"
        intro="How Penova Publishers collects, uses, and protects information when you visit our website or contact our team."
      />
      <main className="mx-auto max-w-3xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="text-sm text-muted-foreground">Effective date: September 15, 2026</p>
        <div className="mt-10 space-y-10 text-base leading-relaxed text-navy-deep/75">
          <section>
            <h2 className="font-serif text-3xl text-navy-deep">Information we collect</h2>
            <p className="mt-4">
              We collect information you choose to share with us, such as your name, email address,
              phone number, project details, and messages submitted through our forms. We may also
              receive basic technical information, including browser type, device information, and
              pages visited.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-navy-deep">How we use information</h2>
            <p className="mt-4">
              We use submitted information to respond to enquiries, prepare proposals, provide
              services, improve our website, and send updates when you have asked to receive them.
              We do not sell your personal information.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-navy-deep">Sharing and protection</h2>
            <p className="mt-4">
              We may use trusted service providers to host our website, process forms, or deliver
              communications. They may access information only as needed to perform those services.
              We use reasonable administrative and technical safeguards, but no online transmission
              can be guaranteed completely secure.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-navy-deep">Your choices</h2>
            <p className="mt-4">
              You can ask us to access, correct, or delete personal information we hold about you,
              or to stop sending marketing communications. Visit our Privacy Choices page or email
              hello@penovapublishers.com to make a request.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-navy-deep">Contact</h2>
            <p className="mt-4">
              Questions about this policy can be sent to hello@penovapublishers.com.
            </p>
          </section>
        </div>
      </main>
    </SiteLayout>
  );
}
