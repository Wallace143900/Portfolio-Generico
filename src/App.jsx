import { PortfolioTemplate } from "./components/portfolioTemplate/index.jsx"
import { SectionPresentation } from "./components/Sections/SectionPresentation"
import { SectionMyTechnology } from "./components/Sections/SectionMyTechnology"
import { SectionProject } from "./components/Sections/SectionProject"
import "./styles/index.css"
import { projects } from "./data/projects"
import { technologies } from "./data/technologies"
import { SectionMy } from "./components/Sections/SectionMy/index.jsx"

function App() {

  return (    
      <PortfolioTemplate>
        <SectionMy />
        <SectionPresentation />
        <SectionMyTechnology technologies={technologies}/>
        <SectionProject projects={projects}/>
      </PortfolioTemplate>
  )
}

export default App
