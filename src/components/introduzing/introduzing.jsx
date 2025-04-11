
import styles from './introduzing.module.css';
import Black from '../btnBlack/black';
import { motion } from 'framer-motion'

const introduzing = () => {

  return (
    <motion.section className={styles.introduzing}
    initial={{opacity:0,translateY:-100}}
    whileInView={{opacity:1,translateY:0}}
    transition={{duration:2,type:"ease-in"}}>
        <div className={styles.introWrapper}>
            <div className={styles.textIntro}>     
            <h2 data-aos="fade-up" className={styles.h2Intro}>Introduzindo o </h2>
            <h1 data-aos="fade-up" className={styles.h1Intro}>GEMINI</h1>
            </div>
            <p data-aos="fade-up" className={styles.pIntro}>
            O Gemini é a mais recente e mais avançada família de modelos de inteligência artificial generativa desenvolvida pelo Google. Anunciado em dezembro de 2023, o Gemini foi projetado para ser multimodal desde o início, o que significa que pode compreender e gerar informações em diferentes formatos, como texto, código, áudio, imagem e vídeo simultaneamente.
            O Gemini representa um avanço significativo em relação aos modelos de IA anteriores do Google, como o LaMDA e o PaLM 2, e se posiciona como um concorrente direto de modelos poderosos como o GPT-4 da OpenAI.
            </p>
            <div className={styles.btnHero}>

            </div>

            <div className={styles.introCards}>
             <div className={styles.cards}>

             </div>
             <div className={styles.cards}>

             </div>
             <div className={styles.cards}>

             </div>
            </div>
        </div>
    </motion.section>
  )
}

export default introduzing
