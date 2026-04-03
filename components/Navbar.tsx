"use client"

import { usePathname } from "next/navigation"
import { useTransition } from "./TransitionProvider"

export default function Navbar() {
  const pathname = usePathname()
  const { navigate } = useTransition()

  return (
    <div className="navbar">
      <div className="nav-left">SR</div>

      <div className="nav-right">
        <span
          className={pathname === "/home" ? "active" : ""}
          onClick={() => navigate("/home")}
        >
          Home
        </span>

        <span
          className={pathname === "/about" ? "active" : ""}
          onClick={() => navigate("/about")}
        >
          About
        </span>

        <span
          className={pathname === "/projects" ? "active" : ""}
          onClick={() => navigate("/projects")}
        >
          Projects
        </span>

        <span
          className={pathname === "/contact" ? "active" : ""}
          onClick={() => navigate("/contact")}
        >
          Contact
        </span>

        <a href="/resume.pdf" target="_blank" className="resume-btn">
          Résumé
        </a>
      </div>
    </div>
  )
}