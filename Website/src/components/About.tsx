import { about } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-8 font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-[0.3em] text-glow-magenta">
        // {about.heading}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {about.paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-xl leading-relaxed text-foreground/80 sm:text-2xl"
          >
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
