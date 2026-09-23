import { FaGithub, FaLinkedinIn, FaYoutube, FaXTwitter, FaEnvelope, FaDownload } from 'react-icons/fa6'
import { profile, socials } from '../../utils/data'

const icons = { github: FaGithub, linkedin: FaLinkedinIn, youtube: FaYoutube, twitter: FaXTwitter }
const S = ({ children }) => <span className="s">{children}</span>
const K = ({ children }) => <span className="k">{children}</span>
const P = ({ children }) => <span className="p">{children}</span>

export default function HeroSection() {
  return (
    <section id="home" className="hero wrap">
      <div className="hero-text">
        <img src={profile.photo} alt={profile.name} className="avatar" />
        <p className="status"><i /> Open to SDE-1 and backend roles</p>
        <h1>{profile.name}</h1>
        <h2 className="role">{profile.headline}</h2>
        {profile.about.map((p) => <p key={p} className="lead">{p}</p>)}
        <div className="row">
          <a className="btn primary" href="#projects">View projects</a>
          <a className="btn" href={`mailto:${profile.email}`}><FaEnvelope /> Email</a>
          <a className="btn" href={profile.resume}><FaDownload /> Resume</a>
        </div>
        <div className="row socials">
          {socials.map(({ name, icon, url }) => {
            const Icon = icons[icon]
            return <a key={name} className="icon-btn" href={url} target="_blank" rel="noreferrer" aria-label={name} title={name}><Icon /></a>
          })}
        </div>
      </div>

      <div className="editor" aria-label="Profile summary as code">
        <div className="bar"><b /><b /><b /><span>jayant.ts</span></div>
        <pre>
<K>const</K> <P>jayant</P> = {'{'}{'\n'}
{'  '}role: <S>"{profile.role}"</S>,{'\n'}
{'  '}location: <S>"{profile.location}"</S>,{'\n'}
{'  '}education: <S>"B.E. CSE, SLIET"</S>,{'\n'}
{'  '}languages: [<S>"C++"</S>, <S>"Python"</S>, <S>"TypeScript"</S>],{'\n'}
{'  '}backend: [<S>"FastAPI"</S>, <S>"Node.js"</S>, <S>"PostgreSQL"</S>],{'\n'}
{'  '}focus: [<S>"low-latency"</S>, <S>"distributed systems"</S>],{'\n'}
{'  '}solved: <K>500</K>,{'\n'}
{'  '}codeVitaRank: <K>3781</K>,{'\n'}
{'  '}openToWork: <K>true</K>{'\n'}
{'}'}<span className="caret" />
        </pre>
        <dl className="stats">
          {profile.stats.map(([n, l]) => <div key={l}><dt>{n}</dt><dd>{l}</dd></div>)}
        </dl>
      </div>
    </section>
  )
}
