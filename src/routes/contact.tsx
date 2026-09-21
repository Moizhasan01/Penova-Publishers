import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/sections";
import { CtaBanner } from "@/components/sections";

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
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Penova Publishers"
        title="Contact"
        intro="This page is being written. In the meantime, tell us about your book and a senior editor will reply personally."
      />
      <CtaBanner />
    </SiteLayout>
  );
}
