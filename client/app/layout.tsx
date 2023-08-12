import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Artisan 79',
  description: 'Truly Custom Jewelry Done Right',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href='/'>Home</Link>
          <Link href='/store'>Store</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
