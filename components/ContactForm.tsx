"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

// Formspree form ID — set NEXT_PUBLIC_FORMSPREE_ID in .env.local.
// Create a free form at https://formspree.io and paste its ID (the part
// after /f/ in your endpoint, e.g. "xeqwabcd").
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Form not connected to a delivery service yet — surface a clear message
    // instead of silently doing nothing.
    if (!FORMSPREE_ID) {
      setStatus("error");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto mt-10 max-w-lg rounded-xl border border-accent/30 bg-accent/5 p-8">
        <p className="text-lg font-medium text-accent">Thanks for reaching out!</p>
        <p className="mt-2 text-muted">
          Your message has been sent — I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 max-w-lg space-y-4 text-left"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="w-full rounded-md border border-border bg-surface px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-muted focus:border-accent/50"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Your email"
          className="w-full rounded-md border border-border bg-surface px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-muted focus:border-accent/50"
        />
      </div>
      <textarea
        name="message"
        required
        rows={5}
        placeholder="Your message"
        className="w-full resize-none rounded-md border border-border bg-surface px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-muted focus:border-accent/50"
      />
      {status === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong. Please email me directly at {profile.email}.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md border border-accent/40 px-8 py-4 font-medium text-accent transition-all hover:bg-accent/10 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
