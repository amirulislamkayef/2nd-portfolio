import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  techs: string[];
  liveUrl: string;
  repoUrl: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  techs,
  liveUrl,
  repoUrl,
}: ProjectCardProps) {
  const linkClass =
    "text-sm font-medium text-[#a78bfa] underline underline-offset-4 transition-colors hover:text-white";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#12121f] transition-all duration-300 hover:-translate-y-1 hover:border-[#7c5cfa]/40 hover:shadow-[0_16px_40px_-16px_rgba(124,92,250,0.45)]">
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#15152a]">
        <Image
          src={image}
          alt={`${title} preview`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[#12121f]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>

        <p className="mt-3 flex-1 leading-relaxed text-gray-400">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {techs.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#7c5cfa]/25 bg-[#7c5cfa]/10 px-3 py-1 text-xs font-medium text-[#a78bfa]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/5 pt-5">
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            View Details
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            Live Demo
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
