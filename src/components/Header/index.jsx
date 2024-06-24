import styles from "./styles.module.css"


export const Header = () => {
    return (
        <header className={styles.header}>
        <div className={styles.portfolio}>
        <h4 className="portfolio">Portfólio</h4>
        <div className={styles.divAncora}>
          <a href="">Sobre</a>
          <a href="https://kenzieacademybrasil.slack.com/team/U05L75EA89G" target="_blank">Slack</a>
          <a href="">Projetos</a>
        </div>
        <button className="button"><a href="">Contato</a></button>
        </div>
      </header>
    )
}

