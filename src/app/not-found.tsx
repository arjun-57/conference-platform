import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { navItems } from "@/config";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center py-24 text-center lg:py-32">
      <p className="text-sm font-bold uppercase tracking-widest text-brand">
        Error 404
      </p>
      <h1 className="mt-3 text-4xl font-black text-brand-dark sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-5 max-w-xl leading-8 text-muted-foreground">
        The page you are looking for does not exist or may have moved. Use the
        links below to continue.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-dark px-7 py-3 font-bold text-white transition-colors hover:bg-brand"
      >
        Back to home <ArrowRight className="size-4" />
      </Link>

      <nav className="mt-10 flex flex-wrap justify-center gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full border border-brand/25 px-4 py-2 text-sm font-medium text-brand-dark transition-colors hover:bg-brand-light/35"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
