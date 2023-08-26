import Link from 'next/link'
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
      <body>
      <header className="w-full flex justify-end pr-5 pt-2 gap-2 text-sm lg:text-lg font-bold bg-black border-b-gray-400 border-b-2">
          <Link
            href="/"
            scroll={false}
            className="hover:underline tracking-wider px-5 py-2 bg-gray-400 rounded-t-xl"
          >
            Тетрис
          </Link>
          <Link
            href="/control"
            scroll={false}
            className="hover:underline tracking-wider px-5 py-2 bg-gray-400 rounded-t-xl"
          >
            Управление
          </Link>
        </header>
        {children}
      </body>
    </html>
  )
}
