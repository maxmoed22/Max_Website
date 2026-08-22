import { profile } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-6 font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-[0.3em] text-glow-magenta">
        Contact
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

      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold uppercase tracking-[0.18em]">
        {profile.socials.map((social, i) => {
          const colors = [
            "text-neon-cyan drop-shadow-[0_0_2px_rgba(0,255,245,0.4)] hover:drop-shadow-[0_0_3px_rgba(0,255,245,0.55)]",
            "text-neon-pink drop-shadow-[0_0_2px_rgba(255,46,136,0.4)] hover:drop-shadow-[0_0_3px_rgba(255,46,136,0.55)]",
            "text-neon-yellow drop-shadow-[0_0_2px_rgba(246,255,0,0.4)] hover:drop-shadow-[0_0_3px_rgba(246,255,0,0.55)]",
          ];
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className={`transition-[color,filter] ${colors[i % colors.length]}`}
            >
              {social.label}
            </a>
          );
        })}
      </div>
    </section>
  );
}
