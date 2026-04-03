"use client"

import { useEffect, useState } from "react"

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Delay fade-in slightly so portal can close first
    const t = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`page ${visible ? "fade-in" : ""}`}>
      {children}
    </div>
  )
}