"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { conferenceConfig } from "@/config/conference";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Committee", href: "/committee" },
  { name: "For Authors", href: "/cfp" },
  { name: "Sponsorship", href: "/sponsor" },
  { name: "Venue", href: "/venue" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand/15 bg-white/95 shadow-sm backdrop-blur">
      <div className="container flex h-18 items-center justify-between gap-6">
        <Link href="/" className="min-w-0">
          <span className="block text-xl font-black tracking-tight text-brand-dark">{conferenceConfig.name}</span>
          <span className="hidden truncate text-xs text-muted-foreground sm:block">AI and Sustainable Green Energy</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium text-brand-dark/75 transition-colors hover:bg-brand-light/35 hover:text-brand-dark",
                pathname === item.href && "bg-brand-light/45 text-brand-dark"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger
            render={<Button variant="ghost" size="icon" className="shrink-0 text-brand-dark lg:hidden" />}
          >
            <Menu className="size-5" />
            <span className="sr-only">Open navigation</span>
          </SheetTrigger>
          <SheetContent side="right" className="border-brand/15 bg-background p-6">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <span className="block font-bold text-brand-dark">{conferenceConfig.name}</span>
              <span className="text-xs text-muted-foreground">March 2027 | Chennai</span>
            </Link>
            <nav className="mt-8 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-3 font-medium text-brand-dark/80 hover:bg-brand-light/35",
                    pathname === item.href && "bg-brand-light/45 text-brand-dark"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
