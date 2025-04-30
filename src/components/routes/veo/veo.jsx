import styles from '../About/about.module.css'
import Background from '../../../assets/gemini-bg-4.png'
import useRevealObserver from '../../hook/ScrollRevealHook'
import { withReveal } from '../../hook/withReveal'
import Blue from '../../btnBlue/blue'

const Veo = () => {

    useRevealObserver();

    return (
        <section className={styles.aboutWrapper}>
            <img src={Background} alt="background" className={styles.background} />
            <div className={styles.aboutContent}>
                <h2 className={withReveal(styles.title)}>
                    O que é o VEO?
                </h2>
                <p className={withReveal(styles.paragraph)}>
                    O Veo do Google é um modelo avançado de inteligência artificial generativa de vídeo, desenvolvido pelo Google DeepMind. Ele tem a capacidade de criar vídeos de alta qualidade e com movimentos realistas a partir de prompts de texto, imagens ou uma combinação de ambos. <br /><br />

                    Principais Características do Veo:

                    Geração de Texto para Vídeo (Text-to-Video - T2V): Transforma descrições textuais detalhadas em cenas de vídeo dinâmicas. O Veo interpreta nuances e tons da linguagem natural, permitindo a criação de vídeos que seguem de perto o prompt fornecido.
                    Geração de Imagem para Vídeo (Image-to-Video - I2V): Anima imagens estáticas, dando-lhes movimento e vida. Isso permite transformar fotos em clipes de vídeo envolventes. <br /><br /> 
                    </p>
                    <p className={withReveal(styles.paragraph)}>

                    Alta Resolução: O Veo é capaz de gerar vídeos com resolução de até 1080p e, em testes, demonstrou potencial para alcançar 4K.
                    Longa Duração: Pode gerar vídeos que ultrapassam 60 segundos de duração, o que representa um avanço significativo em relação a outras ferramentas de IA de vídeo.
                    Movimento Suave e Realista: Incorpora uma compreensão da física do mundo real, resultando em movimentos naturais e precisos de objetos e personagens nas cenas. <br /><br />
                    </p>
                    <p className={withReveal(styles.paragraph)}>
                    Controle Cinematográfico: Permite aos usuários especificar elementos cinematográficos como ângulos de câmera (plano baixo, travelling), tipos de lente (18mm para planos amplos) e ajustes de profundidade de campo.
                    Consistência Visual: Mantém a consistência de personagens, objetos e cenas ao longo dos quadros do vídeo, evitando flickers ou transformações inesperadas.
                    Edição: Oferece a capacidade de estender a duração de vídeos existentes a partir de um único prompt ou de uma sequência de prompts, facilitando a criação de narrativas mais longas. <br /><br />
                    </p>
                    <p className={withReveal(styles.paragraph)}>
                    Segurança: Implementa filtros de segurança para evitar a geração de conteúdo ofensivo e utiliza marcas d'água digitais (SynthID) para identificar vídeos gerados por IA.
                    Aplicações do Veo:
                    </p>
                    <p className={withReveal(styles.paragraph)}>
                    O Veo tem um vasto potencial de aplicação em diversas áreas, incluindo:

                    Criação de Conteúdo: Auxilia na produção de vídeos para marketing, redes sociais, apresentações e entretenimento.
                    Prototipagem Rápida: Permite visualizar ideias e conceitos rapidamente através de vídeos gerados por IA. <br /><br />
                    Educação: Criação de materiais visuais dinâmicos para auxiliar no aprendizado. <br /><br />
                    </p>
                    <p className={withReveal(styles.paragraph)}>
                    Pesquisa: Ferramenta para visualização de dados e simulações.
                    Acessibilidade: Transformar texto em vídeos para pessoas com dificuldades de leitura. <br /><br />
                    Acesso ao Veo:

                    O Veo está sendo integrado em diversas plataformas do Google: <br /><br />
                    </p>
                    <p className={withReveal(styles.paragraph)}>

                    Gemini Advanced: Usuários do Gemini Advanced já podem gerar vídeos de até 8 segundos a partir de prompts de texto, utilizando o modelo Veo 2. <br></br>2
                    Vertex AI: Desenvolvedores podem acessar o Veo através da Vertex AI para integrar a geração de vídeo em suas aplicações.
                    Google AI Studio: Uma plataforma para experimentar e prototipar com modelos de IA do Google, incluindo o Veo 2.
                    </p>
                    <p className={withReveal(styles.paragraph)}>
                    VideoFX (Google Labs): Uma ferramenta experimental que permite gerar vídeos a partir de texto, com acesso mediante convite.
                    Whisk (Google Labs): Permite animar imagens estáticas em vídeos curtos utilizando o Veo 2.
                    Em resumo, o Veo representa um avanço significativo na geração de vídeo por IA, oferecendo qualidade, controle e potencial criativo sem precedentes. À medida que a tecnologia continua a evoluir, podemos esperar ainda mais recursos e aplicações inovadoras para o Veo.
                    </p>

                    <div className={styles.btnWrapper}>
                        <Blue href='https://deepmind.google/technologies/veo/veo-2/' target='_blank' rel='noopener noreferrer'>
                            Veja o Veo ❯
                        </Blue>
                    </div>
            </div>
        </section>
    )
}


export default Veo