import { useState } from 'react'
import { FaGithub, FaArrowUpRightFromSquare, FaFolderOpen } from 'react-icons/fa6'
import { projects } from '../../utils/data'

function ProjectCard({ p, featured }) {
  const [open, setOpen] = useState(false)
  return (
    <article className={`card project${featured ? ' featured' : ''}`}>
      <div className="ph"><FaFolderOpen /><h3>{p.title}</h3>{featured && <span className="badge">Featured</span>}</div>
      <p>{p.desc}</p>
      {open && <ul className="more">{p.more.map((m) => <li key={m}>{m}</li>)}</ul>}
      <ul className="chips">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
      <div className="row actions">
        <a className="btn sm" href={p.github} target="_blank" rel="noreferrer"><FaGithub /> Code</a>
        {p.live && <a className="btn sm" href={p.live} target="_blank" rel="noreferrer"><FaArrowUpRightFromSquare /> Live</a>}
        <button className="btn sm ghost" onClick={() => setOpen(!open)} aria-expanded={open}>{open ? 'Show less' : 'About more'}</button>
      </div>
    </article>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="wrap">
      <h2 className="title">Projects</h2>
      <div className="grid g2">{projects.map((p, i) => <ProjectCard key={p.title} p={p} featured={i === 0} />)}</div>
    </section>
  )
}
