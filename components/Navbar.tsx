"use client"

import { useRouter, usePathname } from "next/navigation"
import { useState } from "react"
import dynamic from "next/dynamic"

const PortalTransition = dynamic(() => import("./PortalTransition"), {
  ssr: false,
})

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const [portal, setPortal] = useState(false)

  const navigate = (path: string) => {
    if (path === pathname) return

    setPortal(true)

    setTimeout(() => {
      router.push(path)
      setPortal(false)
    }, 2200)
  }

  const openResume = () => {
    window.open("/resume.pdf", "_blank")
  }

  return (
    <>
      {portal && <PortalTransition />}

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

          <button className="resume-btn" onClick={openResume}>
            Résumé
          </button>
        </div>
      </div>
    </>
  )
}