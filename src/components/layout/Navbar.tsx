"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { conference, navItems } from "@/config";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand/15 bg-white/95 shadow-sm backdrop-blur">
      <div className="container flex h-24 items-center justify-between gap-4 py-3 sm:h-28">
        <Link href="/" className="flex items-center gap-4 min-w-0 shrink-0">
          <Image
            src="/images/logo.jpeg"
            alt={`${conference.name} Logo`}
            width={120}
            height={120}
            className="h-20 w-auto object-contain sm:h-24 lg:h-26"
            priority
          />
          <div>
            <span className="block text-xl font-black tracking-tight text-brand-dark sm:text-2xl">
              {conference.name}
            </span>
            <span className="hidden truncate text-xs font-medium text-brand-dark/70 sm:block">
              AI and Sustainable Green Energy
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={cn(
                "rounded-lg px-2 py-2 text-[0.78rem] font-medium whitespace-nowrap text-brand-dark/75 transition-colors hover:bg-brand-light/35 hover:text-brand-dark",
                pathname === item.href && "bg-brand-light/45 text-brand-dark"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile / tablet menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="shrink-0 text-brand-dark lg:hidden"
              />
            }
          >
            <Menu className="size-5" />
            <span className="sr-only">Open navigation menu</span>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 border-brand/15 bg-background p-0"
          >
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <div className="border-b border-brand/15 px-6 py-4">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                <Image
                  src="/images/logo.jpeg"
                  alt={`${conference.name} Logo`}
                  width={90}
                  height={90}
                  className="h-16 w-auto object-contain"
                />
                <div>
                  <span className="block font-bold text-brand-dark">
                    {conference.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    March 2027 · Chennai
                  </span>
                </div>
              </Link>
            </div>
            <nav className="flex flex-col gap-1 p-4">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                aria-current={pathname === "/" ? "page" : undefined}
                className={cn(
                  "rounded-lg px-4 py-3 font-medium text-brand-dark/80 transition-colors hover:bg-brand-light/35 hover:text-brand-dark",
                  pathname === "/" && "bg-brand-light/45 text-brand-dark"
                )}
              >
                Home
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-4 py-3 font-medium text-brand-dark/80 transition-colors hover:bg-brand-light/35 hover:text-brand-dark",
                    pathname === item.href && "bg-brand-light/45 text-brand-dark"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
