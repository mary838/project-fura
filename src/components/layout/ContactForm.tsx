"use client";

import { useId, useState } from "react";
import Script from "next/script";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "loading" | "success" | "error";

/**
 * Email capture form. Submits to our own /api/contact Route Handler, which
 * verifies the Turnstile token and calls Brevo server-side — the browser
 * never talks to Brevo or holds an API key.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState<string | null>(null);
  const emailId = useId();
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "");
    const turnstileToken = String(data.get("cf-turnstile-response") ?? "");

    if (!turnstileToken) {
      setStatus("error");
      setFeedback("Please complete the verification challenge.");
      return;
    }

    setStatus("loading");
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, turnstileToken }),
      });
      const result: { success: boolean; message: string } = await response.json();

      if (result.success) {
        setStatus("success");
        setFeedback(result.message);
        form.reset();
        window.turnstile?.reset();
      } else {
        setStatus("error");
        setFeedback(result.message);
        window.turnstile?.reset();
      }
    } catch {
      setStatus("error");
      setFeedback("Unable to send email.");
      window.turnstile?.reset();
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col items-stretch gap-4 lg:w-[400px] lg:flex-row lg:items-start lg:flex-wrap"
    >
      <label htmlFor={emailId} className="sr-only">
        Email address
      </label>
      <input
        id={emailId}
        name="email"
        type="email"
        required
        maxLength={254}
        placeholder="Enter your email"
        className="min-w-0 flex-1 rounded-md border border-border-primary bg-surface px-3.5 py-2.5 text-base text-title placeholder:text-placeholder focus:outline-2 focus:outline-offset-2 focus:outline-title"
      />
      <Button
        type="submit"
        size="sm"
        icon={null}
        disabled={status === "loading"}
        className="w-full lg:w-auto"
      >
        {status === "loading" ? "Sending…" : "Send us"}
      </Button>

      {siteKey ? (
        <>
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js"
            async
            defer
          />
          <div className="cf-turnstile" data-sitekey={siteKey} />
        </>
      ) : null}

      {feedback ? (
        <p
          role="status"
          className={`w-full text-sm ${status === "success" ? "text-title" : "text-red-600"}`}
        >
          {feedback}
        </p>
      ) : null}
    </form>
  );
}

declare global {
  interface Window {
    turnstile?: { reset: () => void };
  }
}
