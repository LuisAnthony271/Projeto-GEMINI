import styles from "../tech/tech.module.css";
import { ArrowRight } from "lucide-react";
import { SquareArrowOutUpRight } from "lucide-react";
import GeminiImg from "../../assets/VdNH5uoemuWg0x7dA-2JqjZcTZnEQrh5.jpg";
import GemmaImg from "../../assets/zn9_AmDgbGZVIPrxhdGxLsSs1t2O0HDU.jpg";
import ImagenImg from "../../assets/screenshot.jpg";
import VeoImg from "../../assets/ulOZK86B4c7sXPcUnDlSQURFolyMa-8X.jpg";
import AstraImg from "../../assets/iEpy3slnpRTE00a-mmISpLyQdzQGbY4C.jpg";
import MarinerImg from "../../assets/screenshot 2.jpg";
import { useEffect } from "react";
import Black from "../btnBlack/black";
import { Link } from "react-router-dom";
import Background from "../../assets/gemini-bg-4.png";

const Technologies = () => {
  const isMobile = window.matchMedia("(max-width: 600px)").matches;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          const target = entry.target;

          if (entry.isIntersecting) {
            // Stagger effect: cada elemento tem seu próprio delay baseado no index
            target.style.transitionDelay = `${index * 100}ms`; // 0.1s entre elementos
            target.classList.add("active");
            target.classList.remove("inactive");
          } else {
            target.style.transitionDelay = "0ms"; // remove o delay na saída
            target.classList.remove("active");
            target.classList.add("inactive");
          }
        });
      },
      {
        threshold: isMobile ? 0.1 : 0.2, // Mais sensível pra mobile, um pouco maior pra desktop
        rootMargin: isMobile ? "0px 0px -15% 0px" : "0px 0px -10% 0px", // Antecipar no mobile
      }
    );

    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((reveal) => observer.observe(reveal));

    return () => {
      reveals.forEach((reveal) => observer.unobserve(reveal));
    };
  });

  const withReveal = (className) => `${className} reveal`;

  return (
    <section className={withReveal(styles.techSection)} id="tech">
      <img src={Background} alt="background" className={styles.background} />
      <div className={withReveal(styles.wrapperTech)}>
        <div className={withReveal(styles.techContainer)}>
          <h2 className={withReveal(styles.techTitle) + " " + styles.reveal}>
            Tecnologias
          </h2>
          <p
            className={withReveal(styles.techDescription) + " " + styles.reveal}
          >
            Pesquisa inovadora. Produtos transformadores.
          </p>
        </div>
        <div className={withReveal(styles.btnTech)}>
          {/* <a href="" className={withReveal(styles.btnBlack) + ' ' + styles.reveal}>Ver Todas as Tecnologias</a> */}
        </div>
        <div className={withReveal(styles.techCardContainer)}>
          <div className={withReveal(styles.Row)}>
            {/* CARD 1 GEMINI*/}
            <a href="https://gemini.google.com/app?hl=pt-BR">
              <div className={withReveal(styles.cardWrapper)}>
                <div className={styles.imgCard}>
                  <img src={GeminiImg} alt="" className={styles.reveal} />
                </div>
                <div className={withReveal(styles.cardContent)}>
                  <p className={styles.techDescription}>TECHNOLODIES</p>
                  <h2>Gemini</h2>
                  <p>Nosso modelo mais inteligente de IA.</p>
                </div>
                <div className={withReveal(styles.arrowIcon)}>
                  <ArrowRight />
                </div>
              </div>
            </a>

            {/* CARD 2 Gemma*/}
            <Link to={"/gemma"}>
              <div className={withReveal(styles.cardWrapper)}>
                <div className={styles.imgCard}>
                  <img src={GemmaImg} alt="" className={styles.reveal} />
                </div>
                <div className={withReveal(styles.cardContent)}>
                  <p className={styles.techDescription}>TECHNOLODIES</p>
                  <h2>Gemma</h2>
                  <p>
                    Modelos abertos de última geração, criados para o
                    desenvolvimento responsável de IA.
                  </p>
                </div>
                <div className={withReveal(styles.arrowIcon)}>
                  <ArrowRight />
                </div>
              </div>
            </Link>

            {/* CARD 3 IMAGEN*/}
            <Link to={"/Imagen"}>
              <div className={withReveal(styles.cardWrapper)}>
                <div className={styles.imgCard}>
                  <img src={ImagenImg} alt="" className={styles.reveal} />
                </div>
                <div className={withReveal(styles.cardContent)}>
                  <p className={styles.techDescription}>TECHNOLODIES</p>
                  <h2>Imagen</h2>
                  <p>
                    Nosso modelo de conversão de texto em imagem da mais alta
                    qualidade.
                  </p>
                </div>
                <div className={withReveal(styles.arrowIcon)}>
                  <SquareArrowOutUpRight />
                </div>
              </div>
            </Link>
          </div>

          <div className={withReveal(styles.Row2)}>
            {/* CARD 4 VEO*/}
            <Link to={"/Veo"}>
              <div className={withReveal(styles.cardWrapper)}>
                <div className={styles.imgCard}>
                  <img src={VeoImg} alt="" className={styles.reveal} />
                </div>
                <div className={withReveal(styles.cardContent)}>
                  <p className={styles.techDescription}>TECHNOLODIES</p>
                  <h2>Veo</h2>
                  <p>Nosso modelo de geração vídeo de última geração.</p>
                </div>
                <div className={withReveal(styles.arrowIcon)}>
                  <ArrowRight />
                </div>
              </div>
            </Link>

            {/* CARD 5 Projeto Astra*/}
            <Link to={'/ProjetoAstra'}>
            <div className={withReveal(styles.cardWrapper)}>
              <div className={styles.imgCard}>
                <img src={AstraImg} alt="" className={styles.reveal} />
              </div>
              <div className={withReveal(styles.cardContent)}>
                <p className={styles.techDescription}>TECHNOLODIES</p>
                <h2>Projeto Astra</h2>
                <p>
                  Um protótipo de pesquisa que explora os recursos futuros de um
                  assistente universal de IA.
                </p>
              </div>
              <div className={withReveal(styles.arrowIcon)}>
                <ArrowRight />
              </div>
            </div>
            </Link>

            {/* CARD 6 Projeto MARINER*/}
            <Link to={'/ProjetoMariner'}>
            <div className={withReveal(styles.cardWrapper)}>
              <div className={styles.imgCard}>
                <img src={MarinerImg} alt="" className={styles.reveal} />
              </div>
              <div className={withReveal(styles.cardContent)}>
                <p className={styles.techDescription}>TECHNOLODIES</p>
                <h2>Projeto Mariner</h2>
                <p>
                  Um protótipo de pesquisa que explora o futuro da interação
                  homem-agente, começando com seu navegador.
                </p>
              </div>
              <div className={withReveal(styles.arrowIcon)}>
                <ArrowRight />
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
