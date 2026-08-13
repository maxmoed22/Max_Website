import { profile } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mx-auto mt-auto max-w-6xl border-t border-matrix-green/10 px-6 py-8 text-xs uppercase tracking-wider text-foreground/30">
      <p>
        &gt; © {new Date().getFullYear()} {profile.fullName}. Built with
        Next.js &amp; Tailwind CSS.
      </p>
    </footer>
  );
}
