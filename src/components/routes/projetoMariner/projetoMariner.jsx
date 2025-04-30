import React from 'react'
import styles from '../About/about.module.css'
import Background from '../../../assets/gemini-bg-4.png'
import Blue from '../../btnBlue/blue'
import useRevealObserver from '../../hook/ScrollRevealHook'
import { withReveal } from '../../hook/withReveal'

const ProjetoMariner = () => {

    useRevealObserver();

  return (
    <section className={styles.aboutWrapper}>
        <img src={Background} alt="background" className={styles.background} />
        <div className={styles.aboutContent}>

            <h2 className={withReveal(styles.title)}>
                O que é o Projeto Mariner?
            </h2>

            <p className={withReveal(styles.paragraph)}>
                <span className={withReveal(styles.span)}>
                    Project Mariner da Google DeepMind é um agente experimental de inteligência artificial (IA) projetado para auxiliar os usuários na navegação e interação com a web. Ele funciona como uma extensão para o navegador Chrome e é alimentado pelo modelo de IA Gemini 2.0.

                    O objetivo principal do Project Mariner é automatizar tarefas complexas e repetitivas na web, que normalmente exigiriam a intervenção manual do usuário. Ele busca rastrear sites de forma autônoma, extrair informações relevantes e realizar ações dentro do navegador. <br /><br />
                </span>

                <span className={withReveal(styles.span)}>
                  Como o Project Mariner funciona:

                    Compreensão Multimodal: O Mariner é capaz de entender e raciocinar sobre diversos elementos presentes na tela do navegador, incluindo texto, código, imagens e formulários. Ele também pode compreender e responder a comandos de voz.  <br /><br />
                </span>
                <span className={withReveal(styles.span)}>
                    Navegação e Interação: O agente consegue navegar por sites complexos em tempo real e interagir com os elementos da página em nome do usuário. <br /><br />
                </span>
                <span className={withReveal(styles.span)}>
                   Automação de Tarefas: O Mariner pode automatizar tarefas repetitivas, como preenchimento de formulários, coleta de dados de múltiplos sites, monitoramento de informações e outras ações que demandam tempo e esforço do usuário. <br /><br />
                </span>
                <span className={withReveal(styles.span)}>
                    Transparência e Controle: O Mariner exibe cada etapa de seu raciocínio e as ações planejadas na interface do usuário, permitindo que o usuário acompanhe e entenda suas decisões. Em caso de dúvidas, ele solicita esclarecimentos antes de prosseguir. <br /><br />
                </span>
                <span className={withReveal(styles.span)}>
                    Segurança: O Google implementou mecanismos de segurança para o Project Mariner. Ele não pode realizar ações confidenciais, como efetuar compras online ou inserir senhas, sem a confirmação explícita do usuário. O agente opera apenas na aba ativa do navegador. <br /><br />
                </span>
                <span className={withReveal(styles.span)}>
                    Exemplos de casos de uso:

                    Preenchimento automático de relatórios e formulários online recorrentes.
                    Monitoramento e coleta de dados de múltiplos sites concorrentes.
                    Automação de processos de cadastro e atualização de produtos em marketplaces.
                    Assistência em pesquisas de mercado e análise de concorrência.
                    Agilização de processos de recrutamento1 online. <br /><br />
                </span>
                <span className={withReveal(styles.span)}>
                    Status atual:

                    O Project Mariner ainda é um protótipo de pesquisa experimental e está disponível para um grupo seleto de testadores confiáveis como uma extensão do Chrome. O Google está coletando feedback desses usuários para refinar e desenvolver a tecnologia de forma segura e responsável. <br /><br />
                </span>
                <span className={withReveal(styles.span)}>
                   Em resumo, o Project Mariner representa uma visão do futuro da interação humano-computador na web, onde um agente de IA pode auxiliar e automatizar tarefas complexas diretamente no navegador, aumentando a produtividade e a eficiência do usuário. <br /><br />
                </span>    
            </p>
            <div className={styles.btnWrapper}>
                <Blue href='https://deepmind.google/technologies/project-mariner/' target='_blank' rel='noopener noreferrer'>
                    Veja o Projeto Mariner ❯
                </Blue>
            </div>
        </div>
    </section>
  )
}

export default ProjetoMariner