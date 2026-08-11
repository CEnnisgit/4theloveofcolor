"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contact } from "@/lib/data/content";

export function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-warm-bg/90 border-b border-ink/5 px-6 lg:px-8 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 sm:gap-4 group">
          <Image
            src="/images/logo-emblem.png"
            alt="4 The Love of Color Emblem"
            width={48}
            height={48}
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-base sm:text-xl leading-none text-ink">
              4 The Love of Color
            </span>
            <span className="text-[9px] sm:text-xs text-ink-muted tracking-widest mt-1 uppercase font-semibold">
              Painting · Lakewood Ranch, FL
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-sm font-bold tracking-wide">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive
                    ? "text-terracotta"
                    : "text-ink hover:text-terracotta transition-colors"
                }
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <a
          href={contact.phoneHref}
          className="hidden md:inline-flex items-center justify-center px-6 py-3 rounded-sm bg-terracotta text-white text-sm font-bold tracking-wide shadow-lg hover:bg-[var(--color-terracotta-dark)] hover:-translate-y-0.5 transition-all"
        >
          Call {contact.phone}
        </a>
      </div>
    </header>
  );
}
