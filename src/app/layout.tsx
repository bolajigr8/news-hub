import type { Metadata } from 'next'
// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
// import aos css
import 'aos/dist/aos.css'

import { EB_Garamond } from 'next/font/google'
// css
import './variables.css'
import './globals.css'
// components
import Navbar from '@/components/Navbar'
import Footer from '@/sections/Footer'

const eBGaramond = EB_Garamond({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Micbol News-Hub',
  description: 'Micbol Digital News App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={eBGaramond.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

// alternative `${poppins.variable}`
