import SectionHeading from "./SectionHeading";
import SkillCard from "./SkillCard";

const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-6 w-6",
};

const categories = [
  {
    title: "Frontend",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps} aria-hidden>
        <path d="M8 6L3 12l5 6" />
        <path d="M16 6l5 6-5 6" />
      </svg>
    ),
  },
  {
    title: "Backend",
    tags: ["Node.js", "Express.js", "MongoDB"],
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps} aria-hidden>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
        <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    ),
  },
  {
    title: "Tools",
    tags: ["Git", "GitHub", "VS Code", "Postman"],
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps} aria-hidden>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 lg:py-28">
      {/* Decorative glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-[#7c5cfa]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#7c5cfa]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="SKILLS"
          title="Tools I work with"
          description="The technologies I use daily to build fast, reliable, and user-friendly web applications."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              tags={category.tags}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
