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

    // Keep changing images like Marvel panels
    const imageInterval = setInterval(() => {
      tiles.forEach((img) => {
        const random = Math.floor(Math.random() * 11) + 1
        img.setAttribute("src", `/marvel/${random}.jpg`)
      })
    }, 150)

    const tl = gsap.timeline()

    // Slow zoom out of grid
    tl.fromTo(
      gridRef.current,
      { scale: 1.5 },
      { scale: 1, duration: 5, ease: "power2.out" }
    )

      // Cinematic text reveal (blur -> sharp)
      .fromTo(
        textRef.current,
        { opacity: 0, scale: 1.8, filter: "blur(12px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 2 },
        "-=2"
      )

      // Hold text on screen a bit
      .to({}, { duration: 1 })

      // Fade everything out
      .to([gridRef.current, textRef.current], {
        opacity: 0,
        duration: 1.5,
      })

      // Go to home
      .call(() => {
        clearInterval(imageInterval)
        router.push("/home")
      })
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