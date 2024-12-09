import './globals.css'
import { Open_Sans, Inconsolata } from 'next/font/google'
import Navigation from '@/components/Navigation'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  variable: '--font-open-sans',
})

const inconsolata = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400'],
  variable: '--font-inconsolata',
})

export const metadata = {
  title: 'Projects Portfolio',
  description: 'A showcase of various client projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${inconsolata.variable}`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}