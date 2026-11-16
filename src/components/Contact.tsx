import SectionHeading from "./SectionHeading";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-28">
      {/* Decorative glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-[#7c5cfa]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="CONTACT"
          title="Let's build something together."
          description="Open to internships, freelance work, and interesting collaborations."
        />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
