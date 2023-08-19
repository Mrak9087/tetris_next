import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Тетрис',
  description: '«Тетрис» представляет собой головоломку, построенную на использовании геометрических фигур «тетрамино»',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
