"use client";

import { useMemo, useState } from "react";
import { CalendarIcon, ClockIcon, PeopleIcon } from "./icons/DoodleIcons";

type Status = "idle" | "submitting" | "success" | "error";

const WEEKDAY_HOURS = { open: "07:30", close: "20:00" };
const WEEKEND_HOURS = { open: "08:00", close: "21:00" };

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function toHHMM(mins: number) {
  const h = Math.floor(mins / 60)
    .toString()
    .padStart(2, "0");
  const m = (mins % 60).toString().padStart(2, "0");
  return `${h}:${m}`;
}

function formatSlotLabel(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${m.toString().padStart(2, "0")} ${period}`;
}

/** Slots every 30 min from opening to one hour before closing. */
function slotsForDate(dateStr: string): string[] {
  const day = dateStr ? new Date(`${dateStr}T00:00:00`).getDay() : 1;
  const isWeekend = day === 0 || day === 6;
  const { open, close } = isWeekend ? WEEKEND_HOURS : WEEKDAY_HOURS;
  const lastSlot = toMinutes(close) - 60;
  const slots: string[] = [];
  for (let t = toMinutes(open); t <= lastSlot; t += 30) {
    slots.push(toHHMM(t));
  }
  return slots;
}

function todayISO() {
  const d = new Date();
  const tz = d.getTimezoneOffset() * 60000;
  return new Date(d.getTime() - tz).toISOString().slice(0, 10);
}

export default function ReservationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [date, setDate] = useState("");

  const slots = useMemo(() => slotsForDate(date), [date]);
  const min = useMemo(() => todayISO(), []);

  function validate(data: FormData) {
    const next: Record<string, string> = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const dateVal = String(data.get("date") || "").trim();
    const timeVal = String(data.get("time") || "").trim();

    if (!name) next.name = "Please tell us your name.";
    if (!email && !phone)
      next.email = "Leave an email or phone so we can confirm.";
    else if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "That email doesn't look right.";
    if (!dateVal) next.date = "Pick a date.";
    if (!timeVal) next.time = "Pick a time.";

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
    // TODO: wire this up to a real booking system or email service
    // (e.g. Resend, SendGrid, a booking API, or a serverless function
    // that writes to a calendar). This just simulates a network call
    // and always succeeds client-side.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    form.reset();
    setDate("");
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-clay/30 bg-clay/5 p-8 text-center"
      >
        <p className="font-display text-2xl text-espresso mb-2">
          Faleminderit, request sent!
        </p>
        <p className="text-ink-soft text-sm">
          We&apos;ll confirm your reservation by email or phone shortly.
          Groups of 4 or more may get a quick call to lock in the details.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm link-underline text-espresso"
        >
          Book another table
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name" name="name" autoComplete="name" error={errors.name} />
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          error={errors.email}
        />
      </div>

      <Field
        label="Phone (optional)"
        name="phone"
        type="tel"
        autoComplete="tel"
        placeholder="+355 6X XXX XXXX"
      />

      <div className="grid sm:grid-cols-3 gap-5">
        <IconField label="Date" icon={CalendarIcon} error={errors.date}>
          <input
            id="field-date"
            name="date"
            type="date"
            min={min}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            aria-invalid={!!errors.date}
            className="w-full rounded-lg border border-line bg-paper px-4 py-3 text-ink focus:border-clay outline-none transition-colors"
          />
        </IconField>

        <IconField label="Time" icon={ClockIcon} error={errors.time}>
          <select
            id="field-time"
            name="time"
            defaultValue=""
            aria-invalid={!!errors.time}
            className="w-full rounded-lg border border-line bg-paper px-4 py-3 text-ink focus:border-clay outline-none transition-colors appearance-none"
          >
            <option value="" disabled>
              Select a time
            </option>
            {slots.map((s) => (
              <option key={s} value={s}>
                {formatSlotLabel(s)}
              </option>
            ))}
          </select>
        </IconField>

        <IconField label="Party size" icon={PeopleIcon}>
          <select
            id="field-party"
            name="party"
            defaultValue="2"
            className="w-full rounded-lg border border-line bg-paper px-4 py-3 text-ink focus:border-clay outline-none transition-colors appearance-none"
          >
            {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </IconField>
      </div>
      <p className="text-xs text-ink-soft -mt-2">
        For groups of 4 or more, we&apos;ll confirm by phone.
      </p>

      <Field
        label="Notes (optional)"
        name="notes"
        as="textarea"
        rows={3}
        placeholder="Window seat if possible, celebrating a birthday, allergies…"
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto rounded-full bg-espresso text-cream px-8 py-3.5 text-sm tracking-wide hover:bg-espresso-dark transition-colors duration-200 disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Request Reservation"}
      </button>
    </form>
  );
}

function IconField({
  label,
  icon: Icon,
  error,
  children,
}: {
  label: string;
  icon: (props: { className?: string }) => React.ReactElement;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={`field-${label.toLowerCase().replace(/\s.*/, "")}`}
        className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-ink-soft mb-2"
      >
        <Icon className="w-4 h-4 text-clay shrink-0" />
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-700">{error}</p>}
    </div>
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
