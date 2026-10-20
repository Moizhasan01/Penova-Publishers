import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/sections";
import { CtaBanner } from "@/components/sections";
import { LeadFormFeedback } from "@/components/forms/lead-form-feedback";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLeadForm } from "@/hooks/use-lead-form";

const TITLE = "Contact | Penova Publishers";
const DESC =
  "Penova Publishers: boutique publishing, ghostwriting, editing, marketing, children's books and illustration for authors who keep 100% of their rights.";

export const Route = createFileRoute("/contact")({
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
  const { handleSubmit, isSubmitting, status } = useLeadForm("contact enquiry");

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Penova Publishers"
        title="Contact"
        intro="Tell us about your book and a senior editor will reply personally."
      />
      <section className="bg-cream px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-white p-6 shadow-sm md:p-10">
          <h2 className="font-serif text-3xl text-navy-deep">Tell us about your book</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Share a few details and our publishing team will get back to you.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <label className="block space-y-2 text-sm font-medium text-navy-deep">
              Name
              <Input name="name" autoComplete="name" required />
            </label>
            <label className="block space-y-2 text-sm font-medium text-navy-deep">
              Email address
              <Input name="email" type="email" autoComplete="email" required />
            </label>
            <label className="block space-y-2 text-sm font-medium text-navy-deep">
              Phone number <span className="font-normal text-muted-foreground">(optional)</span>
              <Input name="phone" type="tel" autoComplete="tel" />
            </label>
            <label className="block space-y-2 text-sm font-medium text-navy-deep">
              Project type
              <select
                name="service"
                defaultValue=""
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <option value="" disabled>
                  Select a service...
                </option>
                <option>Book Publishing</option>
                <option>Ghostwriting</option>
                <option>Editing</option>
                <option>Book Marketing</option>
                <option>Children&apos;s Book</option>
                <option>Illustration</option>
                <option>Other / not sure yet</option>
              </select>
            </label>
            <label className="block space-y-2 text-sm font-medium text-navy-deep">
              Message
              <Textarea name="message" rows={5} required />
            </label>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Sending..." : "Send your enquiry"}
            </Button>
            <LeadFormFeedback status={status} />
          </form>
        </div>
      </section>
      <CtaBanner />
    </SiteLayout>
  );
}
