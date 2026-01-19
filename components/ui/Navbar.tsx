"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

/* 🔴 Resume link (external) */
const resumeLink = {
  name: "Resume",
  href: "/resume.pdf",
};

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

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
          <Link href="/" className="font-semibold tracking-wide">
            SR
          </Link>

          {/* ================= Desktop ================= */}
          <div className="hidden md:flex items-center gap-8 text-sm">
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

            {/* 🔴 Resume boxed button (desktop) */}
            <a
              href={resumeLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-3 py-1.5 rounded-md
                border border-white/20
                text-gray-200
                hover:border-white/40 hover:text-white
                transition
              "
            >
              Resume
            </a>
          </div>

          {/* ================= Mobile toggle ================= */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </Container>

      {/* ================= Mobile Menu ================= */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur border-t border-white/10">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
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

            {/* 🔴 Resume boxed button (mobile) */}
            <a
              href={resumeLink.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="
                mt-2 inline-flex w-fit
                px-3 py-1.5 rounded-md
                border border-white/20
                text-gray-200
                hover:border-white/40 hover:text-white
                transition
              "
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
