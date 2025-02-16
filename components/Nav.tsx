'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
    const path = usePathname()
    return (
        <nav className="flex flex-row justify-between w-8/12 md:w-[140px] max-w-2xl py-4 px-5 md:px-0">
            <Link href="/" {...(path !== '/' ? { className: 'text-gray-500' } : { className: 'border-b border-gray-900' })}>
                home
            </Link>
            <Link href="https://medium.com/@sk.dev" target='_blank' className="text-yellow-700">
                blog
            </Link>
        </nav>
    )
}
