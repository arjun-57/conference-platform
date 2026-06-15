"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { conferenceConfig } from "@/config/conference";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Committee", href: "/committee" },
  { name: "CFP", href: "/cfp" },
  { name: "Sponsor", href: "/sponsor" },
  { name: "Venue", href: "/venue" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand/15 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
          <span className="font-bold text-lg text-brand-dark">{conferenceConfig.name}</span>
          <span className="hidden lg:inline text-xs text-muted-foreground font-normal truncate max-w-[280px]">
            AI & Sustainable Green Energy
          </span>
        </Link>

        <div className="hidden lg:flex lg:items-center lg:gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-brand-dark/80 hover:text-brand-dark",
                      pathname === item.href && "bg-brand-light/40 text-brand-dark font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button
            className="ml-3 bg-brand-dark hover:bg-brand-dark/90 rounded-full"
            render={<Link href="/auth/signup" />}
          >
            Register
          </Button>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <Button
            size="sm"
            className="bg-brand-dark hover:bg-brand-dark/90 rounded-full"
            render={<Link href="/auth/signup" />}
          >
            Register
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-brand-dark hover:bg-brand-light/40"
                />
              }
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-brand/15">
              <Link
                href="/"
                className="flex flex-col"
                onClick={() => setIsOpen(false)}
              >
                <span className="font-bold text-brand-dark">{conferenceConfig.name}</span>
                <span className="text-xs text-muted-foreground">March 2027 · Chennai</span>
              </Link>
              <nav className="mt-8 flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3 py-2.5 rounded-lg text-brand-dark/80 transition-colors hover:bg-brand-light/30 hover:text-brand-dark",
                      pathname === item.href && "bg-brand-light/40 text-brand-dark font-medium"
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
      </div>
    </header>
  );
}
