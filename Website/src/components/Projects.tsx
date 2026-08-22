import { projects } from "@/data/site";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-8 font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-[0.3em] text-glow-green">
        Selected Work
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-none border border-matrix-green/15 bg-black/30 transition-all hover:border-matrix-green/60 hover:shadow-[0_0_24px_rgba(57,255,20,0.15)]"
          >
            <div className="scanline-card relative aspect-video w-full overflow-hidden bg-gradient-to-br from-matrix-green/5 to-neon-cyan/5 transition-transform duration-300 group-hover:scale-[1.02]">
              {project.image && (
                <Image
                  src={project.image}
                  alt={`${project.title} thumbnail`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              )}
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold uppercase tracking-wide text-matrix-green transition-colors group-hover:text-glow-green">
                {project.title}
              </h3>
              <p className="text-sm text-foreground/60">
                {project.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, i) => {
                  const tagColors = [
                    "border-neon-magenta/30 text-neon-magenta",
                    "border-neon-pink/30 text-neon-pink",
                    "border-neon-yellow/30 text-neon-yellow",
                  ];
                  return (
                    <span
                      key={tag}
                      className={`rounded-none border px-3 py-1 text-xs uppercase tracking-wider ${tagColors[i % tagColors.length]}`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
