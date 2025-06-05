// src/app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Name | Portfolio',
  description: 'Personal portfolio showcasing my work, resume, and contact info',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Navbar />
        <main className="min-h-screen px-4 sm:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
