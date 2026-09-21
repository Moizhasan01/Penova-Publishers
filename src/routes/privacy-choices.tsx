import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections";
import { SiteLayout } from "@/components/site-layout";

const TITLE = "Privacy Choices | Penova Publishers";

export const Route = createFileRoute("/privacy-choices")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: "Manage your communication and privacy choices with Penova Publishers." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Your information"
        title="Privacy Choices"
        intro="Choose how Penova Publishers communicates with you and contact us about the information we hold."
      />
      <main className="mx-auto max-w-3xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="text-sm text-muted-foreground">Last updated: September 15, 2026</p>
        <div className="mt-10 space-y-10 text-base leading-relaxed text-navy-deep/75">
          <section>
            <h2 className="font-serif text-3xl text-navy-deep">Marketing messages</h2>
            <p className="mt-4">
              If you receive an email from us, you can unsubscribe using the link in the message.
              You may also email hello@penovapublishers.com with the subject &quot;Unsubscribe&quot; and
              we will update your preference.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-navy-deep">Access or deletion requests</h2>
            <p className="mt-4">
              You may ask what personal information we hold about you, request a correction, or ask
              us to delete it where applicable. Please include the email address used to contact us
              so we can identify your request.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-navy-deep">Cookies and analytics</h2>
            <p className="mt-4">
              Our website may use essential technologies to function and optional analytics to help
              us understand site usage. You can manage available browser and device controls for
              optional technologies. Blocking some technologies may affect site functionality.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-navy-deep">Contact us</h2>
            <p className="mt-4">
              Send privacy requests or questions to hello@penovapublishers.com. We will review and
              respond to requests within a reasonable period.
            </p>
          </section>
        </div>
      </main>
    </SiteLayout>
  );
}