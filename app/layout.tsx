import '../styles/globals.css'
import SceneWrapper from '@/components/SceneWrapper'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SceneWrapper>
          {children}
        </SceneWrapper>
      </body>
    </html>
  )
}