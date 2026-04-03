"use client"

import { useEffect, useState } from "react"

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Wait 200ms so the portal overlay can close before page fades in
    const t = setTimeout(() => setReady(true), 200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      className="page"
      style={{ animationPlayState: ready ? "running" : "paused" }}
    >
      {children}
    </div>
  )
}