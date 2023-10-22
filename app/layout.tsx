import type { Metadata } from 'next'
import { Inter, Fira_Sans } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
const firaSans = Fira_Sans({ subsets: ['latin'], weight: ['400', '700']})

export const metadata: Metadata = {
  title: 'Saeed Karimi',
  description: 'Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={firaSans.className}>
        <main className="flex flex-col w-full items-center">
            <section className="flex flex-col w-[900px]">
                <nav className="flex flex-row justify-between w-[240px] max-w-2xl py-4 mt-[100px]">
                    <Link href="/">
                        home
                    </Link>
                    <Link href="/projects">
                        projects
                    </Link>
                    <Link href="https://blog.saeedk.dev" target='_blank'>
                        blog
                    </Link>
                </nav>
            {children}
            </section>
        </main>
        </body>
    </html>
  )
}
