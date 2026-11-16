import SectionHeading from "./SectionHeading";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    index: "01",
    title: "Personal Projects",
    description:
      "Building full-stack web applications to improve my development skills.",
  },
  {
    index: "02",
    title: "Practical Experience",
    description:
      "Working on real-world inspired projects involving frontend, backend, databases, and authentication.",
  },
  {
    index: "03",
    title: "Continuous Learning",
    description:
      "Exploring modern web technologies, software engineering concepts, and problem-solving.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 lg:py-28"
    >
      {/* Decorative glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/3 h-80 w-80 rounded-full bg-[#7c5cfa]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="EXPERIENCE"
          title="Currently building & learning"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.index}
              index={experience.index}
              title={experience.title}
              description={experience.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
