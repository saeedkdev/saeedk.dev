import type { Metadata } from 'next'
import { experience } from '@/lib/content'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Saeed Karimi, a software engineer and development manager based in Vancouver, and his work history.',
}

export default function About() {
  return (
    <>
      <header className="page-intro">
        <p className="eyebrow">A bit of background</p>
        <h1>Hi, I’m Saeed.</h1>
        <p className="intro-copy">A software engineer in Vancouver, building products and leading teams.</p>
      </header>
      <div className="prose about-copy">
        <p>
          My work has taken me from e-commerce and appointment scheduling to
          business software and digital-asset custody. I’ve been at{' '}
          <a href="https://www.dmgblockchain.com/">DMG Blockchain Solutions</a> since
          2023, first as a senior software engineer and now as a Software
          Development Manager.
        </p>
        <p>
          I write about software and how we work on{' '}
          <a href="https://medium.com/@sk.dev">Medium</a>, build projects on{' '}
          <a href="https://github.com/saeedkdev">GitHub</a>, and share a little of
          my life as a software engineer on{' '}
          <a href="https://www.youtube.com/@skdev11">YouTube</a>.
        </p>
      </div>
      <section className="section" aria-labelledby="experience-title">
        <p className="eyebrow">The longer version</p>
        <h2 id="experience-title">Work so far</h2>
        <ol className="experience-list">
          {experience.map((job) => (
            <li key={`${job.company}-${job.role}`}>
              <p className="job-dates">{job.dates}</p>
              <h3>{job.role}</h3>
              <p className="job-company">{job.company}</p>
              <p>{job.description}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}
