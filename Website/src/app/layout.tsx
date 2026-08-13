import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-mono-retro",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Max — Software Engineer",
  description: "Career and project portfolio of Max.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${orbitron.variable} ${shareTechMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
