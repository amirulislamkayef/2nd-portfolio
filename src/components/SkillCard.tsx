import type { ReactNode } from "react";

type SkillCardProps = {
  title: string;
  tags: string[];
  icon: ReactNode;
};

export default function SkillCard({ title, tags, icon }: SkillCardProps) {
  return (
    <div className="group rounded-2xl border border-white/5 bg-[#12121f] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#7c5cfa]/40 hover:shadow-[0_16px_40px_-16px_rgba(124,92,250,0.45)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7c5cfa]/15 text-[#7c5cfa] transition-colors duration-300 group-hover:bg-[#7c5cfa] group-hover:text-white">
        {icon}
      </div>

      <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>

      <div className="mt-4 flex flex-wrap gap-2.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#7c5cfa]/25 bg-[#7c5cfa]/10 px-3.5 py-1.5 text-sm text-[#a78bfa] transition-colors duration-300 group-hover:border-[#7c5cfa]/40 group-hover:text-[#c4b5fd]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
