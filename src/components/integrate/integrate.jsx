import React from 'react'
import Template from '../template/template'
import styles from '../About/about.module.css'
import Background from '../../assets/gemini-bg-4.png'
import { useEffect } from 'react'

const Integrate = () => {

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
      <img src={Background} alt='background' className={styles.background} />
      <div className={styles.aboutContent}>
        <h2 className={withReveal(styles.title)}>
          Como integrar a Gemini ao seu dia a dia?
        </h2> 
        <p className={withReveal(styles.paragraph)}> 
          Integrar o Gemini na sua vida e no seu dia a dia pode ser feito de diversas maneiras, aproveitando suas capacidades multimodais e sua crescente integração com os produtos e serviços do Google. Aqui estão algumas sugestões práticas, considerando que você está em Niterói, Rio de Janeiro, Brasil:

          1. Utilizando o Aplicativo Gemini (Android e iOS):<br /><br />

          Baixe e Configure: Se você possui um smartphone Android ou iOS, baixe o aplicativo "Gemini" na loja de aplicativos. Siga as instruções para configurá-lo como seu assistente padrão (opcional, mas recomendado para acesso rápido).
          Substitua o Google Assistente (Android): Em muitos dispositivos Android, você pode configurar o aplicativo Gemini para responder quando você invoca o Google Assistente (por voz ou gesto). Isso permite que você use as capacidades do Gemini para as tarefas que você normalmente faria com o Assistente. 
          Interação por Voz e Texto: Use o aplicativo para fazer perguntas, dar comandos, pedir informações sobre o clima em Niterói, trânsito local, notícias do Brasil ou do mundo, definir lembretes, alarmes, criar eventos no calendário, etc.
          Exploração Multimodal:<br /><br />
          <p className={withReveal(styles.paragraph)}>
          Envie Imagens: Tire fotos de lugares, objetos, documentos ou textos e peça ao Gemini para identificar, traduzir, resumir ou fornecer informações relacionadas. Por exemplo, você pode fotografar um cardápio em um restaurante em Niterói e pedir recomendações ou informações nutricionais (se disponíveis online).
          Use a Câmera para Obter Informações em Tempo Real: Aponte a câmera para um ponto turístico em Niterói e pergunte sobre sua história ou informações relevantes.
          Peça para Gerar Imagens: <br />Descreva uma cena ou ideia e peça ao Gemini para gerar uma imagem correspondente.
          Auxílio na Escrita e Criatividade: Peça ao Gemini para ajudar a escrever e-mails, legendas para redes sociais, poemas, roteiros de viagem para algum lugar no Rio de Janeiro ou em outro estado, etc.
          Resolução de Dúvidas e Aprendizado: Use o Gemini para obter explicações sobre tópicos complexos, aprender novas informações, traduzir idiomas (útil se você interage com turistas no Rio), converter unidades, fazer cálculos, etc.<br /><br />
          <p className={withReveal(styles.paragraph)}>
          Planejamento e Organização:<br /> Peça ajuda para planejar seu dia, criar listas de tarefas, organizar sua agenda, encontrar rotas no Google Maps para evitar o trânsito em horários de pico em Niterói ou para chegar a um evento no Rio.<br /><br /> </p>
         </p>
         </p>

          <p className={withReveal(styles.paragraph)}>
          2. Integrando com Outros Produtos Google:<br /><br /> 

          Gmail e Docs: Se você tem acesso ao Gemini Advanced (através do Google One AI Premium), você pode usar o Gemini diretamente no Gmail e no Google Docs para ajudar a escrever e-mails, resumir longos documentos, gerar ideias e muito mais.
          Google Search: O Gemini está integrado ao Google Search, fornecendo "AI Overviews" (resumos gerados por IA) para algumas pesquisas, o que pode te dar respostas rápidas e concisas para suas perguntas sobre Niterói, o Brasil ou qualquer outro tópico.
          Google Maps: Embora a integração direta do Gemini possa evoluir, você já pode usar comandos de voz através do assistente (agora Gemini) para navegar, encontrar lugares em Niterói (restaurantes, praias, serviços), verificar o trânsito e obter informações sobre transporte público.
          YouTube: Peça ao Gemini para encontrar vídeos sobre um determinado assunto, resumir o conteúdo de um vídeo (se essa funcionalidade for implementada) ou até mesmo gerar ideias de vídeos se você for um criador de conteúdo.
          Google Calendar: Use o Gemini para agendar eventos, definir lembretes e verificar sua agenda por voz ou texto.<br /><br />
         </p>
         <p className={withReveal(styles.paragraph)}>
          3. Explorando o Gemini Advanced (se disponível para você):<br /><br />

          Raciocínio Mais Complexo: Se você assinar o Google One AI Premium, terá acesso ao Gemini Ultra, capaz de lidar com tarefas mais complexas, como análise de grandes conjuntos de dados, resolução de problemas matemáticos e científicos mais avançados e compreensão mais profunda de diferentes tipos de conteúdo.
          Integração Aprimorada: A integração do Gemini Ultra com os aplicativos Google (Gmail, Docs, Sheets, Slides) é mais profunda, oferecendo assistência contextual mais inteligente.
          Exemplos Práticos para o seu Dia a Dia em Niterói: <br /><br />
          </p>
          <p className={withReveal(styles.paragraph)}>
          Manhã: "Gemini, qual a previsão do tempo para hoje em Niterói?" "Gemini, me lembre de comprar pão na padaria perto de casa às 12h." "Gemini, quais são as principais notícias do Rio de Janeiro hoje?"
          Durante o Dia: "Gemini, traduza - Bom dia - para japonês." "Gemini, encontre uma receita de moqueca capixaba." "Gemini, como chegar de carro do centro de Niterói à Praia de Itacoatiara evitando o trânsito?" (Abrindo o Google Maps). "Gemini, me ajude a escrever um e-mail para meu cliente." (Se estiver usando o Gemini Advanced no Gmail). <br /><br />
         </p>
         <p className={withReveal(styles.paragraph)}>
          À Tarde/Noite: "Gemini, me recommende um bom restaurante de frutos do mar em Icaraí." "Gemini, toque uma playlist de músicas relaxantes no YouTube Music." "Gemini, resuma este artigo sobre a história de Niterói." (Se você colar um link ou texto). "Gemini, me conte uma história curta para dormir."
          Dicas para uma Integração Eficaz: <br /><br />
         </p>
         <p className={withReveal(styles.paragraph)}>
          Experimente Diferentes Tipos de Comandos: Não tenha medo de testar diferentes formas de fazer perguntas e dar comandos para ver como o Gemini responde.
          Seja Específico: Quanto mais específico você for em suas solicitações, melhores serão os resultados.
          Aproveite a Multimodalidade: Explore o envio de imagens e, no futuro, outros tipos de mídia para obter informações e realizar tarefas de maneiras inovadoras.
          Mantenha o Aplicativo Atualizado: Certifique-se de que seu aplicativo Gemini (e outros aplicativos Google) estejam sempre atualizados para ter acesso aos recursos mais recentes.
          Aprenda com o Tempo: Quanto mais você usar o Gemini, mais ele poderá se adaptar às suas necessidades e preferências.
          Ao incorporar o Gemini em suas rotinas diárias, você pode otimizar seu tempo, obter informações de forma mais rápida e interativa, e até mesmo explorar novas formas de criatividade e aprendizado, tudo isso com a conveniência de um assistente pessoal inteligente ao seu alcance em Niterói.
        </p>
</div>
</section>
    
  )
}

export default Integrate