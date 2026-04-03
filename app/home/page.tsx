"use client"

import Navbar from "@/components/Navbar"
import { useEffect, useRef } from "react"

export default function Home() {
  const bgRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  // Parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40
      const y = (e.clientY / window.innerHeight - 0.5) * 40

      if (bgRef.current) {
        bgRef.current.style.transform = `translate(${x}px, ${y}px)`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Particles
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    type Particle = {
      x: number
      y: number
      radius: number
      dx: number
      dy: number
    }

    const particles: Particle[] = []

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "white"

      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()

        p.x += p.dx
        p.y += p.dy

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <div className="home">
      <Navbar />

      <canvas ref={canvasRef} className="particles"></canvas>
      <div className="parallax-bg" ref={bgRef}></div>
      <div className="grid-overlay"></div>

      <div className="center">
        <h1 className="hero">SANNIDHYA RAY</h1>
        <p className="subtitle">Electronics • Physics • Machine Learning</p>
      </div>
    </div>
  )
}