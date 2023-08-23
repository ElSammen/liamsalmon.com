import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Liam Salmon',
  description: 'Portfolio for Liam Salmon Fullstack Developer',
  content: "width=device-width, initial-scale=1",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <Navbar />
      </body>
    </html>
  )
}
