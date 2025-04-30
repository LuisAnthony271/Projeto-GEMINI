import React from 'react'
import styles from '../About/about.module.css'
import useRevealObserver from '../../hook/ScrollRevealHook'
import { withReveal } from '../../hook/withReveal'
import Black from '../../btnBlack/black'
import Background from '../../../assets/gemini-bg-4.png'

const Imagen = () => {

    useRevealObserver();

  return (
    <section className={styles.aboutWrapper}>
        <img src={Background} alt="background" className={styles.background} />
        <div className={styles.aboutContent}>

            <h2 className={withReveal(styles.title)}>
                O que é o Imagen?
            </h2>

            <p className={withReveal(styles.paragraph)}>
                O Imagen da Google é uma família de modelos de inteligência artificial (IA) desenvolvida pelo Google DeepMind, especializada na geração e edição de imagens a partir de texto. Pense nele como uma ferramenta poderosa que pode transformar suas descrições textuais em imagens visuais, com um foco em foto-realismo e alta qualidade. <br /><br />

                Aqui estão os principais pontos sobre o Imagen: <br /><br />

                Geração de Texto para Imagem: A principal funcionalidade do Imagen é criar imagens inéditas com base em prompts de texto fornecidos pelo usuário. Você descreve o que deseja ver, e o Imagen tenta gerar uma imagem correspondente. <br /><br />

                Foto-realismo: Uma das características marcantes do Imagen é sua capacidade de gerar imagens que se assemelham a fotografias reais, com detalhes impressionantes, iluminação rica e poucos artefatos visuais.<br /><br />
                Evolução: O Imagen passou por várias iterações. Atualmente, o Imagen 3 é a versão mais recente e avançada, oferecendo ainda mais detalhes, melhor compreensão da linguagem natural e a capacidade de renderizar texto de forma mais eficaz dentro das imagens. O Imagen 2 ainda é uma versão poderosa e utilizada em diversos produtos do Google.<br /><br />
            </p>    
            <p className={withReveal(styles.paragraph)}>
                Aplicações: A tecnologia Imagen é utilizada em diversas aplicações e plataformas do Google, incluindo:<br /><br />

                Vertex AI: A plataforma de IA do Google Cloud para desenvolvedores e empresas, onde o Imagen pode ser usado para gerar e editar imagens em projetos profissionais.<br /><br />
            </p>
            <p className={withReveal(styles.paragraph)}>
                Gemini: O modelo multimodal do Google também utiliza o Imagen para suas capacidades de geração de imagens.<br /><br />
                Google Slides: O Imagen 3 está integrado ao Google Slides para facilitar a criação de imagens personalizadas para apresentações.<br /><br />
                ImageFX: Uma ferramenta experimental do Google Labs que permite aos usuários gerar imagens de forma criativa a partir de prompts de texto.<br /><br />
            </p>
            <p className={withReveal(styles.paragraph)}>

                Search Generative Experience (SGE): Em alguns casos, o Imagen pode ser usado para gerar visualizações do que você está procurando diretamente na Busca do Google.
                Recursos: <br /><br />

                O Imagen oferece diversos recursos, como:<br /><br />

            </p>
            <p className={withReveal(styles.paragraph)}>
                Geração de imagens com diferentes proporções.
                Edição de imagens, incluindo inserir, remover ou expandir conteúdo usando máscaras ou comandos de texto.
                Personalização de imagens com base em estilos ou assuntos específicos fornecidos como referência.
                Adição de marcas d'água digitais (SynthID) para identificar imagens geradas por IA.
                Controles de segurança para gerenciar a geração de conteúdo potencialmente sensível.
                Em resumo, o Imagen é uma tecnologia de ponta do Google que utiliza inteligência artificial para criar imagens realistas e de alta qualidade a partir de descrições textuais, com diversas aplicações em ferramentas e plataformas da empresa.
            </p>

            <div className={styles.btnWrapper}>
                <Black href='https://deepmind.google/technologies/imagen-3/' target='_blank' rel='noopener noreferrer'>
                    Veja o Imagen ❯
                </Black>
            </div>
        </div>
    </section>
  )
}

export default Imagen