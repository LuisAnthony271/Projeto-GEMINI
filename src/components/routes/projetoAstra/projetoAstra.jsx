import styles from '../About/about.module.css'
import Background from '../../../assets/gemini-bg-4.png'
import useRevealObserver from '../../hook/ScrollRevealHook'
import { withReveal } from '../../hook/withReveal'
import Black from '../../btnBlack/black'

const ProjetoAstra = () => {

    useRevealObserver();

    return (
        <section className={styles.aboutWrapper}>
            <img src={Background} alt="background" className={styles.background} />
            <div className={styles.aboutContent}>

                <h2 className={withReveal(styles.title)}>
                    O que é o Projeto Astra?
                </h2>

                <p className={withReveal(styles.paragraph)}>
                    O Projeto Astra do Google é uma iniciativa de pesquisa e desenvolvimento focada na criação de um assistente universal de inteligência artificial. O objetivo é construir um agente de IA capaz de interagir com o mundo de forma muito mais natural e intuitiva, processando informações de diversas fontes – como vídeo, áudio, texto e imagens – em tempo real e lembrando-se de interações passadas para fornecer respostas mais contextuais e úteis.

                    Imagine um assistente que você pode consultar através da câmera do seu celular ou de óculos inteligentes, e ele consegue entender o que você está vendo, responder às suas perguntas sobre o ambiente, lembrar de objetos que você mencionou e até mesmo ajudar a resolver problemas complexos no mundo real. Essa é a visão por trás do Projeto Astra.
                </p>

                <p className={withReveal(styles.paragraph)}>                   
                    Algumas características e objetivos principais do Projeto Astra incluem:
                    Compreensão multimodal: A capacidade de processar e integrar informações de diferentes tipos de dados simultaneamente.   
                </p>  
                
                <p className={withReveal(styles.paragraph)}>
                    Interação em tempo real: Fornecer respostas rápidas e manter conversas fluidas sobre o que está acontecendo no momento.   
                </p>  
                
                <p className={withReveal(styles.paragraph)}>
                    Memória contextual: Lembrar de conversas anteriores e detalhes específicos para refinar as respostas futuras.  
                </p>  
                
                <p className={withReveal(styles.paragraph)}>
                    Utilização de ferramentas: Integrar-se com outros serviços do Google, como Busca, Maps e Lens, para fornecer informações mais completas.  
                </p>  
                
                <p className={withReveal(styles.paragraph)}>
                    Assistência universal: A ambição de ser um assistente útil em diversas situações do dia a dia, desde tarefas simples até a resolução de problemas mais complexos. 
                </p>  
                
                <p className={withReveal(styles.paragraph)}>
                    O Projeto Astra é alimentado por modelos avançados de IA, incluindo o Gemini, a família de modelos multimodais do Google. As demonstrações do projeto mostram um potencial significativo, mas ainda está em fase de desenvolvimento e não há uma data oficial de lançamento para o público. 
                </p>  
                
                <p className={withReveal(styles.paragraph)}>
                    Em resumo, o Projeto Astra representa a visão do Google para o futuro dos assistentes de IA, buscando uma interação mais inteligente, contextual e integrada com o mundo ao nosso redor.                    
                </p>  
                 <div className={styles.btnWrapper}>
                    <Black href='https://deepmind.google/technologies/project-astra/' rel='noopener noreferrer' target='_blank'>
                        Veja o Projeto Astra ❯
                    </Black>
                 </div>

            </div>
        </section>  
    )
}

export default ProjetoAstra
