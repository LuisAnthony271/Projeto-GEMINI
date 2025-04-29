import styles from "../tech/tech.module.css";
import { ArrowRight } from "lucide-react";
import { SquareArrowOutUpRight } from "lucide-react";
import GeminiImg from "../../assets/VdNH5uoemuWg0x7dA-2JqjZcTZnEQrh5.jpg";
import GemmaImg from "../../assets/zn9_AmDgbGZVIPrxhdGxLsSs1t2O0HDU.jpg";
import ImagenImg from "../../assets/screenshot.jpg";
import VeoImg from "../../assets/ulOZK86B4c7sXPcUnDlSQURFolyMa-8X.jpg";
import AstraImg from "../../assets/iEpy3slnpRTE00a-mmISpLyQdzQGbY4C.jpg";
import MarinerImg from "../../assets/screenshot 2.jpg";
import { useEffect } from 'react';
import Black from '../btnBlack/black';

const Technologies = () => {

  const isMobile = window.matchMedia("(max-width: 600px)").matches;

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        const target = entry.target;

        if (entry.isIntersecting) {
          // Stagger effect: cada elemento tem seu próprio delay baseado no index
          target.style.transitionDelay = `${index * 100}ms`; // 0.1s entre elementos
          target.classList.add('active');
          target.classList.remove('inactive');
        } else {
          target.style.transitionDelay = '0ms'; // remove o delay na saída
          target.classList.remove('active');
          target.classList.add('inactive');
        }
      });
    }, {
      threshold: isMobile ? 0.1 : 0.2, // Mais sensível pra mobile, um pouco maior pra desktop
      rootMargin: isMobile ? "0px 0px -15% 0px" : "0px 0px -10% 0px", // Antecipar no mobile
    });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => observer.observe(reveal));

    return () => {
      reveals.forEach(reveal => observer.unobserve(reveal));
    };
  }, );


    const withReveal = (className) => `${className} reveal`;
  
    return (
      <section className={withReveal(styles.techSection)} id="tech">
        <div className={withReveal(styles.wrapperTech)}>
          <div className={withReveal(styles.techContainer)}>
            <h2 className={withReveal(styles.techTitle) + ' ' + styles.reveal}>Tecnologias</h2>
            <p className={withReveal(styles.techDescription) + ' ' + styles.reveal}>Pesquisa inovadora. Produtos transformadores.</p>
          </div>
          <div className={withReveal(styles.btnTech)}>
            {/* <a href="" className={withReveal(styles.btnBlack) + ' ' + styles.reveal}>Ver Todas as Tecnologias</a> */}
          </div>
          <div className={withReveal(styles.techCardContainer)}>
            <div className={withReveal(styles.Row)}>
              {/* CARD 1 */}
              <div className={withReveal(styles.cardWrapper)}>
                <div className={withReveal(styles.imgCard)}>
                  <img src={GeminiImg} alt="" className="reveal" />
                </div>
                <div className={withReveal(styles.cardContent)}>
                  <h2 className="reveal">Gemini</h2>
                  <p className="reveal">Nosso modelo mais inteligente de IA.</p>
                </div>
                <div className={withReveal(styles.arrowIcon)}>
                  <ArrowRight />
                </div>
              </div>
  
              {/* CARD 2 */}
              <div className={withReveal(styles.cardWrapper)}>
                <div className={withReveal(styles.imgCard)}>
                  <img src={GemmaImg} alt="" className="reveal" />
                </div>
                <div className={withReveal(styles.cardContent)}>
                  <h2 className="reveal">Gemma</h2>
                  <p className="reveal">
                    Modelos abertos de última geração, criados para o
                    desenvolvimento responsável de IA.
                  </p>
                </div>
                <div className={withReveal(styles.arrowIcon)}>
                  <ArrowRight />
                </div>
              </div>
  
              {/* CARD 3 */}
              <div className={withReveal(styles.cardWrapper)}>
                <div className={withReveal(styles.imgCard)}>
                  <img src={ImagenImg} alt="" className="reveal" />
                </div>
                <div className={withReveal(styles.cardContent)}>
                  <h2 className="reveal">Imagen</h2>
                  <p className="reveal">
                    Nosso modelo de conversão de texto em imagem da mais alta
                    qualidade.
                  </p>
                </div>
                <div className={withReveal(styles.arrowIcon)}>
                  <SquareArrowOutUpRight />
                </div>
              </div>
            </div>
  
            <div className={withReveal(styles.Row2)}>
              {/* CARD 4 */}
              <div className={withReveal(styles.cardWrapper)}>
                <div className={withReveal(styles.imgCard)}>
                  <img src={VeoImg} alt="" className="reveal" />
                </div>
                <div className={withReveal(styles.cardContent)}>
                  <h2 className="reveal">Veo</h2>
                  <p className="reveal">Nosso modelo de geração vídeo de última geração.</p>
                </div>
                <div className={withReveal(styles.arrowIcon)}>
                  <ArrowRight />
                </div>
              </div>
  
              {/* CARD 5 */}
              <div className={withReveal(styles.cardWrapper)}>
                <div className={withReveal(styles.imgCard)}>
                  <img src={AstraImg} alt="" className="reveal" />
                </div>
                <div className={withReveal(styles.cardContent)}>
                  <h2 className="reveal">Projeto Astra</h2>
                  <p className="reveal">
                    Um protótipo de pesquisa que explora os recursos futuros de um
                    assistente universal de IA.
                  </p>
                </div>
                <div className={withReveal(styles.arrowIcon)}>
                  <ArrowRight />
                </div>
              </div>
  
              {/* CARD 6 */}
              <div className={withReveal(styles.cardWrapper)}>
                <div className={withReveal(styles.imgCard)}>
                  <img src={MarinerImg} alt="" className="reveal" />
                </div>
                <div className={withReveal(styles.cardContent)}>
                  <h2 className="reveal">Projeto Mariner</h2>
                  <p className="reveal">
                    Um protótipo de pesquisa que explora o futuro da interação
                    homem-agente, começando com seu navegador.
                  </p>
                </div>
                <div className={withReveal(styles.arrowIcon)}>
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default Technologies;
