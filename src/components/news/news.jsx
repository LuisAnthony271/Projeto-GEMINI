import styles from './news.module.css'
import Black from '../btnBlack/black'
import { useEffect } from 'react'
import NewGemini from '../../assets/gemini-2.5.webp'
import GeminiLive from '../../assets/gemini-live.png'
import Terminator from '../../assets/terminator-schwazenegger.jpg'
import Hand from '../../assets/hand-AI.png'
import { ArrowRight } from "lucide-react";


const News = () => {

    const isMobile = window.matchMedia("(max-width: 600px)").matches;
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          const target = entry.target;
  
          if (entry.isIntersecting) {
            target.style.transitionDelay = `${index * 100}ms`;
            target.classList.add('active');
            target.classList.remove('inactive');
          } else {
            target.style.transitionDelay = '0ms';
            target.classList.remove('active');
            target.classList.add('inactive');
          }
        });
      }, {
        threshold: isMobile ? 0.1 : 0.2,
        rootMargin: isMobile ? "0px 0px -15% 0px" : "0px 0px -10% 0px",
      });
  
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(reveal => observer.observe(reveal));
  
      return () => {
        reveals.forEach(reveal => observer.unobserve(reveal));
      };
    }, );
  
    const withReveal = (className) => `${className} reveal`;
  
    return (
      <section className={withReveal(styles.news)} id="news">

        <img className={styles.hand} src={Hand} alt="" />

        <div className={withReveal(styles.newsWrapper)}>
          <div className={withReveal(styles.newsContent)}>
            <h2 className={styles.h2News}>Ultimas noticias</h2>
            <p className={styles.pNews}>Saiba tudo sobre nossas ultimas atualizações e inovações</p>  
          </div>
  
          <div className={withReveal(styles.cardWrapper)}>
            <div className={withReveal(styles.card1)}>
              <a href="#" className={withReveal(styles.aNews)}>
                <img src={NewGemini} alt="gemini-2.5" />
                <h3 className={withReveal(styles.h3Card)}>
                  Gemini 2.5: <span className={withReveal(styles.spanCard)}>O nosso modelo de IA mais inteligente</span>
                </h3>
                <p className={withReveal(styles.pCard1)}>
                  O Gemini 2.5 Pro Experimental apresenta raciocínio aprimorado e melhor desempenho em tarefas complexas como programação, matemática e compreensão de imagens.Esta versão experimental está disponível no aplicativo Gemini para web e dispositivos móveis, e para planos Business e Education qualificados do Google Workspace.
                  O Google enfatiza que este é um pré-lançamento e o modelo experimental pode apresentar comportamentos inesperados e erros.
                </p>
              </a>
              <a href="" className="">
                <ArrowRight className={withReveal(styles.cardArrow)}/>
              </a>
            </div>
  
            <div className={withReveal(styles.card2)}>
              <div className={withReveal(styles.row)}>
                <a href="#" className={withReveal(styles.aNews)}>
                  <img src={GeminiLive} alt="gemini-live" />
                  <h4 className={withReveal(styles.h4Card)}>Gemini Live</h4>
                  <p className={withReveal(styles.pRow)}>
                    A funcionalidade Gemini Live foi aprimorada, permitindo conversas multilíngues mais fluidas (suportando mais de 45 idiomas) e a capacidade de adicionar imagens, arquivos e vídeos do YouTube para discussão.
                  </p>
                  <a href="" className="">
                    <ArrowRight className={withReveal(styles.card2Arrow)}/>
                  </a>
                </a>

              </div>
              <div className={withReveal(styles.row)}>
                <a href="#" className={withReveal(styles.aNews)}>
                  <img src={Terminator} alt="terminator" />
                  <h4 className={withReveal(styles.h4Card)}>Qual será o futuro das IAs?</h4>
                  <p className={withReveal(styles.pRow2)}>
                    Conforme o tempo passa, as IAs se tornam cada vez mais inteligentes, e isso significa que o futuro das IAs parece estar se tornando cada vez mais complexo e desafiador.
                  </p>
                    <a href="" className="">
                        <ArrowRight className={withReveal(styles.card2Arrow)}/>
                    </a>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default News;