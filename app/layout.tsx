import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Synex — Where Tech Minds Connect",
  description: "The social platform for developers, gamers, designers, and tech enthusiasts. Connect with your tribe, join events, find mentors, and build meaningful relationships in the tech world.",
  keywords: ["tech social network", "developer community", "programmer networking", "tech events", "mentorship platform", "coding community"],
  authors: [{ name: "Synex" }],
  creator: "Synex",
  openGraph: {
    title: "Synex — Where Tech Minds Connect",
    description: "Connect with developers, gamers, and tech enthusiasts. Join events, find mentors, and build your tech network.",
    url: "https://www.synexapp.com",
    siteName: "Synex",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synex — Where Tech Minds Connect",
    description: "The social platform for developers, gamers, and tech enthusiasts.",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://www.synexapp.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
