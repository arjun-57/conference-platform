import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { conference, siteUrl } from "@/config";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${conference.name} | AI & Sustainable Green Energy Technologies`,
    template: `%s | ${conference.name}`,
  },
  description: conference.description,
  applicationName: conference.name,
  keywords: [
    "AI-SGE 2027",
    "conference",
    "artificial intelligence",
    "sustainable energy",
    "green energy",
    "future electrification",
    "power electronics",
    "smart grid",
    "SRM Institute of Science and Technology",
    "UNITEN Malaysia",
    "Chennai",
  ],
  authors: [{ name: conference.host }],
  openGraph: {
    type: "website",
    siteName: conference.name,
    title: `${conference.name} | ${conference.fullName}`,
    description: conference.description,
    locale: "en_IN",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${conference.name} | AI & Sustainable Green Energy Technologies`,
    description: conference.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full ${inter.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full w-full flex-col overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-lg focus:bg-brand-dark focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
