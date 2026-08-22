"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, profile } from "@/data/site";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-matrix-green/20 bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#top"
          className="font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-[0.2em] text-glow-green"
        >
          {profile.name}_
        </Link>

        <ul className="hidden gap-8 text-sm uppercase tracking-wider text-white sm:flex">
          {navLinks.map((link, i) => {
            const colors = [
              "hover:text-neon-cyan",
              "hover:text-neon-pink",
              "hover:text-matrix-green",
              "hover:text-neon-yellow",
              "hover:text-neon-magenta",
            ];
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`transition-colors ${colors[i % colors.length]}`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          className="text-sm uppercase tracking-wider text-matrix-green sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          [{open ? "x" : "menu"}]
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-matrix-green/20 px-6 pb-4 text-sm uppercase tracking-wider sm:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 text-white hover:text-matrix-green"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
