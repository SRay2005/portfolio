"use client"

import Navbar from "@/components/Navbar"
import PageWrapper from "@/components/PageWrapper"
import { usePageTransition } from "@/components/TransitionProvider"
import { useEffect, useRef, useState } from "react"

/* ─── Gravity Constellation Canvas ─────────────────────────────── */

function GravityCanvas() {
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
    const COUNT = isMobile ? 60 : 150
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

      // Constellation lines
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < LINE_DIST) {
            const a = (1 - d / LINE_DIST) * 0.25
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(255,179,71,${a})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Particles
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

/* ─── Magnetic Text ────────────────────────────────────────────── */

function MagneticText({ text }: { text: string }) {
  const charsRef = useRef<(HTMLSpanElement | null)[]>([])
  const animRef = useRef<number>(0)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const offsets = useRef(text.split("").map(() => ({ dx: 0, dy: 0 })))
  const vels = useRef(text.split("").map(() => ({ dx: 0, dy: 0 })))

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", handleMouse)

    const THRESHOLD = 120
    const STRENGTH = 15
    const SPRING = 0.06
    const DAMPING = 0.9

    const animate = () => {
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      for (let i = 0; i < charsRef.current.length; i++) {
        const el = charsRef.current[i]
        if (!el) continue

        const rect = el.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        // Original position = current visual position minus our applied offset
        const ox = cx - offsets.current[i].dx
        const oy = cy - offsets.current[i].dy

        const dx = ox - mx
        const dy = oy - my
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < THRESHOLD && dist > 0) {
          const f = ((THRESHOLD - dist) / THRESHOLD) * STRENGTH
          vels.current[i].dx += (dx / dist) * f
          vels.current[i].dy += (dy / dist) * f
        }

        // Spring back
        vels.current[i].dx -= offsets.current[i].dx * SPRING
        vels.current[i].dy -= offsets.current[i].dy * SPRING
        // Damp
        vels.current[i].dx *= DAMPING
        vels.current[i].dy *= DAMPING

        offsets.current[i].dx += vels.current[i].dx
        offsets.current[i].dy += vels.current[i].dy

        if (Math.abs(offsets.current[i].dx) > 0.1 || Math.abs(offsets.current[i].dy) > 0.1) {
          el.style.transform = `translate(${offsets.current[i].dx}px, ${offsets.current[i].dy}px)`
        } else {
          offsets.current[i].dx = 0
          offsets.current[i].dy = 0
          el.style.transform = ""
        }
      }
      animRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener("mousemove", handleMouse)
    }
  }, [text])

  return (
    <h1 className="magnetic-text">
      {text.split("").map((ch, i) => (
        <span
          key={i}
          ref={(el) => { charsRef.current[i] = el }}
          className={`magnetic-char${ch === " " ? " magnetic-space" : ""}`}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </h1>
  )
}

/* ─── Scramble / Decode Text ───────────────────────────────────── */

function ScrambleText({ texts }: { texts: string[] }) {
  const [display, setDisplay] = useState("")
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*"
    const target = texts[idx]
    let resolved = 0
    let frame = 0

    const interval = setInterval(() => {
      frame++
      if (frame % 3 === 0 && resolved < target.length) resolved++

      let result = ""
      for (let i = 0; i < target.length; i++) {
        result += i < resolved ? target[i] : charset[Math.floor(Math.random() * charset.length)]
      }
      setDisplay(result)

      if (resolved >= target.length) {
        clearInterval(interval)
        setTimeout(() => setIdx((p) => (p + 1) % texts.length), 2500)
      }
    }, 40)

    return () => clearInterval(interval)
  }, [idx, texts])

  return (
    <p className="scramble-tagline">
      {display}<span className="typing-cursor">_</span>
    </p>
  )
}

/* ─── Home Page ────────────────────────────────────────────────── */

export default function Home() {
  const { navigate } = usePageTransition()

  return (
    <PageWrapper>
      <div className="home">
        <Navbar />

        {/* Ambient background orbs */}
        <div className="ambient-orb orb-1" />
        <div className="ambient-orb orb-2" />
        <div className="ambient-orb orb-3" />

        <GravityCanvas />
        <div className="grid-overlay" />

        {/* Center content */}
        <div className="home-center">
          <p className="home-greeting">Hello, I&apos;m</p>
          <MagneticText text="SANNIDHYA RAY" />
          <ScrambleText
            texts={[
              "Build",
              "Deploy",
              "Scale",
              "Innovate"
            ]}
          />
          <div className="home-cta-row">
            <button className="cta-pill cta-primary" onClick={() => navigate("/projects")}>
              Explore Projects →
            </button>
            <button className="cta-pill cta-secondary" onClick={() => navigate("/contact")}>
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}