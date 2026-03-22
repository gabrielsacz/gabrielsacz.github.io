import type { Metadata } from 'next'
import { Libre_Baskerville, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const libreBaskerville = Libre_Baskerville({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Gabriel Sanchez',
  description: 'Mathematician and software engineer exploring mathematics, algorithms, and the art of problem-solving.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${libreBaskerville.variable} ${jetbrainsMono.variable} font-serif antialiased`}>
        {children}
      </body>
    </html>
  )
}
