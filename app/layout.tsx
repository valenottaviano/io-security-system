import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from './context/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotter AI',
  description: 'Your Passport to a Safer Experience - Where Identity Verification Meets Innovation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          {children}
        </body>
      </AuthProvider>
      <title>Spotter AI</title>
    </html>
  )
}
