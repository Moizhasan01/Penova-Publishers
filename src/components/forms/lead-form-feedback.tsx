import type { LeadFormStatus } from "@/hooks/use-lead-form";
import { CONTACT } from "@/lib/contactInfo";

export function LeadFormFeedback({
  status,
  successMessage = "Thank you. Your message has been sent, and our team will be in touch.",
}: {
  status: LeadFormStatus;
  successMessage?: string;
}) {
  if (status === "submitting") {
    return (
      <p role="status" aria-live="polite" className="text-sm text-muted-foreground">
        Sending your message...
      </p>
    );
  }

  if (status === "success") {
    return (
      <p role="status" aria-live="polite" className="text-sm text-green-700">
        {successMessage}
      </p>
    );
  }

  if (status === "error") {
    return (
      <p role="alert" className="text-sm text-destructive">
        We couldn&apos;t send your message. Please try again or{" "}
        <a className="underline" href={`mailto:${CONTACT.leadEmail}`}>
          email us directly
        </a>
        .
      </p>
    );
  }

  return null;
}
