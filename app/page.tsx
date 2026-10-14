import Link from 'next/link'
import ArticleList from '@/components/ArticleList'

export default function Home() {
  return (
    <>
      <section className="intro" aria-labelledby="intro-title">
        <p className="eyebrow">Software, product & teams · Vancouver, BC</p>
        <h1 id="intro-title">Saeed Karimi<span className="name-period">.</span></h1>
        <p className="intro-copy">I build software products and lead the teams behind them.</p>
        <p className="intro-detail">
          These days, that means digital-asset custody at DMG. This is a place for
          my work, my writing, and what I learn along the way.
        </p>
        <a className="text-link" href="#current">What I’m working on <span aria-hidden="true">↓</span></a>
      </section>

      <section className="section" id="current" aria-labelledby="current-title">
        <p className="eyebrow">Current work</p>
        <h2 id="current-title">Building at DMG</h2>
        <div className="prose">
          <p>
            I’m a Software Development Manager at{' '}
            <a href="https://www.dmgblockchain.com/">DMG Blockchain Solutions</a>,
            working with engineering, product, and operations to connect the
            software we build with the people who need it.
          </p>
          <p>
            My work includes <a href="https://www.numis-trust.com/">Numis Trust</a>,
            a digital-asset custody platform. I joined DMG as a senior software
            engineer in 2023, leading development of a custody solution, and now
            lead software development.
          </p>
        </div>
        <Link className="text-link" href="/projects">More about my work <span aria-hidden="true">→</span></Link>
      </section>

      <section className="section" id="writing" aria-labelledby="writing-title">
        <div className="section-heading">
          <p className="eyebrow">Writing</p>
          <Link className="quiet-link" href="/writing">More writing <span aria-hidden="true">→</span></Link>
        </div>
        <h2 id="writing-title">Notes from the work</h2>
        <p className="section-intro">On software, the choices behind it, and how we work together.</p>
        <ArticleList />
      </section>

      <section className="section closing" id="contact" aria-labelledby="contact-title">
        <p className="eyebrow">Elsewhere</p>
        <h2 id="contact-title">Find me around the web</h2>
        <p>
          I’m based in Vancouver. Beyond the projects and writing here, I share
          a little of my life as a software engineer on{' '}
          <a href="https://www.youtube.com/@skdev11">YouTube</a>.
        </p>
        <p>You can also find me on <a href="https://github.com/saeedkdev">GitHub</a> and <a href="https://medium.com/@sk.dev">Medium</a>. Say hello.</p>
      </section>
    </>
  )
}
