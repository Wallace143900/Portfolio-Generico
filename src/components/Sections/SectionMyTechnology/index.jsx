import styles from "./styles.module.css"

export const SectionMyTechnology = ({technologies}) => {
    return (
        <section className={styles.sectionMyTechnology}>
          <h2 className="h2">Tecnologias</h2>
        <div className={styles.divFirst}>
          {technologies.map(({name, img}, index) => (
            <div className={styles.divLi} key={index}>
            <li className="styles"><img src={img} alt="imagem" />{name}</li>
          </div>
          ))}
        </div>
      </section>
    )
}