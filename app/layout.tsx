import type { Metadata, Viewport } from "next"
import { Inter, Montserrat, Anton } from "next/font/google"
import "../styles/globals.css"
import TransitionProvider from "@/components/TransitionProvider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" })

export const metadata: Metadata = {
  title: "Sannidhya Ray",
  description: "Sannidhya Ray Portfolio",
}

// viewport must be a separate export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${anton.variable}`}>
      <body className="font-sans antialiased">
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  )
}