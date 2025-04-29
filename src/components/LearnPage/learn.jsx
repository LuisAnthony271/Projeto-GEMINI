import React from 'react'
import styles from '../About/about.module.css'
import Background from '../../assets/robot_IA.png'
import { useEffect } from 'react';

const Learn = () => {

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
    <section className={styles.aboutWrapper}>
      <img src={Background} alt="background" className={styles.background} />
        <div className={styles.aboutContent}>
            <h2 className={withReveal(styles.title)}>Como funciona o metodo de aprendizado <br />do Gemini?</h2>
            <p className={withReveal(styles.paragraph)}>
              O Gemini, como outros modelos de linguagem grandes (LLMs) modernos, utiliza principalmente o método de aprendizado de máquina chamado aprendizado supervisionado em larga escala, com algumas nuances importantes devido à sua natureza multimodal. Vamos detalhar como esse processo funciona para o Gemini:<br /> <br />
            
              1. Coleta e Preparação de Dados Massivos:

              Dados Textuais: Uma vasta quantidade de texto da internet é utilizada, incluindo livros, artigos, websites, código-fonte, e muito mais. Essa diversidade garante que o modelo aprenda sobre diferentes tópicos, estilos de escrita e formatos de informação.
              Dados Multimodais: A característica distintiva do Gemini é o uso extensivo de dados que combinam diferentes modalidades:
              Pares Texto-Imagem: Legendas descritivas associadas a imagens.
              Pares Texto-Áudio: Transcrições de áudio.
              Pares Texto-Vídeo: Descrições de vídeos ou legendas em quadros específicos.
              Dados de Código com Explicações: Código de programação com comentários e documentação.
              Processamento e Limpeza: Esses dados brutos passam por um processo de limpeza e pré-processamento para remover informações irrelevantes, formatar o texto de maneira consistente e tokenizar o conteúdo (dividir o texto em unidades menores, como palavras ou subpalavras).<br /> <br />
              </p>
              <p className={withReveal(styles.paragraph)}>
              2. Arquitetura de Rede Neural Transformer:

              O Gemini é baseado na arquitetura Transformer, que se tornou o padrão para modelos de linguagem de última geração. Essa arquitetura é especialmente eficaz em processar sequências de dados (como texto) e capturar dependências de longo alcance entre os elementos.
              Mecanismos de Atenção: Uma parte fundamental do Transformer são os mecanismos de atenção, que permitem ao modelo ponderar a importância de diferentes partes da sequência de entrada ao processar cada elemento. Isso é crucial para entender o contexto e as relações entre as palavras (ou outros tokens) em uma frase ou entre diferentes modalidades.
              Camadas de Autoatenção: O modelo utiliza múltiplas camadas de autoatenção para aprender representações complexas dos dados de entrada.
              </p>
              <p className={withReveal(styles.paragraph)}>
              Módulos Multimodais: Para lidar com diferentes tipos de dados, o Gemini possui módulos específicos para processar cada modalidade (por exemplo, redes convolucionais para imagens, processamento de áudio específico). As representações aprendidas por esses módulos são então integradas e alinhadas para que o modelo possa entender as relações entre elas.<br /> <br />
              </p>
              <p className={withReveal(styles.paragraph)}>
              3. Aprendizado Supervisionado:

              O treinamento do Gemini é predominantemente supervisionado. Isso significa que o modelo aprende a partir de exemplos rotulados. No caso de um LLM, a "rotulagem" ocorre de forma implícita no próprio texto.
              Tarefa de Próxima Palavra (ou Token) Predição: Durante o treinamento de texto, o modelo recebe uma sequência de palavras e é treinado para prever a próxima palavra (ou token) na sequência. Ao fazer isso repetidamente em um conjunto de dados massivo, o modelo aprende a estrutura da linguagem, gramática, semântica e até mesmo algum conhecimento sobre o mundo.
              Tarefas Multimodais: Para o aprendizado multimodal, o modelo é treinado em tarefas como:
              Legendar Imagens: Dada uma imagem, gerar uma descrição textual precisa.
              </p>
              <p className={withReveal(styles.paragraph)}>
              Responder a Perguntas sobre Imagens/Vídeos: Entender o conteúdo visual e responder a perguntas relacionadas.
              Gerar Imagens a partir de Texto: Criar imagens com base em descrições textuais.
              Traduzir entre Modalidades: Por exemplo, descrever um áudio em texto ou gerar áudio a partir de texto.
              Completar Sequências Multimodais: Prever o próximo elemento em uma sequência que pode conter texto, imagem, áudio, etc.<br /> <br />
              </p>
              <p className={withReveal(styles.paragraph)}>
              4. Escala Massiva:

              Um fator crucial para o desempenho do Gemini é a escala do treinamento. Isso envolve:
              Grandes Conjuntos de Dados: Quanto mais dados diversificados o modelo vê, melhor ele generaliza e aprende representações robustas.
              Modelos com Muitos Parâmetros: O Gemini possui um número enorme de parâmetros (as "conexões" dentro da rede neural), permitindo que ele armazene e processe grandes quantidades de informação.
              Infraestrutura Computacional Poderosa: Treinar modelos dessa escala requer uma enorme quantidade de poder computacional, geralmente utilizando milhares de GPUs ou TPUs (Tensor Processing Units) em paralelo.<br /> <br />
              </p>
              <p className={withReveal(styles.paragraph)}>
              5. Fine-tuning e Alinhamento:

              Após o pré-treinamento em larga escala, o Gemini passa por um processo de fine-tuning (ajuste fino) em conjuntos de dados mais específicos para melhorar seu desempenho em tarefas particulares ou para alinhar seu comportamento com as expectativas humanas (por exemplo, ser útil, honesto e inofensivo).
              Aprendizado por Reforço com Feedback Humano (RLHF): Essa técnica é frequentemente usada para o alinhamento. Humanos avaliam as respostas do modelo a diferentes prompts, e essas avaliações são usadas para treinar um modelo de recompensa que prediz a qualidade das respostas. Esse modelo de recompensa é então usado para otimizar o LLM usando algoritmos de aprendizado por reforço.
              Em resumo, o Gemini aprende através da exposição a vastas quantidades de dados textuais e multimodais, processados por uma arquitetura Transformer complexa. O aprendizado supervisionado em larga escala permite que ele capture padrões e relações na linguagem e entre diferentes modalidades. Etapas adicionais de fine-tuning e alinhamento garantem que o modelo seja eficaz em tarefas específicas e se comporte de maneira desejável. A capacidade de processar e aprender simultaneamente a partir de diferentes tipos de dados é o que diferencia o Gemini de muitos modelos anteriores focados principalmente em texto.
              </p>
        </div>
    </section>
  )
}

export default Learn