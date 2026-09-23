import { FaMoon, FaSun } from 'react-icons/fa6'
import { useTheme } from '../context/ThemeContext'
import { useActiveSection } from '../utils/helper'

const links = [['home', 'Home'], ['skills', 'Skills'], ['coding', 'Coding'], ['projects', 'Projects'], ['experience', 'Experience'], ['achievements', 'Achievements']]
const ids = links.map((l) => l[0])

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const active = useActiveSection(ids)
  return (
    <header className="nav">
      <a href="#home" className="brand">jayant<span>.dev</span></a>
      <nav aria-label="Sections">
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? 'on' : ''}>{label}</a>
        ))}
      </nav>
      <button className="icon-btn" onClick={toggle} aria-label="Toggle theme">
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  )
}
