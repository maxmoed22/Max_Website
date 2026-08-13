import { experience } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-8 font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-[0.3em] text-glow-cyan">
        // Experience
      </h2>

      <ol className="flex flex-col">
        {experience.map((item, i) => {
          const periodColors = [
            "text-neon-cyan",
            "text-neon-pink",
            "text-neon-yellow",
          ];
          return (
            <li
              key={i}
              className="grid grid-cols-1 gap-2 border-t border-matrix-green/15 py-8 first:border-t-0 sm:grid-cols-[160px_1fr]"
            >
              <span className={`text-sm uppercase tracking-wider ${periodColors[i % periodColors.length]}`}>
                {item.period}
              </span>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold uppercase tracking-wide text-matrix-green">
                  {item.role} · <span className="font-normal text-foreground/70">{item.company}</span>
                </h3>
                <p className="mt-2 max-w-2xl text-foreground/60">
                  {item.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
