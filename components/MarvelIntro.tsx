"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { useRouter } from "next/navigation"

export default function MarvelIntro() {
  const router = useRouter()
  const gridRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const tiles = gridRef.current?.querySelectorAll("img")
    if (!tiles) return

    // Lock initial states before first paint — prevents FOUC
    gsap.set(gridRef.current, { scale: 1.5 })
    gsap.set(textRef.current, {
      opacity: 0,
      scale: 1.8,
      filter: "blur(12px)",
      xPercent: -50,
      yPercent: -50,
    })

    const imageInterval = setInterval(() => {
      tiles.forEach((img) => {
        const random = Math.floor(Math.random() * 11) + 1
        img.setAttribute("src", `/marvel/${random}.jpg`)
      })
    }, 150)

    const tl = gsap.timeline()

    tl.fromTo(
      gridRef.current,
      { scale: 1.5 },
      { scale: 1, duration: 5, ease: "power2.out" }
    )
      .fromTo(
        textRef.current,
        { opacity: 0, scale: 1.8, filter: "blur(12px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 3 },
        "-=2"
      )
      .to({}, { duration: 2.5 })
      .to([gridRef.current, textRef.current], { opacity: 0, duration: 1.5 })
      .call(() => {
        clearInterval(imageInterval)
        router.push("/home")
      })

    return () => {
      clearInterval(imageInterval)
      tl.kill()
    }
  }, [])

  return (
    <div className="intro">
      <div className="marvel-grid" ref={gridRef}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="tile">
            <img src={`/marvel/${(i % 6) + 1}.jpg`} />
          </div>
        ))}
      </div>
      <div className="intro-overlay"></div>
      <h1 ref={textRef} className="marvel-text">
        SANNIDHYA RAY
      </h1>
    </div>
  )
}