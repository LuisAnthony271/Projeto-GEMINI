import React from 'react'
import styles from '../About/about.module.css'
import Background from '../../../assets/hand-AI.png'
import { withReveal } from '../../hook/withReveal'
import useRevealObserver from '../../hook/ScrollRevealHook'
import Blue from '../../btnBlue/blue'

const Gemini25 = () => {

    useRevealObserver()

  return (
    <section className={styles.aboutWrapper}>

        <img src={Background} alt="background" className={styles.background} />

        <div className={styles.aboutContent}>
            <h2 className={withReveal(styles.title)}>
                Olá! Vamos mergulhar no universo do Gemini 2.5 do Google.
            </h2>
            <p className={withReveal(styles.paragraph)}>
                <span className={withReveal(styles.span)}>
                    O Gemini 2.5 representa a mais recente e avançada família de modelos de inteligência artificial multimodal desenvolvida pelo Google DeepMind. Anunciado em março de 2025, ele sucede a linhagem Gemini 1.0 e 2.0, elevando significativamente o patamar em termos de inteligência, capacidade de raciocínio e compreensão multimodal.
                    <br /><br />
                </span>

                <span className={withReveal(styles.span)}>

                    Principais Características e Avanços:

                    Inteligência Aprimorada: O Gemini 2.5 é descrito pelo Google como o seu modelo de IA mais inteligente até o momento. Ele demonstra um raciocínio superior em tarefas complexas, abrangendo áreas como codificação, matemática e ciências. <br /><br />
                    Compreensão Multimodal Nativa: Assim como seus predecessores, o Gemini 2.5 é nativamente multimodal, o que significa que ele pode processar e entender informações em diversos formatos, incluindo texto, código, imagens, áudio e vídeo, de forma integrada desde o início de seu treinamento.
                    <br /><br />
                </span>

                <span className={withReveal(styles.span)}>
                    Janela de Contexto Longa: Uma das características notáveis do Gemini 2.5 Pro é sua vasta janela de contexto, capaz de processar grandes volumes de informação simultaneamente. Isso permite analisar documentos extensos, bases de código complexas e manter conversas mais ricas e contextuais. Estima-se que a janela de contexto possa chegar a 1 milhão de tokens em alguns modelos da família.
                    <br /><br />Capacidades de Codificação Avançadas: O Gemini 2.5 Pro se destaca em tarefas de codificação, sendo capaz de gerar aplicativos web visualmente atraentes, criar aplicações de código complexas e realizar transformações e edições de código com alta proficiência.
                    <br /><br />
                </span>

                <span className={withReveal(styles.span)}>
                    "Thinking Models": Uma inovação interessante da série 2.5 é o conceito de "modelos de pensamento". Esses modelos são capazes de deliberar e raciocinar sobre um problema antes de gerar uma resposta, o que leva a uma maior precisão e melhor desempenho em tarefas que exigem planejamento e raciocínio complexo. O Gemini 2.5 Flash, por exemplo, é apresentado como um modelo de "pensamento" rápido e eficiente.
                    <br /><br />
                    Desempenho Superior em Benchmarks: O Gemini 2.5 Pro tem demonstrado liderança em benchmarks comuns que avaliam as capacidades de modelos de linguagem grandes (LLMs), superando modelos concorrentes em termos de precisão e qualidade de resposta.
                    <br /><br />
                </span>

                <span className={withReveal(styles.span)}>
                    Disponibilidade e Acesso: <br /><br />

                    O Gemini 2.5 está sendo introduzido gradualmente. O Gemini 2.5 Pro Experimental foi lançado inicialmente para usuários do Google AI Studio e Gemini Advanced, com planos de disponibilização futura na Vertex AI. O Gemini 2.5 Flash também está disponível em prévia no Google AI Studio e na Vertex AI.<br /><br />

                    Em resumo, o Gemini 2.5 representa um salto significativo nas capacidades da inteligência artificial do Google, oferecendo um modelo mais inteligente, com melhor raciocínio, compreensão multimodal aprimorada e a capacidade de lidar com contextos informacionais muito mais extensos. Sua arquitetura inovadora de "modelos de pensamento" promete revolucionar a forma como a IA interage e resolve problemas complexos.
                    <br /><br />
                </span>
            </p>
            <div className={styles.btnWrapper}>
                <Blue href='https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/' rel='noopener noreferrer'
                target='_blank'>
                    Veja mais sobre o Gemini 2.5
                </Blue>
            </div>
        </div>
    </section>
  )
}

export default Gemini25