"use client"

import { useRouter } from "next/navigation"
import MarvelIntro from "@/components/MarvelIntro"

export default function IntroPage() {
  const router = useRouter()

  const skipIntro = () => {
    router.push("/home")
  }

  return (
    <>
      <MarvelIntro />
      <button className="skip-btn" onClick={skipIntro}>
        Skip Intro →
      </button>
    </>
  )
}