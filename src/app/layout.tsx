import NavBar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { ThemeProvider } from '../../context/ThemeContext'
import { SessionProvider } from "next-auth/react"
import AuthProvider from '@/components/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Digital Porducts',
  description: 'This is the Description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider>
        <ThemeProvider>
        <div className="container">
        <NavBar/>
        {children}
        <Footer/>
        </div>
        </ThemeProvider>
        </AuthProvider>
        </body>
    </html>
  )
}

