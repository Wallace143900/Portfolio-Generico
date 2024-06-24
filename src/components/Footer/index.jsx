import Zap from "../../assets/whatsapp-icon.png"
import Linkedin from "../../assets/linkedin-icon.png"
import GitHub from "../../assets/github-icon.png"
import styles from"./styles.module.css"

export const Footer = () => {
    return (
        <footer>
        <div className={styles.footer}>
          <div className={styles.contact}>
            <h2 className="h2">Contato</h2>
            <div className={styles.img}>
            <a href="https://api.whatsapp.com/send/?phone=5521965629403&text&type=phone_number&app_absent=0" target="_blank"><img src={Zap} alt="#" /></a>
            <a href="https://www.linkedin.com/in/wallace-menezes-505019125/" target="_blank"><img src={Linkedin} alt="#" /></a>
            <a href="https://github.com/Wallace143900" target="_blank"><img src={GitHub} alt="#" /></a>
            </div>
           </div>
          </div>
            <p>Todos os direitos reservados - Wallace Menezes</p>
      </footer>
    )
}