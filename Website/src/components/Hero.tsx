import { profile } from "@/data/site";
import Image from "next/image";

const accents = [
  "border-glow-green bg-matrix-green/100 shadow-[0_0_24px_rgba(57,255,20,0.2)]",
  "border-glow-cyan bg-neon-cyan/100 shadow-[0_0_24px_rgba(0,255,245,0.2)]",
  "border-glow-pink bg-neon-pink/100 shadow-[0_0_24px_rgba(255,46,136,0.2)]",
  "border-glow-yellow bg-neon-yellow/100 shadow-[0_0_24px_rgba(246,255,0,0.2)]",
];

const companyLogos = [
  { src: "/company-logos/american-honda.png", alt: "American Honda" },
  { src: "/company-logos/hershey.png", alt: "The Hershey Company" },
  { src: "/company-logos/paychex.png", alt: "Paychex" },
  { src: "/company-logos/jm-family.png", alt: "JM Family" },
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

      <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {companyLogos.map((logo, i) => (
          <div
            key={i}
            className={`scanline-card relative aspect-square overflow-hidden rounded-none border ${accents[i % accents.length]}`}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain p-6 sm:p-8"
              sizes="(min-width: 640px) 25vw, 50vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
