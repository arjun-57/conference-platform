import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { conferenceConfig } from "@/config/conference";

export const metadata: Metadata = {
  title: {
    default: `${conferenceConfig.name} | AI & Sustainable Green Energy`,
    template: `%s | ${conferenceConfig.name}`,
  },
  description: conferenceConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col w-full overflow-x-hidden" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
