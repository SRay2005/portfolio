"use client"

import { useRouter } from "next/navigation"
import { createContext, useContext, useState } from "react"
import PortalTransition from "./PortalTransition"

const TransitionContext = createContext<any>(null)

export function usePageTransition() {
  return useContext(TransitionContext)
}

export default function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [portal, setPortal] = useState(false)

  const navigate = (path: string) => {
    setPortal(true)
    setTimeout(() => router.push(path), 900)
    setTimeout(() => setPortal(false), 1800)
  }

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {portal && <PortalTransition />}
      {children}
    </TransitionContext.Provider>
  )
}