import { profile } from "@/data/site";

const accents = [
  "border-glow-green",
  "border-glow-cyan",
  "border-glow-pink",
  "border-glow-yellow",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-20 pt-20 sm:pt-28"
    >
      <p className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-[0.3em] text-glow-cyan">
        &gt; {profile.role}
      </p>
      <h1 className="font-[family-name:var(--font-heading)] text-5xl font-extrabold uppercase leading-[1.05] tracking-tight text-glow-green sm:text-7xl">
        Hello, my
        <br />
        name is {profile.name}.
      </h1>
      <p className="max-w-xl text-lg text-foreground/70">
        {profile.tagline}
      </p>

      <div className="mt-4 flex flex-wrap gap-4">
        <a
          href="#work"
          className="btn-glow-green rounded-none px-6 py-3 text-sm font-bold uppercase tracking-widest transition-shadow"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="border-glow-cyan rounded-none border px-6 py-3 text-sm font-bold uppercase tracking-widest text-neon-cyan transition-colors hover:bg-neon-cyan/10"
        >
          Get in touch
        </a>
      </div>

      {/* Image showcase grid — replace placeholders with real project/work imagery */}
      <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`scanline-card relative aspect-square overflow-hidden rounded-none border bg-black/40 ${accents[i % accents.length]}`}
          >
            <span className="absolute bottom-2 left-2 font-[family-name:var(--font-mono-retro)] text-[10px] uppercase tracking-widest text-foreground/30">
              0{i + 1}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
