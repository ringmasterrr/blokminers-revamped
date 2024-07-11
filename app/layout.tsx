import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/shared/Navbar/Navbar'
import Footer from '@/components/shared/Footer/Footer'
import { ParticleComponent } from '@/lib/particles'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blokminers',
  description: 'Embarking on our journey in the dynamic realm of Blockchain, BlokMiners is committed to spearheading innovative solutions for a variety of industries. Our mission is clear — to explore, adapt, and create impactful Blockchain solutions that resonate with the evolving needs of our clients. Founded with a passion for pioneering change, BlokMiners embraces a forward-looking vision. Our roots are grounded in a commitment to unraveling the possibilities of Blockchain. Whether you’re exploring decentralized applications or optimizing operations through blockchain, We ensures innovative Blockchain development that propel your business forward. Join us in reshaping the future with Blockchain.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
