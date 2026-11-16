"use client";

import { useState } from "react";

const inputClass =
  "mt-2 w-full rounded-lg border border-white/10 bg-[#0b0b16] px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition-colors focus:border-[#7c5cfa] focus:ring-1 focus:ring-[#7c5cfa]";

export default function ContactForm() {
  const [note, setNote] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "Portfolio enquiry");
    const message = String(data.get("message") ?? "");

    const body = `${message}\n\n—\nFrom: ${name}\nEmail: ${email}`;

    setNote(
      "Your email app should open with the message ready to send. If it doesn't, email me directly at arifulislamtayef20@gmail.com."
    );

    window.location.href = `mailto:arifulislamtayef20@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    form.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-full flex-col rounded-2xl border border-white/5 bg-[#12121f] p-7 sm:p-8"
    >
      <h3 className="text-lg font-semibold text-white">Send a Message</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-400">
        Have a project in mind or just want to say hi? Drop me a message.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="subject"
            className="text-sm font-medium text-gray-300"
          >
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="What's this about?"
            className={inputClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell me about your project..."
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-lg bg-[#7c5cfa] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#6a4be0] focus:outline-none focus:ring-2 focus:ring-[#7c5cfa] focus:ring-offset-2 focus:ring-offset-[#12121f]"
      >
        Send Message
      </button>

      {note && (
        <p
          role="status"
          className="mt-4 text-sm leading-relaxed text-[#a78bfa]"
        >
          {note}
        </p>
      )}
    </form>
  );
}
