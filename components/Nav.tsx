'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/projects', label: 'Work' },
  { href: '/writing', label: 'Writing' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  const pathname = usePathname()
  return (
    <nav className="site-nav" aria-label="Main navigation">
      {links.map(({ href, label }) => (
        <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}>{label}</Link>
      ))}
    </nav>
  )
}
