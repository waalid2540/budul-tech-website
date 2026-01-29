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
  title: 'Budul Tech LLC | AI-Powered Development Agency',
  description: 'Budul Tech delivers websites, apps, AI integrations, and marketing solutions at unprecedented speed. Powered by AI, driven by family values. Based in Utah, USA.',
  keywords: ['web development', 'AI integration', 'app development', 'digital marketing', 'Utah', 'software development', 'AI agency'],
  authors: [{ name: 'Budul Tech LLC' }],
  creator: 'Budul Tech LLC',
  publisher: 'Budul Tech LLC',
  metadataBase: new URL('https://budultech.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://budultech.com',
    siteName: 'Budul Tech LLC',
    title: 'Budul Tech LLC | AI-Powered Development Agency',
    description: 'We build your digital future in days, not months. AI-powered development agency based in Utah.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Budul Tech - AI-Powered Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Budul Tech LLC | AI-Powered Development Agency',
    description: 'We build your digital future in days, not months. AI-powered development agency based in Utah.',
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
