const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-5 w-5",
};

const channels = [
  {
    label: "Email",
    value: "arifulislamtayef20@gmail.com",
    href: "mailto:arifulislamtayef20@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps} aria-hidden>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "01754 515877",
    href: "tel:+8801754515877",
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps} aria-hidden>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "01648 089701",
    href: "https://wa.me/8801648089701",
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps} aria-hidden>
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/amirulislamkayef",
    href: "https://github.com/amirulislamkayef",
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps} aria-hidden>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/amirul-islam-kayef",
    href: "https://www.linkedin.com/in/amirul-islam-kayef",
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps} aria-hidden>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function ContactInfo() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/5 bg-[#12121f] p-7 sm:p-8">
      <h3 className="text-lg font-semibold text-white">Contact Information</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-400">
        Feel free to reach out through any of these channels — I&apos;ll get
        back to you as soon as I can.
      </p>

      <ul className="mt-8 space-y-5">
        {channels.map((channel) => (
          <li key={channel.label} className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#7c5cfa]/15 text-[#7c5cfa]">
              {channel.icon}
            </span>

            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
                {channel.label}
              </p>
              <a
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="block truncate text-[15px] text-white transition-colors hover:text-[#a78bfa]"
              >
                {channel.value}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
