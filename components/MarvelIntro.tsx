"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { useRouter } from "next/navigation"

export default function MarvelIntro() {
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const textMaskRef = useRef<HTMLHeadingElement>(null)
  const textSolidRef = useRef<HTMLHeadingElement>(null)
  const flashRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tiles = gridRef.current?.querySelectorAll("img")
    if (!tiles) return

    // Initial setup for 3D camera zoom and tilts
    gsap.set(gridRef.current, {
      scale: 1.4,
      rotationX: 12,
      rotationY: -10,
      rotationZ: -5,
      transformPerspective: 1000,
    })

    gsap.set(textMaskRef.current, {
      scale: 1.1,
      opacity: 1,
    })

    gsap.set(textSolidRef.current, {
      scale: 1.1,
      opacity: 0,
      filter: "blur(10px)",
    })

    // Variable page flip interval (decelerating flipbook effect)
    let currentDelay = 35 // starts at hyper speed
    let isRunning = true
    let timeoutId: NodeJS.Timeout

    const flipImages = () => {
      if (!isRunning) return

      tiles.forEach((img) => {
        // Randomly skip some tiles to simulate organic fanning pages
        if (Math.random() > 0.4) {
          const random = Math.floor(Math.random() * 11) + 1
          img.setAttribute("src", `/marvel/${random}.jpg`)
        }
      })

      // Random flash on a single tile
      const randomTile = tiles[Math.floor(Math.random() * tiles.length)]
      if (randomTile && Math.random() > 0.5) {
        gsap.fromTo(
          randomTile,
          { filter: "brightness(2.5)" },
          { filter: "brightness(1)", duration: 0.15 }
        )
      }

      // Decelerate the speed slowly
      if (currentDelay < 250) {
        currentDelay += 3.5
      }

      timeoutId = setTimeout(flipImages, currentDelay)
    }

    flipImages()

    // Cinematic GSAP Timeline
    const tl = gsap.timeline({
      onComplete: () => {
        isRunning = false
        clearTimeout(timeoutId)
        router.push("/home")
      }
    })

    tl.to(gridRef.current, {
      scale: 1.05,
      rotationX: 5,
      rotationY: -3,
      rotationZ: -1,
      duration: 5.5,
      ease: "power1.out",
    })
    // Sweeping page flash lines (screen flash)
    .to(flashRef.current, {
      opacity: 0.8,
      duration: 0.08,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    }, 1.2)
    .to(flashRef.current, {
      opacity: 0.5,
      duration: 0.06,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    }, 2.5)
    // Slowly transition logo from mask cut-out (transparent letters) to solid golden-gradient
    .to(textSolidRef.current, {
      opacity: 1,
      scale: 1.02,
      filter: "blur(0px)",
      duration: 2.2,
      ease: "power2.inOut",
    }, "-=2.8")
    // Fade out mask text to allow solid text to completely take over
    .to(textMaskRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
    }, "-=2.2")
    // Cinematic logo flare / zoom in at the end
    .to([textSolidRef.current, gridRef.current], {
      scale: 1.2,
      opacity: 0,
      filter: "blur(15px)",
      duration: 1.5,
      ease: "power3.in",
    }, "-=0.8")

    return () => {
      isRunning = false
      clearTimeout(timeoutId)
      tl.kill()
    }
  }, [router])

  return (
    <div className="intro" ref={containerRef}>
      {/* 3D Comic Grid */}
      <div className="marvel-grid" ref={gridRef}>
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="tile">
            <img src={`/marvel/${(i % 11) + 1}.jpg`} alt="Comic page" />
          </div>
        ))}
      </div>

      {/* Crimson-Red & Vignette Overlay */}
      <div className="intro-overlay"></div>
      <div className="vignette"></div>

      {/* Screen Page-Flash sweep */}
      <div className="page-flash" ref={flashRef}></div>

      {/* Mask overlay container - mix-blend-mode: multiply renders the white text transparent */}
      <div className="marvel-mask">
        <h1 ref={textMaskRef} className="marvel-mask-text">
          SANNIDHYA RAY
        </h1>
      </div>

      {/* Solid text that fades in at the end */}
      <h1 ref={textSolidRef} className="marvel-solid-text">
        SANNIDHYA RAY
      </h1>
    </div>
  )
}