import { useState } from 'react'
import { skills } from '../../utils/data'

export default function SkillsSection() {
  const [i, setI] = useState(0)
  const cur = skills[i]
  return (
    <section id="skills" className="wrap">
      <h2 className="title">Skills</h2>
      <div className="skills">
        <div className="tabs" role="tablist" aria-orientation="vertical">
          {skills.map((s, n) => (
            <button key={s.title} role="tab" aria-selected={n === i} className={n === i ? 'on' : ''} onClick={() => setI(n)}>
              {s.title}<em>{s.items.length}</em>
            </button>
          ))}
        </div>
        <div className="panel card" role="tabpanel">
          <h3>{cur.title}</h3>
          <ul className="chips big">{cur.items.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
      </div>
    </section>
  )
}
