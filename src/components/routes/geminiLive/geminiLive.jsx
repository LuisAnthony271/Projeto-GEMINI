import React from 'react'
import Background from '../../../assets/hand-AI.png'
import styles from '../About/about.module.css'
import { withReveal } from '../../hook/withReveal'
import useRevealObserver from '../../hook/ScrollRevealHook'
import Blue from '../../btnBlue/blue'

const GeminiLive = () => {

    useRevealObserver()

  return (
    <section className={styles.aboutWrapper}>
        <img src={Background} alt="background" className={styles.background} />
        <div className={styles.aboutContent}>
            <h2 className={withReveal(styles.title)}>
                Gemini Live oferece: uma experiência de interação revolucionária com a inteligência artificial do Google.
            </h2>

            <p className={styles.paragraph}>
                <span className={styles.span}>
                    O Gemini Live representa um salto significativo na forma como nos comunicamos com a IA. Em vez de digitar comandos e receber respostas textuais, você pode conversar naturalmente com o Gemini através da sua voz. Essa funcionalidade transforma a interação em um diálogo fluido e intuitivo, muito parecido com uma conversa entre duas pessoas. <br /><br />
                </span>

                <span className={withReveal(styles.span)}>
                    Essa capacidade de conversação por voz em tempo real abre um leque de possibilidades. Você pode usar o Gemini Live para brainstorming de ideias, organização de pensamentos, obtenção de informações rápidas, planejamento de tarefas e muito mais, tudo isso de forma verbal e dinâmica. A IA se torna uma parceira de diálogo, capaz de entender nuances, responder em tempo real e até mesmo permitir que você a interrompa ou mude o rumo da conversa.
                    <br /><br />
                </span>

                <span className={withReveal(styles.span)}>
                    Além da voz, o Gemini Live integra a capacidade de compreender e discutir arquivos, imagens e vídeos. Essa integração multimídia eleva ainda mais o potencial da ferramenta, permitindo que você obtenha insights e informações a partir de diferentes tipos de conteúdo de maneira conversacional.
                    <br /><br />
                </span>

                <span className={withReveal(styles.span)}>
                    A conveniência também é um ponto chave: você pode manter a conversa com o Gemini Live em segundo plano, enquanto utiliza outros aplicativos no seu dispositivo, retornando à interação com um simples toque na notificação.
                    <br /><br />
                </span>

                <span className={withReveal(styles.span)}>
                    Disponível no aplicativo Gemini para Android em uma ampla variedade de idiomas e países, o Gemini Live está democratizando o acesso a uma forma de interação com a IA que é ao mesmo tempo poderosa e incrivelmente natural.
                    <br /><br />
                </span>

                <span className={withReveal(styles.span)}>
                    Em essência, o Gemini Live não é apenas uma nova funcionalidade; é uma nova maneira de interagir com a inteligência artificial, tornando-a mais acessível, conversacional e integrada ao seu dia a dia. Prepare-se para experimentar uma forma de colaboração com a IA que se adapta ao ritmo e à naturalidade da sua voz.
                                        <br /><br />
                </span>

                <span className={withReveal(styles.span)}>
                    Aqui estão os principais aspectos e funcionalidades do Gemini Live: <br /><br />

                    Conversa por voz natural: Você fala com o Gemini sem precisar digitar, e ele responde verbalmente. Isso torna a interação mais fluida e intuitiva.
                    Interrupção e mudança de assunto: Assim como em uma conversa humana, você pode interromper o Gemini para adicionar informações ou mudar o foco da discussão. <br /><br />
                    <br /><br />
                </span>

                <span className={withReveal(styles.span)}>
                    Brainstorming e organização de ideias: Use o Gemini Live para pensar em voz alta, pedir ideias para presentes, planejar eventos ou até mesmo criar planos de negócios. <br /><br />
                    Ajuda com arquivos, imagens e vídeos: Você pode compartilhar fotos, vídeos do YouTube e arquivos com o Gemini Live e conversar sobre eles. Por exemplo, você pode pedir informações sobre uma imagem, um resumo de um vídeo ou insights de um documento.
                    <br /><br />
                </span>

                <span className={withReveal(styles.span)}>
                    Utilização em segundo plano: Você pode continuar a conversa com o Gemini Live enquanto usa outros aplicativos no seu celular. Uma notificação permite retornar à tela cheia da conversa. <br /><br />
                    Disponibilidade: O Gemini Live está disponível no aplicativo Gemini para Android em mais de 45 idiomas e em diversos países. <br /><br />
                    Personalização da voz: Você pode escolher entre diferentes vozes para o Gemini responder.
                    <br /><br />
                </span>

                <span className={withReveal(styles.span)}>
                    Em resumo, o Gemini Live busca tornar a interação com a inteligência artificial mais natural, dinâmica e útil para diversas tarefas do dia a dia.
                    <br /><br />
                </span>
            </p>
            <div className={styles.btnWrapper}>
                <Blue href='https://gemini.google/overview/gemini-live/' rel='noopener noreferrer' target='_blank'> 
                    Veja o Gemini Live 
                </Blue>
            </div>
        </div>
    </section>
  )
}

export default GeminiLive