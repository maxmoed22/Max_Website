import { about } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <h2 className="mb-4 font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-[0.3em] text-glow-magenta">
            {about.heading}
          </h2>
          <p className="text-xl leading-relaxed text-foreground/80 sm:text-2xl">
            {about.paragraphs[0]}
          </p>
        </div>
        <div>
          <h2 className="mb-4 font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-[0.3em] text-glow-cyan">
            {about.subheading}
          </h2>
          <p className="text-xl leading-relaxed text-foreground/80 sm:text-2xl">
            {about.paragraphs[1]}
          </p>
        </div>
      </div>
    </section>
  );
}
