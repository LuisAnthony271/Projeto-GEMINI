import React from 'react'
import styles from '../About/about.module.css'
import Background from '../../../assets/gemini-bg-4.png'
import { useEffect } from 'react'

const CreateContent = () => {

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
      <h2 className={withReveal(styles.title)}>
        como posso criar conteudos utilizando a Gemini
        Criação de conteudo
      </h2>


      <p className={withReveal(styles.paragraph)}> Criar conteúdo utilizando o Gemini pode ser uma forma poderosa de impulsionar sua criatividade e produtividade em diversas áreas. Aqui estão algumas maneiras de aproveitar as capacidades do Gemini para gerar diferentes tipos de conteúdo:<br/><br/>

      1. Conteúdo Textual:<br/><br/>

      Geração de Ideias e Brainstorming: Peça ao Gemini para gerar ideias para posts de blog, roteiros de vídeos, títulos criativos, slogans, nomes de produtos, etc. Você pode fornecer um tema ou tópico e pedir sugestões.
      Exemplo: "Gemini, me dê 5 ideias de posts para um blog sobre jardinagem em apartamentos em Niterói."
      Redação e Edição de Textos:
      Rascunhos Iniciais: Forneça um tópico ou algumas informações e peça ao Gemini para escrever um rascunho inicial de um artigo, e-mail, carta, ou qualquer outro tipo de texto.
      Exemplo: "Gemini, escreva um breve parágrafo sobre a importância da reciclagem em comunidades urbanas como Niterói."
      Expansão de Conteúdo: Peça para o Gemini expandir um parágrafo, detalhar um ponto específico ou adicionar mais informações a um texto que você já escreveu.
      Revisão e Edição: Peça para o Gemini revisar seu texto em busca de erros gramaticais, ortográficos, de estilo ou de tom.
      Resumo de Textos Longos: Cole um texto longo e peça ao Gemini para criar um resumo conciso.
      Paráfrase: Peça para o Gemini reescrever um texto com outras palavras, mantendo o significado original.
      Criação de Conteúdo para Redes Sociais:
      Legendas Criativas: Peça ao Gemini para gerar legendas atraentes para suas fotos e vídeos.
      Posts e Tweets: Solicite ideias e rascunhos de posts para diferentes plataformas de mídia social.
      Hashtags Relevantes: Peça sugestões de hashtags para aumentar o alcance do seu conteúdo.
      Criação de Conteúdo Criativo:
      Poemas e Músicas: Peça ao Gemini para escrever poemas sobre temas específicos ou letras de músicas em um determinado estilo.
      Roteiros e Diálogos: Solicite ajuda para criar roteiros para vídeos cur*tos, peças teatrais ou diálogos para personagens.
      Histórias e Contos: Peça ao Gemini para gerar histórias curtas com base em seus prompts.<br/><br/>
      </p>
      <p className={withReveal(styles.paragraph)}>
      2. Conteúdo Visual:<br/><br/>

      Geração de Imagens a partir de Texto: Se você tiver acesso a um modelo Gemini com essa capacidade (como o Gemini Pro no aplicativo ou o Gemini Ultra), você pode descrever uma imagem que deseja criar e o Gemini irá gerá-la para você.
      Exemplo: "Gemini, gere uma imagem de uma vista panorâmica da Baía de Guanabara ao pôr do sol, vista de Niterói."
      Ideias para Conteúdo Visual: Peça ao Gemini para sugerir ideias de fotos, ilustrações, vídeos curtos ou GIFs com base em um tema ou tópico.
      Exemplo: "Gemini, me dê 5 ideias de vídeos curtos sobre pontos turísticos de Niterói para o TikTok."
      Descrição de Imagens para Acessibilidade: Se você precisa de descrições textuais para tornar suas imagens acessíveis (para leitores de tela, por exemplo), o Gemini pode gerar essas descrições.
      Auxílio no Design (Conceptual): Embora o Gemini não seja uma ferramenta de design gráfica, você pode pedir ideias para layouts, paletas de cores ou conceitos visuais para seus projetos.<br/><br/>
      </p>
      <p className={withReveal(styles.paragraph)}>
        3. Conteúdo de Código:<br/><br/>

      Geração de Trechos de Código: Se você é um programador, pode pedir ao Gemini para gerar trechos de código em diferentes linguagens para tarefas específicas.
      Exemplo: "Gemini, escreva um código em Python para calcular o fatorial de um número."
      Explicação de Código: Cole um trecho de código e peça ao Gemini para explicar o que ele faz.
      Sugestões de Melhorias: Peça ao Gemini para sugerir maneiras de otimizar ou melhorar um código existente.
      Geração de Estruturas Básicas: Solicite a criação de estruturas básicas para funções, classes ou arquivos em diferentes linguagens de programação.<br/><br/>
      </p>

      <p className={withReveal(styles.paragraph)}>
      4. Conteúdo de Áudio e Vídeo (Capacidades em Evolução):<br/><br/>

      Geração de Roteiros e Scripts: Peça ao Gemini para criar roteiros para podcasts ou scripts para vídeos.
      Ideias para Conteúdo de Áudio/Vídeo: Solicite sugestões de temas, formatos e abordagens para seu conteúdo de áudio ou vídeo.
      Resumo de Conteúdo de Áudio/Vídeo (Potencial Futuro): Em futuras atualizações, o Gemini poderá ser capaz de resumir o conteúdo de arquivos de áudio e vídeo.
      Dicas para Criar Conteúdo Eficaz com o Gemini:<br/><br/>

      Seja Claro e Específico nos seus Prompts: Quanto mais detalhes você fornecer, melhores serão os resultados. Especifique o tipo de conteúdo, o tom, o público-alvo e quaisquer requisitos específicos.
      Itere e Refine: O conteúdo gerado pelo Gemini pode ser um ótimo ponto de partida, mas geralmente precisará de revisão e edição para se adequar ao seu estilo e necessidades. Use o Gemini para refinar e melhorar o conteúdo inicial.<br/><br/>
      Experimente Diferentes Prompts: Não tenha medo de experimentar diferentes formas de fazer a mesma pergunta ou solicitação para obter resultados variados.
      Use o Gemini como um Assistente Criativo: Pense no Gemini como um parceiro para brainstorming e geração de ideias, liberando você para se concentrar na estratégia e no toque pessoal do seu conteúdo.
      Verifique a Precisão: Embora o Gemini seja poderoso, é importante verificar a precisão das informações geradas, especialmente em conteúdos factuais.<br/><br/>
      Respeite os Direitos Autorais: Ao usar o Gemini para gerar conteúdo, esteja ciente das questões de direitos autorais e use o conteúdo de forma ética e legal.<br/><br/>
      Ao integrar o Gemini ao seu processo de criação de conteúdo, você pode economizar tempo, superar bloqueios criativos e explorar novas formas de expressão em diversos formatos. Comece experimentando com prompts simples e avance para solicitações mais complexas à medida que se familiariza com as capacidades do Gemini.'
      </p>
  </div>
</section>
  )    
}

export default CreateContent