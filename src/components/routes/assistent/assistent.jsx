import React from 'react'
import styles from '../About/about.module.css'
import Background from '../../../assets/gemini-bg-4.png'
import { useEffect } from 'react'

const Assistent = () => {
  
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
          Gemini: Assistente Pessoal
        </h2>
        <p className={withReveal(styles.paragraph)}>

          O "Assistente Pessoal Gemini" refere-se à integração dos modelos Gemini diretamente na experiência do assistente virtual do Google, anteriormente conhecido como Google Assistente. Essa evolução representa uma atualização significativa, trazendo as capacidades avançadas do Gemini para interações mais naturais, contextuais e multimodais.

          Aqui está tudo o que você precisa saber sobre o Assistente Pessoal Gemini:

          O que é:

          O Assistente Pessoal Gemini é a próxima geração do Google Assistente, impulsionada pelos modelos de linguagem grande (LLMs) Gemini (inicialmente o Gemini Pro e, em versões mais avançadas, o Gemini Ultra).
          Ele visa ser mais do que um simples assistente de voz, evoluindo para um companheiro de IA mais inteligente, capaz de entender e responder de forma mais complexa, além de lidar com diferentes tipos de informação (texto, voz, imagem e, futuramente, vídeo).
          Principais Características e Capacidades: <br /> <br /></p>

          <p className={withReveal(styles.paragraph)}>
          Compreensão e Geração Multimodal: A capacidade fundamental do Gemini é entender e gerar respostas que podem envolver texto, voz e imagens (e, no futuro, outras modalidades como vídeo). Isso permite interações mais ricas e contextuais. Por exemplo, você pode mostrar uma foto para o assistente e pedir informações sobre ela.
          Raciocínio Aprimorado: Graças à arquitetura e ao treinamento do Gemini, o assistente demonstra um raciocínio mais sofisticado em comparação com as versões anteriores. Ele pode lidar com perguntas mais complexas, inferir informações e fornecer respostas mais relevantes.<br /><br />
          </p>
          <p className={withReveal(styles.paragraph)}>
          Contexto Mais Rico: O Gemini é projetado para manter o contexto das conversas por mais tempo e de forma mais eficaz, permitindo um fluxo de diálogo mais natural e menos repetitivo.<br /><br />
          </p>
          <p className={withReveal(styles.paragraph)}>
          Personalização e Proatividade: Espera-se que o Assistente Gemini se torne ainda mais personalizado ao longo do tempo, aprendendo suas preferências e necessidades para oferecer assistência proativa e relevante.
          Integração Profunda com o Ecossistema Google: O assistente está profundamente integrado com outros serviços e aplicativos do Google, como Gmail, Calendar, Maps, YouTube e muito mais, permitindo que você realize tarefas e obtenha informações de forma integrada.<br /><br />
          </p>
          <p className={withReveal(styles.paragraph)}>
          Auxílio em Tarefas Criativas e Produtivas: O Gemini pode ajudar em tarefas como brainstorming, resumo de textos, geração de ideias, redação de e-mails e até mesmo auxiliar na programação (dependendo da versão do modelo subjacente).
          Disponibilidade em Diversos Dispositivos: Assim como o Google Assistente, o Assistente Gemini está disponível em uma variedade de dispositivos, incluindo smartphones Android, smart speakers (Google Nest), smart displays, carros com Android Automotive e potencialmente outros dispositivos no futuro.
          Substituição do Google Assistente (Gradual): O Google está gradualmente substituindo o Google Assistente pelo Assistente Gemini em alguns dispositivos. A experiência e a interface podem variar dependendo do dispositivo e da região.
          Gemini App (Android): Em alguns dispositivos Android, o Google lançou um aplicativo Gemini dedicado que oferece uma interface de conversação direta com o modelo Gemini. Este aplicativo pode integrar algumas funcionalidades do assistente tradicional ou até mesmo substituí-lo como o assistente padrão do dispositivo.
          Como Usar:<br /><br />
          </p>
          <p className={withReveal(styles.paragraph)}>

          A forma de interagir com o Assistente Gemini é semelhante ao Google Assistente:
          Comandos de Voz: Diga "Ok Google" ou deslize para ativar o assistente (dependendo das configurações do seu dispositivo).
          Digitação: Em dispositivos com tela, você pode digitar suas perguntas e comandos.
          Interação Multimodal: Em dispositivos com suporte, você pode usar a câmera para mostrar imagens e fazer perguntas sobre elas.
          Os comandos que você já usava com o Google Assistente geralmente funcionarão com o Assistente Gemini, mas você também poderá explorar novas formas de interação aproveitando suas capacidades multimodais e de raciocínio aprimoradas.
          Disponibilidade:<br /><br />
          </p>
          <p className={withReveal(styles.paragraph)}>

          A disponibilidade do Assistente Pessoal Gemini varia por dispositivo, idioma e região.
          Inicialmente, o Gemini Pro foi integrado em alguns recursos do Google Assistente e no aplicativo Gemini em alguns países e idiomas.
          O Gemini Ultra, a versão mais poderosa, está disponível através do plano pago Google One AI Premium, que oferece acesso ao Gemini Advanced e a uma integração mais profunda do Gemini em aplicativos Google.
          O Google continua a expandir a disponibilidade e as funcionalidades do Assistente Gemini ao longo do tempo.
          Em Resumo:<br /><br />
          </p>
          <p className={withReveal(styles.paragraph)}>
    
          O Assistente Pessoal Gemini representa uma evolução significativa na forma como interagimos com assistentes virtuais. Ao integrar os poderosos modelos Gemini, o Google busca criar um assistente mais inteligente, intuitivo e capaz de compreender e interagir com o mundo de forma mais semelhante a um humano. Sua capacidade multimodal e raciocínio aprimorado abrem novas possibilidades para a assistência pessoal em diversas áreas da nossa vida digital e física. Fique atento aos anúncios do Google para saber mais sobre a disponibilidade e os novos recursos do Assistente Gemini na sua região e dispositivos.
          </p>
      </div>
  </section>
  )
}

export default Assistent