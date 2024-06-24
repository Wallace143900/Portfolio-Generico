import Imagem from "../../../assets/banner-img.png"
import styles from "./styles.module.css"


export const SectionMy = () => {
    return (
        <section>
          <div className={styles.sectionMy}>
            <div className={styles.my}>
              <p className="myName">Wallace Menezes</p>
              <h1 className="h2">Bem vindo ao meu portfólio</h1>
              <p className="paragraphy">Uma frase sobre mim</p>
              <button className="knowMore">Saiba mais</button>
            </div>
            <img src= {Imagem} alt="#" />
          </div>
        </section>
    )
}