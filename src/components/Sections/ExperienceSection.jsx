import { experience, education } from '../../utils/data'

export default function ExperienceSection() {
  const items = [
    ...experience.map((e) => ({ t: e.role, s: `${e.org} · ${e.when}`, list: e.points })),
    { t: education.degree, s: `${education.school} · ${education.when}`, list: [education.detail] },
  ]
  return (
    <section id="experience" className="wrap">
      <h2 className="title">Experience & education</h2>
      <ol className="timeline">
        {items.map((e) => (
          <li key={e.t}>
            <div className="card">
              <h3>{e.t}</h3>
              <p className="muted">{e.s}</p>
              <ul className="more">{e.list.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
