"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-line bg-bg/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2 font-mono text-sm text-ink"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md border border-line bg-surface text-xs font-semibold text-brand">
            RK
          </span>
          <span className="text-ink-muted transition-colors group-hover:text-ink">
            ~/raphael
          </span>
        </Link>

        <ul className="flex items-center gap-1 sm:gap-2">
          {LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative block px-3 py-2 font-mono text-sm transition-colors",
                    active ? "text-ink" : "text-ink-faint hover:text-ink-muted"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-px h-px transition-colors",
                      active ? "bg-brand" : "bg-transparent"
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
