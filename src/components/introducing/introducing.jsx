import styles from './introducing.module.css'
import Blue from '../btnBlue/blue'
import Black from '../btnBlack/black'
import Personal from '../../assets/personal-assistent.webp'
import Content from '../../assets/content-creation.jpg'
import Robo from '../../assets/robo.webp'
import BackgroundGemini from '../../assets/gemini-bg-3.png'
import { useEffect } from 'react';

const Introducing = () => {

    useEffect(() => {
      const reveals = document.querySelectorAll('.reveal');
    
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      });
    
      reveals.forEach(reveal => observer.observe(reveal));
    
      return () => observer.disconnect();
    }, []);

  return (
    <section className={`${styles.introducing} reveal`}>
      <img src={BackgroundGemini} alt="background" className={styles.introBackground} />
        <div className={styles.introWrapper}>
          <div className={styles.introContent}>
            <h2 className={styles.h2Intro}>
                O que é o 
            </h2>
            <h1 className={styles.h1Intro}>Gemini?</h1>
          </div>
            <p className={styles.pIntro}>
            O Gemini é o mais recente e avançado modelo de inteligência artificial generativa desenvolvido pelo Google. Ele representa um salto significativo nas capacidades dos sistemas de IA, sendo capaz de entender e gerar texto, imagens, áudio e vídeo. O Gemini serve como base para diversos produtos e aplicações do Google, incluindo o assistente pessoal Gemini e ferramentas para desenvolvedores. Ele se destaca por sua multimodalidade e capacidade de lidar com tarefas complexas, buscando superar até mesmo especialistas humanos em certos benchmarks.
            </p>
            <div className={styles.btnIntro}>
                {/* <Blue> Saiba Mais</Blue> */}
                <Black>Saiba Mais</Black>
            </div>
            <div className={styles.cardWrapper}>
              <div className={styles.cardContainer}>
                
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                      <img src={Personal} alt="" className={styles.imgCard} />
                        <div className={styles.cardText}>
                          <h3 className={styles.h3Card}>Assitente pessoal</h3>
                          <p className={styles.pCard}>Responder perguntas complexas, fornecer resumos, ajudar na escrita de e-mails e documentos, traduzir idiomas em tempo real, planejar viagens e eventos.</p>
                          <Black>Saiba mais</Black>
                    </div>
                  </div>
                </div>
                
                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    <img src={Content} alt="" className={styles.imgCard} />
                    <div className={styles.cardText}>
                      <h3 className={styles.h3Card}>Criação de conteúdo</h3>
                      <p className={styles.pCard}>Gerar textos criativos, como poemas, roteiros e peças musicais, criar legendas para redes sociais, auxiliar no brainstorming de ideias.</p>
                      <Black>Saiba mais</Black>
                    </div>
                  </div>
                </div>
                
                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    <img src={Robo} alt="" className={styles.imgCard} />
                      <div className={styles.cardText}>
                        <h3 className={styles.h3Card}>Integração</h3>
                        <p className={styles.pCard}>Integrar o Gemini em sistemas robóticos para permitir um entendimento mais rico do ambiente e uma interação mais natural com humanos.</p>
                        <Black>Saiba mais</Black>
                      </div>
                  </div>
                </div>
              </div>

            </div>
        </div>
    </section>
  )
}

export default Introducing