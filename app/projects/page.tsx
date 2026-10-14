import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Saeed Karimi’s work in software development, engineering leadership, and digital-asset custody at DMG Blockchain Solutions.',
}

export default function Work() {
  return (
    <>
      <header className="page-intro">
        <p className="eyebrow">Work</p>
        <h1>Building products.<br />Leading teams.</h1>
        <p className="intro-copy">My work spans software engineering, product, and the people doing the building.</p>
      </header>

      <section className="work-entry" aria-labelledby="dmg-title">
        <p className="eyebrow">2023 — Present</p>
        <h2 id="dmg-title">DMG Blockchain Solutions</h2>
        <div className="prose">
          <p>
            I joined DMG as a Senior Software Engineer in November 2023, leading
            development of a digital-asset custody solution. Since January 2025,
            I’ve been a Software Development Manager.
          </p>
          <p>
            I work with executive leadership, product, and operations to align
            engineering work with business needs. That means working across
            the product and the team, as well as the code.
          </p>
        </div>
        <a className="text-link" href="https://www.dmgblockchain.com/">About DMG <span aria-hidden="true">↗</span></a>
      </section>

      <section className="work-entry" aria-labelledby="numis-title">
        <p className="eyebrow">Digital-asset custody</p>
        <h2 id="numis-title">Numis Trust</h2>
        <div className="prose">
          <p>
            My work at DMG includes engineering and product work on Numis Trust,
            a digital-asset custody platform. The public Numis site is the place
            to learn more about the platform.
          </p>
        </div>
        <a className="text-link" href="https://www.numis-trust.com/">Visit Numis Trust <span aria-hidden="true">↗</span></a>
      </section>

      <section className="work-entry" aria-labelledby="earlier-title">
        <p className="eyebrow">Before DMG</p>
        <h2 id="earlier-title">Business software & the web</h2>
        <div className="prose">
          <p>
            At General Internet, I worked as a Software Engineer and then a Lead
            Software Engineer, developing documentation tools and modularizing
            software for a customizable SaaS product.
          </p>
          <p>Earlier work included appointment scheduling with Node.js and React, and e-commerce with Laravel.</p>
        </div>
        <Link className="text-link" href="/about">My full background <span aria-hidden="true">→</span></Link>
      </section>
    </>
  )
}
