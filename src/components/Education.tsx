import SectionHeading from "./SectionHeading";
import EducationCard from "./EducationCard";

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden py-24 lg:py-28">
      {/* Decorative glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-32 h-72 w-72 rounded-full bg-[#7c5cfa]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="EDUCATION" title="Where I studied" />

        <div className="mt-14">
          <EducationCard
            degree="B.Sc in Software Engineering"
            institution="Daffodil International University"
            description="Coursework covers data structures, algorithms, databases, web engineering, and artificial intelligence — building a strong foundation in both full-stack development and intelligent systems."
            year="Expected 2029"
          />
        </div>
      </div>
    </section>
  );
}
