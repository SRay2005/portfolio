"use client"

import Navbar from "@/components/Navbar"
import PageWrapper from "@/components/PageWrapper"
import { useEffect, useRef } from "react"

/* ─── Gravity Constellation Canvas (shared aesthetic) ──────────── */

function ConstellationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const animRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", handleMouse)

    const isMobile = window.innerWidth < 768
    const COUNT = isMobile ? 40 : 100
    const LINE_DIST = isMobile ? 100 : 150
    const GRAV_RADIUS = 250
    const G = 800

    type P = {
      x: number; y: number
      vx: number; vy: number
      bx: number; by: number
      r: number; o: number
    }

    const pts: P[] = []
    for (let i = 0; i < COUNT; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      pts.push({
        x, y, bx: x, by: y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2 + 0.5,
        o: Math.random() * 0.5 + 0.3,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      for (const p of pts) {
        const dx = mx - p.x
        const dy = my - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < GRAV_RADIUS && dist > 5) {
          const f = G / (dist * dist)
          p.vx += (dx / dist) * f * 0.016
          p.vy += (dy / dist) * f * 0.016
        }
        p.vx += (p.bx - p.x) * 0.0002
        p.vy += (p.by - p.y) * 0.0002
        p.vx *= 0.98
        p.vy *= 0.98
        p.x += p.vx
        p.y += p.vy
        if (p.x < -50) p.x = canvas.width + 50
        if (p.x > canvas.width + 50) p.x = -50
        if (p.y < -50) p.y = canvas.height + 50
        if (p.y > canvas.height + 50) p.y = -50
      }

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < LINE_DIST) {
            const a = (1 - d / LINE_DIST) * 0.2
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(255,179,71,${a})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      for (const p of pts) {
        const dx = mx - p.x
        const dy = my - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const prox = dist < GRAV_RADIUS ? 1 - dist / GRAV_RADIUS : 0
        const glow = p.o + prox * 0.5
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r + prox * 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,${179 + prox * 76},${71 + prox * 184},${glow})`
        ctx.fill()
      }

      animRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouse)
    }
  }, [])

  return <canvas ref={canvasRef} className="constellation-canvas" />
}

/* ─── Data ─────────────────────────────────────────────────────── */

const highlights = [
  {
    title: "Interdisciplinary Engineering",
    desc: "Dual-degree student in Electronics & Communication Engineering and Physics with strong mathematical and systems foundations.",
  },
  {
    title: "Applied Machine Learning",
    desc: "Worked on AI-based image forensics, survival analysis, and signal-level feature extraction using CNNs and ensemble models.",
  },
  {
    title: "Space Systems Exposure",
    desc: "Hands-on experience with CubeSat subsystems, multispectral imaging, and satellite payload design through Team Anant.",
  },
  {
    title: "Industry Experience",
    desc: "Industry exposure through internships, focusing on engineering workflows, automation, and real-world systems.",
  },
]

const stats = [
  { value: "B.E ECE",    label: "BITS Pilani" },
  { value: "M.S Physics", label: "BITS Pilani" },
  { value: "7.32",        label: "CGPA" },
  { value: "2028",        label: "Graduation" },
]

/* ─── About Page ───────────────────────────────────────────────── */

export default function About() {
  return (
    <PageWrapper>
      <div className="about-page">
        <Navbar />

        {/* Ambient background orbs */}
        <div className="ambient-orb orb-1" />
        <div className="ambient-orb orb-2" />
        <div className="ambient-orb orb-3" />

        <ConstellationCanvas />
        <div className="grid-overlay" />

        <div className="about-content">
          <h1 className="about-title anim-1">ABOUT ME</h1>
          <div className="about-accent-line anim-2" />

          <p className="about-subtitle anim-2">
            I work at the intersection of software, hardware, and intelligence
          </p>

          <div className="about-top anim-3">
            <img src="/profile.jpg" className="about-image" />

            <div className="about-bio">
              <h2>Who Am I?</h2>
              <p>
                I&apos;m a dual-degree undergraduate at BITS Pilani with interests in
                machine learning, space systems, and engineering design.
              </p>

              <div className="about-tags">
                <span>Machine Learning</span>
                <span>Image Processing</span>
                <span>Remote Sensing</span>
                <span>Software Development</span>
                <span>Python</span>
                <span>Electronics</span>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="about-highlights anim-4">
            {highlights.map((h, i) => (
              <div key={i} className="about-highlight-item">
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div className="about-stats anim-5">
            {stats.map((s, i) => (
              <div key={i} className="about-stat">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}