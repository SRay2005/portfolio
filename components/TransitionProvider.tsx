"use client"

import { useRouter, usePathname } from "next/navigation"
import { createContext, useContext, useState, useEffect } from "react"
import PortalTransition from "./PortalTransition"

const TransitionContext = createContext<any>(null)

export function usePageTransition() {
  return useContext(TransitionContext)
}

export default function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [portal, setPortal] = useState(false)
  const [targetPath, setTargetPath] = useState<string | null>(null)

  const navigate = (path: string) => {
    if (path === pathname) return
    setPortal(true)
    setTargetPath(path)
    setTimeout(() => router.push(path), 900)
  }

  useEffect(() => {
    if (targetPath && pathname === targetPath) {
      // Once the new page chunk has loaded and mounted, we remove the portal
      const t = setTimeout(() => {
        setPortal(false)
        setTargetPath(null)
      }, 100)
      return () => clearTimeout(t)
    }
  }, [pathname, targetPath])

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {portal && <PortalTransition />}
      {children}
    </TransitionContext.Provider>
  )
}