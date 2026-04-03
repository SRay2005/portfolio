"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import MarvelIntro from "@/components/MarvelIntro"

export default function IntroPage() {
  const router = useRouter()
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => router.push("/home"), 600)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const skipIntro = () => {
    setFadeOut(true)
    setTimeout(() => router.push("/home"), 600)
  }

  return (
    <div className={`intro ${fadeOut ? "intro-fade" : ""}`}>
      <MarvelIntro />

      <button className="skip-btn" onClick={skipIntro}>
        Skip Intro →
      </button>
    </div>
  )
}