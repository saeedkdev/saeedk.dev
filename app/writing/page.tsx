import type { Metadata } from 'next'
import ArticleList from '@/components/ArticleList'

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Saeed Karimi’s writing on software engineering, code reviews, predictability, and the choices behind the work.',
}

export default function Writing() {
  return (
    <>
      <header className="page-intro">
        <p className="eyebrow">Writing</p>
        <h1>Thinking out loud.</h1>
        <p className="intro-copy">Notes on software and the way we build it.</p>
        <p className="intro-detail">A few pieces from my <a href="https://medium.com/@sk.dev">Medium blog</a>. The full archive lives there.</p>
      </header>
      <section className="writing-archive" aria-label="Selected articles"><ArticleList headingLevel={2} /></section>
      <p className="archive-link"><a href="https://medium.com/@sk.dev">Read all articles on Medium <span aria-hidden="true">↗</span></a></p>
    </>
  )
}
