import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Development Stack",
    description:
      "A technology exploration platform where users can explore different technologies, discover tools, and build their own personalized development stack.",
    techs: ["React.js", "TypeScript", "Tailwind CSS", "Vite"],
    image: "/images/development-stack.jpg",
    liveUrl: "https://graceful-cat-7e06c9.netlify.app",
    repoUrl: "https://github.com/amirulislamkayef/5th-assignment-React",
  },
  {
    title: "Workout App",
    description:
      "A fitness platform where users can explore workouts, view exercise details, create personal workout plans, and save their favorite workouts.",
    techs: ["Next.js", "React.js", "Tailwind CSS"],
    image: "/images/workout.jpg",
    liveUrl: "https://6th-assignment-six.vercel.app/",
    repoUrl: "https://github.com/amirulislamkayef/6th-assignment",
  },
  {
    title: "Bazar Dor (বাজার দর)",
    description:
      "A Bengali product price-tracking platform that helps users explore daily product prices and compare market information.",
    techs: ["Next.js", "React.js", "Tailwind CSS"],
    image: "/images/bajardor.png",
    liveUrl: "https://bajar-dor-zeta.vercel.app/",
    repoUrl: "https://github.com/amirulislamkayef/bajar-dor",
  },
  {
    title: "Wanderlust",
    description:
      "A full-stack web application featuring user authentication, dynamic interfaces, backend functionality, and database integration.",
    techs: ["React.js", "Next.js", "Node.js", "MongoDB", "Better Auth"],
    image: "/images/wanderlust.jpg",
    liveUrl: "https://wanderlust-two-blush.vercel.app/",
    repoUrl: "https://github.com/amirulislamkayef/wanderlust-frontend",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 lg:py-28">
      {/* Decorative glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-1/4 h-80 w-80 rounded-full bg-[#7c5cfa]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="PROJECTS" title="Selected work" />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              techs={project.techs}
              liveUrl={project.liveUrl}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
