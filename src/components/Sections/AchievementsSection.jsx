import { FaTrophy } from 'react-icons/fa6'
import { achievements } from '../../utils/data'

export default function AchievementsSection() {
  return (
    <section id="achievements" className="wrap">
      <h2 className="title">Achievements</h2>
      <div className="grid g3">
        {achievements.map((a) => (
          <article key={a.title} className="card ach">
            <FaTrophy />
            <div><h3>{a.title}</h3><p className="muted">{a.text}</p></div>
          </article>
        ))}
      </div>
    </section>
  )
}
