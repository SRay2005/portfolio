"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="h-16 flex items-center justify-between">
          
          {/* Logo */}
          <Link
            href="/"
            className="font-semibold tracking-wide"
          >
            SR
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-8 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "transition-colors",
                  isActive(link.href)
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}

            {/* 🔴 ADDED: Resume link (opens resume.pdf) */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-white/40 transition"
            >
              Resume
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}
