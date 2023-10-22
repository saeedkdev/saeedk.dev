import type { Metadata } from 'next'
import { Inter, Fira_Sans } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

import { Github, Youtube } from 'lucide-react'

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
            <section className="flex flex-col sm:w-10/12 md:w-[900px]">
                <div className="flex flex-row justify-between mt-[100px] w-full px-5 md:px-0">
                    <Link href="https://github.com/saeedkdev" target='_blank' className='flex flex-row gap-1 rounded-md p-2 border 
                                hover:border-gray-900
                                hover:bg-gray-900 hover:text-white transition' >
                        <Github size={24}/> My Work
                    </Link>
                    <Link href="https://www.youtube.com/@skdev11" target='_blank' className='flex flex-row gap-1 p-2 hover:text-red-500' >
                        <Youtube size={24}/> My Life as a software engineer
                    </Link>
                </div>
                <hr className="w-full mt-5"/>
                <nav className="flex flex-row justify-between w-8/12 md:w-[240px] max-w-2xl py-4 px-5 md:px-0">
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
