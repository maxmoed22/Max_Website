import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "Max Moed Career Portfolio",
  description: "Career and project portfolio of Max.",
  metadataBase: new URL("https://maxmoed.com"),
  openGraph: {
    title: "Max Moed Career Portfolio",
    description: "Career and project portfolio of Max.",
    url: "https://maxmoed.com",
    siteName: "Max Moed",
    images: [
      {
        url: "/og-image.png",
        width: 1187,
        height: 630,
        alt: "Max Moed Career Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${orbitron.variable} ${shareTechMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
