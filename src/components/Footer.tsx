const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/amirulislamkayef" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amirul-islam-kayef",
  },
  { label: "Facebook", href: "https://facebook.com" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0a0a13]">
      {/* Decorative glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-[#7c5cfa]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="text-xl font-bold text-white">
              [AMIRUL ISLAM].
            </a>
            <p className="mt-4 max-w-sm leading-relaxed text-gray-400">
              Software Engineering student at Daffodil International University,
              building full-stack web applications with React, Next.js, Node.js,
              and MongoDB.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7c5cfa]">
              Pages
            </h3>
            <ul className="mt-5 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7c5cfa]">
              Connect
            </h3>
            <ul className="mt-5 space-y-2.5">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            © 2026 Amirul Islam. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
