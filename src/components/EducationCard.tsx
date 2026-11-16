type EducationCardProps = {
  degree: string;
  institution: string;
  description: string;
  year: string;
};

export default function EducationCard({
  degree,
  institution,
  description,
  year,
}: EducationCardProps) {
  return (
    <article className="group flex flex-col gap-5 rounded-2xl border border-white/5 bg-[#12121f] p-7 transition-all duration-300 hover:border-[#7c5cfa]/40 sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:p-8">
      <div className="flex-1">
        {/* Graduation cap */}
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#7c5cfa]/15 text-[#7c5cfa] transition-colors duration-300 group-hover:bg-[#7c5cfa] group-hover:text-white">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
            aria-hidden
          >
            <path d="M22 10L12 5 2 10l10 5 10-5z" />
            <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
          </svg>
        </div>

        <h3 className="text-xl font-semibold text-white">{degree}</h3>
        <p className="mt-1.5 font-medium text-[#7c5cfa]">{institution}</p>
        <p className="mt-4 max-w-2xl leading-relaxed text-gray-400">
          {description}
        </p>
      </div>

      <span className="w-fit shrink-0 rounded-full border border-[#7c5cfa]/30 bg-[#7c5cfa]/15 px-4 py-1.5 text-sm font-medium text-[#a78bfa] transition-colors duration-300 group-hover:border-[#7c5cfa]/50 group-hover:text-[#c4b5fd]">
        {year}
      </span>
    </article>
  );
}
