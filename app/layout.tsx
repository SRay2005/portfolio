import "../styles/globals.css"
import TransitionProvider from "@/components/TransitionProvider"

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