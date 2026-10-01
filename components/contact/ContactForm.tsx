"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <Reveal delay={0.15} className="mt-12 max-w-xl">
      {status === "success" ? (
        <div className="flex items-start gap-3 rounded-card border border-success/30 bg-success/5 p-6">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
          <div>
            <p className="font-semibold text-foreground">Message sent</p>
            <p className="mt-1 text-sm text-muted">
              Thanks for reaching out — a member of our team will be in touch shortly.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="focus-ring mt-2 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="focus-ring mt-2 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="text-sm font-medium text-foreground">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="focus-ring mt-2 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              Tell us about your project
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="focus-ring mt-2 w-full resize-none rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
            />
          </div>

          {status === "error" && (
            <p className="text-sm text-red-600" role="alert">
              {errorMessage}
            </p>
          )}

          <MagneticButton type="submit" variant="primary" className="w-full sm:w-auto">
            {status === "submitting" ? "Sending…" : "Send Message →"}
          </MagneticButton>
        </form>
      )}
    </Reveal>
  );
}
