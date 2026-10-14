import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Link from 'next/link'
import Nav from '@/components/Nav'
import './globals.css'

const newsreader = localFont({
  src: './fonts/Newsreader-Regular.ttf',
  variable: '--font-editorial',
  display: 'swap',
  weight: '400',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.saeedk.dev'),
  title: { default: 'Saeed Karimi — Software, product & teams', template: '%s — Saeed Karimi' },
  description: 'Saeed Karimi builds software products and leads engineering teams in Vancouver. Current work at DMG and writing about software.',
  openGraph: {
    title: 'Saeed Karimi — Software, product & teams',
    description: 'Software products, engineering teams, and notes from the work. Based in Vancouver.',
    url: 'https://www.saeedk.dev',
    siteName: 'Saeed Karimi',
    type: 'website',
    locale: 'en_CA',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={newsreader.variable}>
        <a className="skip-link" href="#main">Skip to content</a>
        <div className="site-shell">
          <header className="site-header">
            <Link className="wordmark" href="/" aria-label="Saeed Karimi, home">saeedk.dev</Link>
            <Nav />
          </header>
          <main id="main" tabIndex={-1}>{children}</main>
          <footer className="site-footer">
            <Link className="footer-name" href="/">Saeed Karimi</Link>
            <span>Vancouver, BC</span>
            <a href="https://github.com/saeedkdev">GitHub <span aria-hidden="true">↗</span></a>
          </footer>
        </div>
      </body>
    </html>
  )
}
