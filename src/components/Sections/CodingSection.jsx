import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { coding } from '../../utils/data'

const colors = { Codeforces: '#4c8df6', LeetCode: '#ffa116', GeeksforGeeks: '#2f8d46', CodeChef: '#b8794a', CSES: '#8b95a8', Kaggle: '#20beff' }

export default function CodingSection() {
  return (
    <section id="coding" className="wrap">
      <h2 className="title">Coding profiles</h2>
      <div className="coding-top card">
        <strong className="huge">{coding.total}</strong>
        <p className="muted">problems solved. {coding.note}.</p>
      </div>
      <div className="grid g3">
        {coding.platforms.map((p) => (
          <a key={p.name} className="card link" href={p.url} target="_blank" rel="noreferrer" style={{ '--c': colors[p.name] }}>
            <span className="mono">{p.name[0]}</span>
            <div>
              <h3>{p.name}</h3>
              <p className="muted">@{p.handle}{p.solved && ` · ${p.solved} solved`}</p>
            </div>
            <FaArrowUpRightFromSquare className="ext" />
          </a>
        ))}
      </div>
    </section>
  )
}
