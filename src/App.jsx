import Navbar from './components/Navbar'
import HeroSection from './components/Sections/HeroSection'
import SkillsSection from './components/Sections/SkillsSection'
import CodingSection from './components/Sections/CodingSection'
import ProjectsSection from './components/Sections/ProjectsSection'
import ExperienceSection from './components/Sections/ExperienceSection'
import AchievementsSection from './components/Sections/AchievementsSection'
import { profile } from './utils/data'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SkillsSection />
        <CodingSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
      </main>
      <footer className="footer">© {new Date().getFullYear()} {profile.name}. Built with React and Vite.</footer>
    </>
  )
}
