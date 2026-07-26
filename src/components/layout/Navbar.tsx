"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { conferenceConfig } from "@/config/conference";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Committee", href: "/committee" },
  { name: "Program", href: "/program" },
  { name: "Call for Papers", href: "/cfp" },
  { name: "For Attendees", href: "/attendees" },
  { name: "Registration", href: "/registration" },
  { name: "For Authors", href: "/authors" },
  { name: "Venue", href: "/venue" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand/15 bg-white/95 shadow-sm backdrop-blur">
      <div className="container flex h-18 items-center justify-between gap-6">
        <Link href="/" className="min-w-0 shrink-0">
          <span className="block text-xl font-black tracking-tight text-brand-dark">{conferenceConfig.name}</span>
          <span className="hidden truncate text-xs text-muted-foreground sm:block">AI and Sustainable Green Energy</span>
        </Link>

        {/* Desktop nav — hidden below xl to avoid overflow with 8 items */}
        <nav className="hidden items-center gap-0.5 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-2.5 py-2 text-[0.8rem] font-medium text-brand-dark/75 transition-colors hover:bg-brand-light/35 hover:text-brand-dark",
                pathname === item.href && "bg-brand-light/45 text-brand-dark"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile / tablet hamburger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger
            render={<Button variant="ghost" size="icon" className="shrink-0 text-brand-dark xl:hidden" />}
          >
            <Menu className="size-5" />
            <span className="sr-only">Open navigation</span>
          </SheetTrigger>
          <SheetContent side="right" className="border-brand/15 bg-background p-0 w-72">
            <div className="flex items-center justify-between border-b border-brand/15 px-6 py-4">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <span className="block font-bold text-brand-dark">{conferenceConfig.name}</span>
                <span className="text-xs text-muted-foreground">March 2027 · Chennai</span>
              </Link>
            </div>
            <nav className="flex flex-col gap-1 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-4 py-3 font-medium text-brand-dark/80 hover:bg-brand-light/35 hover:text-brand-dark transition-colors",
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
