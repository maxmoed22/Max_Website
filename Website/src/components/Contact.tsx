import { profile } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-6 font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-[0.3em] text-glow-magenta">
        // Contact
      </h2>
      <h3 className="max-w-2xl font-[family-name:var(--font-heading)] text-3xl font-extrabold uppercase tracking-tight text-glow-green sm:text-5xl">
        Let&apos;s work together.
      </h3>
      <p className="mt-6 max-w-xl text-foreground/60">
        Have a project in mind or just want to say hi? Reach out.
      </p>

      <a
        href={`mailto:${profile.email}`}
        className="btn-glow-green mt-8 inline-block rounded-none px-8 py-4 text-sm font-bold uppercase tracking-widest transition-shadow"
      >
        {profile.email}
      </a>

      <div className="mt-10 flex gap-6 text-sm uppercase tracking-wider text-foreground/60">
        {profile.socials.map((social, i) => {
          const colors = [
            "hover:text-neon-cyan",
            "hover:text-neon-pink",
            "hover:text-neon-yellow",
          ];
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className={`transition-colors ${colors[i % colors.length]}`}
            >
              {social.label}
            </a>
          );
        })}
      </div>
    </section>
  );
}
