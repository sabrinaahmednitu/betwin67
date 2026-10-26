import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans, Noto_Sans_Bengali } from 'next/font/google'
import './globals.css'

const inter = DM_Sans({ subsets: ['latin'], variable: '--font-inter' })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant' })
const bengali = Noto_Sans_Bengali({ subsets: ['bengali'], variable: '--font-bengali' })

export const metadata: Metadata = {
  title: 'প্রিমিয়াম গেমিং | YOUR BRAND NAME',
  description: 'আবহ, আবিষ্কার এবং উন্নত গেমিং অভিজ্ঞতাকে ঘিরে তৈরি একটি প্রিমিয়াম প্ল্যাটফর্ম।',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bn">
      <body className={`${inter.variable} ${cormorant.variable} ${bengali.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
