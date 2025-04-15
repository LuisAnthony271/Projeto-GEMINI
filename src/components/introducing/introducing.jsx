import styles from './introducing.module.css'
import Blue from '../btnBlue/blue'
import Black from '../btnBlack/black'
import Personal from '../../assets/personal-assistent.webp'
import Content from '../../assets/content-creation.jpg'
import Robo from '../../assets/robo.webp'
import BackgroundGemini from '../../assets/gemini-bg-4.png'
import { useEffect } from 'react';
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';


const Introducing = () => {

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

  return (
    <section className={`${styles.introducing} reveal`} id="introducing">
      <div className={styles.backgroundWrapper}>
      <div className={styles.glow}></div>
        <img src={BackgroundGemini} alt="background" className={`${styles.introBackground} reveal`} />
      </div>
      <div className={`${styles.introWrapper} reveal`}>

        {/* Título */}
        <div className={`${styles.introContent} reveal`}>
          <h2 className={`${styles.h2Intro} reveal`}>O que é o</h2>
          <h1 className={`${styles.h1Intro} reveal`}>Gemini?</h1>
        </div>

        {/* Parágrafo */}
        <p className={`${styles.pIntro} reveal`}>
          O Gemini é o mais recente e avançado modelo de inteligência artificial generativa desenvolvido pelo Google. Ele representa um salto significativo nas capacidades dos sistemas de IA, sendo capaz de entender e gerar texto, imagens, áudio e vídeo. O Gemini serve como base para diversos produtos e aplicações do Google, incluindo o assistente pessoal Gemini e ferramentas para desenvolvedores. Ele se destaca por sua multimodalidade e capacidade de lidar com tarefas complexas, buscando superar até mesmo especialistas humanos em certos benchmarks.
        </p>

        {/* Botão */}
        <div className={`${styles.btnIntro} reveal`}>
          <Link to={'/About'}>
            <Black>Saiba Mais</Black>
          </Link>
        </div>

        {/* Cards */}
        <div className={`${styles.cardWrapper} reveal`}>
          <div className={`${styles.cardContainer} reveal`}>

            <div className={`${styles.card} reveal`}>
            <Link to={'/Assistente'}>
              <div className={`${styles.cardContent} reveal`}>
                <img src={Personal} alt="" className={`${styles.imgCard} reveal`} />
                <div className={`${styles.cardText} reveal`}>
                  <h3 className={styles.h3Card}>Assistente pessoal</h3>
                  <p className={styles.pCard}>Responder perguntas complexas, fornecer resumos, ajudar na escrita de e-mails e documentos, traduzir idiomas em tempo real, planejar viagens e eventos.</p>
                  <div className={styles.btnCardWrapper}>
                  {/* <Black>Saiba mais</Black> */}
                  <ArrowRight className={styles.arrow}></ArrowRight>

                  </div>
                </div>
              </div>
            </Link>
            </div>

            <div className={`${styles.card} reveal`}>
              <Link to='/Create'>
              <div className={`${styles.cardContent} reveal`}>
                <img src={Content} alt="" className={`${styles.imgCard} reveal`} />
                <div className={`${styles.cardText} reveal`}>
                  <h3 className={styles.h3Card}>Criação de conteúdo</h3>
                  <p className={styles.pCard}>Gerar textos criativos, como poemas, roteiros e peças musicais, criar legendas para redes sociais, auxiliar no brainstorming de ideias.</p>
                  <div className={styles.btnCardWrapper}>
                  {/* <Black>Saiba mais</Black> */}
                  <ArrowRight className={styles.arrow2}></ArrowRight>

                  </div>
                </div>
              </div>
              </Link>
            </div>

            <div className={`${styles.card} reveal`}>
              <Link to='/Integrate'>
              <div className={`${styles.cardContent} reveal`}>
                <img src={Robo} alt="" className={`${styles.imgCard} reveal`} />
                <div className={`${styles.cardText} reveal`}>
                  <h3 className={styles.h3Card}>Integração</h3>
                  <p className={styles.pCard}>Integrar o Gemini em sistemas robóticos para permitir um entendimento mais rico do ambiente e uma interação mais natural com humanos.</p>
                  <div className={styles.btnCardWrapper}>
                  {/* <Black>Saiba mais</Black> */}
                  <ArrowRight className={styles.arrow2}></ArrowRight>
                  </div>
                </div>
              </div>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Introducing;
