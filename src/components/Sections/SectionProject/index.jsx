import Git from "../../../assets/git-icon.png"
import styles from "./styles.module.css"

export const SectionProject = ({projects}) => {
    return (
        <section className={styles.SectionProject}>
        <div className={styles.project}>
          <h2 className="h2">Projetos</h2>
          <div className={styles.project2}>
            <ul>
              {projects.map(project => (
              <li key={project.id}>
                  <div className={styles.cardProject}>
                    <h4 className="projects">{project.name}</h4>
                    <p className="paragraphy">{project.description}</p>
                    <a href={project.site} className="myName" target="_blank">Saiba mais</a>
                  </div>
                  <img src= {Git} alt="" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    )
}