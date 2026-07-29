"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const next: Record<string, string> = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name) next.name = "Please tell us your name.";
    if (!email) next.email = "We need an email to reply to you.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "That email doesn't look right.";
    if (!message) next.message = "Add a short message so we know how to help.";

    return next;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next = validate(data);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-clay/30 bg-clay/5 p-8 text-center"
      >
        <p className="font-display text-2xl text-espresso mb-2">
          Faleminderit — message sent!
        </p>
        <p className="text-ink-soft text-sm">
          We usually reply within one business day. For same-day questions,
          call us directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm link-underline text-espresso"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="Name"
          name="name"
          autoComplete="name"
          error={errors.name}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          error={errors.email}
        />
      </div>
      <Field
        label="Subject"
        name="subject"
        placeholder="Reservation, feedback, press..."
      />
      <Field
        label="Message"
        name="message"
        as="textarea"
        rows={5}
        error={errors.message}
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto rounded-full bg-espresso text-cream px-8 py-3.5 text-sm tracking-wide hover:bg-espresso-dark transition-colors duration-200 disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  as = "input",
  rows,
  placeholder,
  autoComplete,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  as?: "input" | "textarea";
  rows?: number;
  placeholder?: string;
  autoComplete?: string;
  error?: string;
}) {
  const id = `field-${name}`;
  const describedBy = error ? `${id}-error` : undefined;

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs uppercase tracking-widest text-ink-soft mb-2"
      >
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className="w-full rounded-lg border border-line bg-paper px-4 py-3 text-ink placeholder:text-ink-soft/50 focus:border-clay outline-none transition-colors"
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className="w-full rounded-lg border border-line bg-paper px-4 py-3 text-ink placeholder:text-ink-soft/50 focus:border-clay outline-none transition-colors"
        />
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
