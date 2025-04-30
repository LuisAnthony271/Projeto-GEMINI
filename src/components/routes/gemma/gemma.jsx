import styles from '../About/about.module.css'
import Background from '../../../assets/gemini-bg-4.png'
import useRevealObserver from '../../hook/ScrollRevealHook'
import { withReveal } from '../../hook/withReveal'
import Black from '../../btnBlack/black'

const Gemma = () => {
    useRevealObserver();
      
    return (
        <section className={styles.aboutWrapper}>
            <img src={Background} alt="background" className={styles.background} />
            <div className={styles.aboutContent}>
                <h2 className={withReveal(styles.title)}> 
                    O que é o Gemma?
                </h2>
            
                 <p className={withReveal(styles.paragraph)}>
                    O Gemma do Google é uma família de modelos de linguagem grandes (LLMs) abertos e leves, desenvolvidos pelo Google DeepMind. Ele foi construído com base na mesma pesquisa e tecnologia utilizada para criar os modelos Gemini, mas com foco em ser mais acessível e eficiente para desenvolvedores e pesquisadores.

                    Aqui estão os pontos principais sobre o Gemma:

                    Modelos Abertos: O Google disponibiliza os pesos dos modelos Gemma, permitindo que a comunidade os utilize, personalize e distribua. Isso fomenta a inovação e a colaboração no campo da inteligência artificial. <br /><br />
                    Leve e Eficiente: Os modelos Gemma são projetados para serem executados em diversas plataformas, desde laptops e desktops até a infraestrutura de nuvem, incluindo GPUs e TPUs. Isso democratiza o acesso a modelos de IA de última geração.<br /><br />
                 </p>
                 <p className={withReveal(styles.paragraph)}>
                    Alto Desempenho: Apesar de serem menores, os modelos Gemma demonstram um desempenho competitivo em diversas tarefas de linguagem natural, muitas vezes superando modelos significativamente maiores em benchmarks importantes. <br /><br />
                    Variedade de Tamanhos: A família Gemma inclui modelos com diferentes números de parâmetros (como 2B, 7B, 9B, 27B), permitindo que os usuários escolham o modelo mais adequado para suas necessidades de recursos computacionais e desempenho desejado.
                 </p>
                 <p className={withReveal(styles.paragraph)}>
                    Variantes Pré-treinadas e Ajustadas por Instrução: O Gemma é oferecido em versões pré-treinadas (para tarefas gerais de linguagem) e ajustadas por instrução (otimizadas para seguir instruções em linguagem natural), oferecendo flexibilidade para diferentes casos de uso. <br /><br />
                    Casos de Uso: O Gemma pode ser utilizado para diversas aplicações, incluindo:
                    Geração de texto (e-mails, artigos, código, etc.)
                    Respostas a perguntas
                    Tradução
                    Resumo de textos
                    Criação de chatbots e assistentes virtuais
                 </p>
                 <p className={withReveal(styles.paragraph)}>
                    Edição e revisão de texto <br /><br />
                    Integração com Ferramentas: O Google facilita o uso do Gemma através de integrações com ferramentas populares como Hugging Face, Kaggle, Google AI Studio e Vertex AI. <br /><br />
                    Gemma 2 e Gemma 3: A família Gemma evoluiu com o lançamento de versões mais recentes, como o Gemma 2 e o Gemma 3, que trazem melhorias arquitetônicas, suporte a mais idiomas (mais de 140 no Gemma 3), janelas de contexto maiores e capacidades multimodais (texto e imagem no Gemma 3). O Gemma 3 também introduziu o "ShieldGemma 2" para verificação de segurança de imagens.
                    Em resumo, o Gemma é uma importante contribuição do Google para a comunidade de IA, oferecendo modelos de linguagem poderosos, abertos e eficientes que podem ser utilizados por uma ampla gama de desenvolvedores e pesquisadores para construir aplicações inovadoras de inteligência artificial.
                 </p>
                 <div className={withReveal(styles.btnWrapper)}>
                    <Black href="https://ai.google.dev/gemma?hl=pt-br" target='_blank' rel='noopener noreferrer'>
                        Veja o Gemma ❯
                    </Black>
                 </div>
            </div>
        </section>
    )
}

export default Gemma