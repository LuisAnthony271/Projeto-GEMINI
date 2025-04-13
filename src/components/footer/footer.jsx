import styles from "./footer.module.css";
import X from "../../assets/x.svg";
import Insta from "../../assets/insta.svg";
import Youtube from "../../assets/yt-logo.png";
import Linkedin from "../../assets/linkedin.png";
import Github from "../../assets/github.svg";
import Black from "../btnBlack/black";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerWrapper}>
          <div className={styles.followUs}>
            <h4 className={styles.h4}>Siga-nos</h4>

            <a href="#" className={styles.aFooter}>
              <img src={X} alt="X-logo" className={styles.socialMedia} />
            </a>

            <a href="#" className={styles.aFooter}>
              <img
                src={Insta}
                alt="insta-logo"
                className={styles.socialMedia}
              />
            </a>

            <a href="#" className={styles.aFooter}>
              <img
                src={Github}
                alt="Github-logo"
                className={styles.socialMedia}
              />
            </a>
            <a href="#" className={styles.aFooter}>
              <img
                src={Youtube}
                alt="Youtube-logo"
                className={styles.socialMedia}
              />
            </a>

            <a href="#" className={styles.aFooter}>
              <img
                src={Linkedin}
                alt="Linkedin-logo"
                className={styles.socialMedia}
              />
            </a>
          </div>
          <div className={styles.footerContent}>
            <div className={styles.ulFooter1}>
              <ul className={styles.ul}>
                <h4 className={styles.h4}>Sobre</h4>
                <li className={styles.li}>
                  <a href="#" className={styles.a}>
                    Sobre o Google DeepMind
                  </a>
                </li>
                <li className={styles.li}>
                  <a href="#" className={styles.a}>
                    Responsabilidade e Segurança
                  </a>
                </li>
                <li className={styles.li}>
                  <a href="#" className={styles.a}>
                    Pesquisar
                  </a>
                </li>
                <li className={styles.li}>
                  <a href="#" className={styles.a}>
                    Tecnologias
                  </a>
                </li>
                <li className={styles.li}>
                  <a href="#" className={styles.a}>
                    Blog
                  </a>
                </li>
                <li className={styles.li}>
                  <a href="#" className={styles.a}>
                    Carreiras
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.ulFooter2}>
              <ul className={styles.ul}>
                <h4 className={styles.h4}>Saiba mais</h4>
                <li className={styles.li}>
                  <a href="#" className={styles.a}>
                    Gemini
                  </a>
                </li>
                <li className={styles.li}>
                  <a href="#" className={styles.a}>
                    Veo
                  </a>
                </li>
                <li className={styles.li}>
                  <a href="#" className={styles.a}>
                    ImaGen
                  </a>
                </li>
                <li className={styles.li}>
                  <a href="#" className={styles.a}>
                    SynthID
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.signUp}>
              <h4 className={styles.h4Footer}>
                Inscreva-se para receber atualizações sobre nossas últimas
                inovações
              </h4>

              <div className={styles.containerSignUp}>
                <input
                  type="text"
                  className={styles.inputSignUp}
                  placeholder="endereço de e-mail"
                />
                <p className={styles.pFooter}>
                  Aceito os Termos e Condições do Google e reconheço que minhas
                  informações serão usadas de acordo com a{" "}
                  <a href="#" className={styles.aSignUp}>
                    Política de Privacidade do Google.
                  </a>
                </p>
                <div className={styles.btnSignUp}>
                  <Black>Inscreva-se</Black>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottomFooter}>
            <h3 className={styles.h3Footer}>Google</h3>
            <ul className={styles.ulBottom}>
              <li className={styles.li}>
                <a href="#" className={styles.a}>
                  Sobre o Google
                </a>
              </li>
              <li className={styles.li}>
                <a href="#" className={styles.a}>
                  Produtos do Google
                </a>
              </li>
              <li className={styles.li}>
                <a href="#" className={styles.a}>
                  Privacidade
                </a>
              </li>
              <li className={styles.li}>
                <a href="#" className={styles.a}>
                  Termos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
