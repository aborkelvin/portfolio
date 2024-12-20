import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abor Anthony Kelvin',
  description: 'I am a software engineer who loves to build things for the web.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='' >

      <body className={inter.className}>
        
        {children}
        <Footer />
      </body>
      
    </html>
  )
}
