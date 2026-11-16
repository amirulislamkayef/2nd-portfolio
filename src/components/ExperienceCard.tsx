type ExperienceCardProps = {
  index: string;
  title: string;
  description: string;
};

export default function ExperienceCard({
  index,
  title,
  description,
}: ExperienceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-white/5 bg-[#12121f] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#7c5cfa]/40 hover:shadow-[0_16px_40px_-16px_rgba(124,92,250,0.45)]">
      <span className="font-mono text-sm font-semibold tracking-widest text-[#7c5cfa]">
        {index}
      </span>

      <div aria-hidden className="mt-4 h-px w-10 bg-[#7c5cfa]/40 transition-all duration-300 group-hover:w-20 group-hover:bg-[#7c5cfa]" />

      <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>

      <p className="mt-3 leading-relaxed text-gray-400">{description}</p>
    </article>
  );
}
