import Image from "next/image";

const socials = [
  { label: "GitHub", href: "https://github.com/amirulislamkayef" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amirul-islam-kayef",
  },
  { label: "Facebook", href: "https://facebook.com" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center py-16 lg:py-0"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left: intro */}
        <div>
          <p className="text-sm font-semibold tracking-[0.25em] text-[#7c5cfa]">
            HELLO, I&apos;M
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            [AMIRUL ISLAM]
          </h1>

          <p className="mt-4 text-xl font-semibold text-[#7c5cfa] sm:text-2xl">
            Junior Full Stack Developer
          </p>

          <p className="mt-6 max-w-xl leading-relaxed text-gray-400">
            I am a Software Engineering student at Daffodil International
            University with a strong interest in Full-Stack Web Development. I
            have practical experience building web applications using React.js,
            Next.js, TypeScript, Node.js, and MongoDB. I enjoy learning new
            technologies, solving problems, and developing user-friendly
            applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-[#7c5cfa] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6a4be0]"
            >
              View My Projects
            </a>
            <a
              href="/resume.pdf"
              download="Amirul-Islam-Resume.pdf"
              className="rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: photo card */}
        <div className="mx-auto w-full max-w-md lg:max-w-lg">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-[#15152a]">
            <Image
              src="/images/hero.jpeg"
              alt="Amirul Islam"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              loading="eager"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
