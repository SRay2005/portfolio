import type { Metadata } from "next"
import "../styles/globals.css"
import TransitionProvider from "@/components/TransitionProvider"

export const metadata: Metadata = {
  title: "Sannidhya Ray",
  description: "Sannidhya Ray Portfolio",
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  )
}