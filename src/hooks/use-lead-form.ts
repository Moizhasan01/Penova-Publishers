import { useState, type FormEvent } from "react";
import { CONTACT } from "@/lib/contactInfo";

export type LeadFormStatus = "idle" | "submitting" | "success" | "error";

export function useLeadForm(subject: string) {
  const [status, setStatus] = useState<LeadFormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form).entries());
    setStatus("submitting");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT.leadEmail}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...fields,
          _replyto: typeof fields["email"] === "string" ? fields["email"] : "",
          _subject: `New ${subject} submission`,
        }),
      });

      const result: unknown = await response.json();
      if (!response.ok || !isSuccessfulResponse(result)) {
        throw new Error(
          getResponseMessage(result) ?? `Form submission failed (${response.status}).`,
        );
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error(`Unable to submit ${subject} form`, error);
      setStatus("error");
    }
  }

  return { handleSubmit, isSubmitting: status === "submitting", status };
}

function isSuccessfulResponse(result: unknown): boolean {
  return (
    typeof result === "object" &&
    result !== null &&
    "success" in result &&
    (result.success === true || result.success === "true")
  );
}

function getResponseMessage(result: unknown): string | undefined {
  if (typeof result === "object" && result !== null && "message" in result) {
    const message = result.message;
    return typeof message === "string" ? message : undefined;
  }
  return undefined;
}
