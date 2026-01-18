"use client";

import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur">
      <Container>
        <nav className="h-16 flex items-center justify-between">
          <span className="font-semibold">SR</span>

          <div className="flex items-center gap-6 text-sm text-gray-300">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}
