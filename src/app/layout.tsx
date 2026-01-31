import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import '@/styles/globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Budul Tech | Revenue-Driving Technology for Businesses',
  description: 'Budul Tech engineers websites, automation, and AI systems that eliminate inefficiency and increase profit. We build business systems, not just software.',
  keywords: ['business automation', 'AI systems', 'web applications', 'workflow automation', 'CRM integration', 'custom software', 'business technology'],
  authors: [{ name: 'Budul Tech' }],
  creator: 'Budul Tech',
  publisher: 'Budul Tech',
  metadataBase: new URL('https://budultech.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://budultech.com',
    siteName: 'Budul Tech',
    title: 'Budul Tech | Revenue-Driving Technology for Businesses',
    description: 'We engineer websites, automation, and AI systems that eliminate inefficiency and increase profit.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Budul Tech - Revenue-Driving Technology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Budul Tech | Revenue-Driving Technology for Businesses',
    description: 'We engineer websites, automation, and AI systems that eliminate inefficiency and increase profit.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen font-sans">
        {children}
      </body>
    </html>
  )
}
