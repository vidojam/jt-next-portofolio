
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'
import Footer from './Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jose A. Torres  Port Next.js ',
  description: 'Portfolio In Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <NavBar />  
          <main className='bg-pink-500'>
            <div className="container py-4">
              {children}
            </div>
            <Footer />
          </main>
        </body>
    </html>
  )
}