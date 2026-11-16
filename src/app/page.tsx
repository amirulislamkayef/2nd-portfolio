import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0b16]">
      <Navbar />
      <main className="pt-[76px]">
        <Hero />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
        {/* More sections go here */}
      </main>
      <Footer />
    </div>
  );
}
