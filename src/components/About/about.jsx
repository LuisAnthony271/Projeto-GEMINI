import React from 'react'
import styles from './about.module.css'

const about = () => {
  return (
    <section className={styles.about}>
        <div className={styles.aboutWrapper}>
            <h2>O que é o Gemini</h2>
            <p>O Gemini é um modelo de linguagem grande (LLM) multimodal desenvolvido pelo Google DeepMind. Ele foi anunciado em dezembro de 2023 e representa o modelo de IA mais capaz e geral do Google até o momento. O Gemini foi projetado para ser multimodal desde o início, o que significa que ele pode entender e gerar texto, código, áudio, imagens e vídeo.

            Aqui estão alguns pontos chave sobre o Gemini:

            Multimodalidade Nativa: Diferente de outros modelos que combinam diferentes modalidades posteriormente, o Gemini foi treinado para entender e raciocinar sobre diferentes tipos de informação simultaneamente. Isso permite uma compreensão mais rica e contextualizada.<br /> <br />
            Diferentes Tamanhos: O Gemini foi lançado em três tamanhos diferentes para atender a diversas necessidades e dispositivos:
            Gemini Ultra: O modelo mais poderoso, destinado a tarefas altamente complexas.<br /> <br />
            Gemini Pro: O melhor modelo para escalabilidade em uma ampla gama de tarefas.
            Gemini Nano: O modelo mais eficiente, projetado para tarefas no dispositivo (como em smartphones).<br /> <br />
            Capacidades Avançadas: O Gemini demonstra um desempenho de ponta em vários benchmarks, superando modelos anteriores em tarefas como compreensão de texto, raciocínio, resolução de problemas matemáticos e científicos, codificação e compreensão multimodal.
            Integração com Produtos Google: O Gemini está sendo integrado em diversos produtos e serviços do Google para melhorar a experiência do usuário, como:
            Pesquisa: Fornecendo resumos gerados por IA (AI Overviews).
            Gmail e Docs: Auxiliando na escrita.<br /> <br />
            Sheets e Slides: Ajudando na organização e design.
            Meet: Tomando notas e resumindo reuniões.<br /> <br />
            Android: Alimentando o aplicativo Gemini (que pode substituir o Google Assistente).<br /> <br />
            Gemini Advanced: Uma versão paga através do plano Google One AI Premium, que oferece acesso ao modelo Gemini Ultra, maior capacidade de processamento, integração mais profunda com aplicativos Google e acesso prioritário a novos recursos.<br /> <br />
            Gemini API e Google AI Studio: O Google também oferece a API do Gemini e o Google AI Studio para desenvolvedores criarem seus próprios aplicativos e agentes de IA usando os modelos Gemini.
            Evolução do Bard: O chatbot de IA conversacional do Google, anteriormente conhecido como Bard, agora é chamado Gemini e utiliza os modelos Gemini para suas interações.<br /> <br />
            Em resumo, o Gemini é uma família de modelos de IA altamente avançada e multimodal do Google, com o objetivo de fornecer capacidades de raciocínio e compreensão mais sofisticadas para uma ampla variedade de aplicações e integrar-se profundamente com os produtos e serviços que as pessoas usam diariamente.
            </p>

            <h2>Qual a historia do desenvolvimento do Gemini?</h2>
            <p>
            A história completa do desenvolvimento do Gemini é um processo complexo e em andamento, mas podemos traçar os principais marcos e influências:<br /><br />

            1. A Fundação com o Google DeepMind:

            O Gemini é um produto do Google DeepMind, uma união das equipes DeepMind e Google Brain ocorrida em abril de 2023. Ambas as equipes tinham um histórico significativo em pesquisa e desenvolvimento de inteligência artificial.
            DeepMind: Fundada em 2010, a DeepMind ganhou reconhecimento por suas conquistas em aprendizado por reforço, incluindo a vitória do AlphaGo contra um campeão mundial de Go em 2015. A empresa também realizou trabalhos notáveis em áreas como previsão da estrutura de proteínas com o AlphaFold. O foco da DeepMind sempre foi a criação de uma IA geral (AGI).
            Google Brain: Uma equipe dentro do Google focada em pesquisa de aprendizado profundo. O Google Brain contribuiu significativamente para o desenvolvimento de tecnologias de IA do Google, incluindo modelos de linguagem e sistemas de aprendizado de máquina para diversos produtos.<br /> <br />
            2. A Busca pela Multimodalidade:

            Um dos objetivos centrais no desenvolvimento do Gemini era criar um modelo que fosse multimodal nativamente. Isso significa que o modelo foi projetado desde o início para entender e raciocinar sobre diferentes tipos de dados (texto, código, áudio, imagem, vídeo) simultaneamente, em vez de combinar recursos de modelos separados. Essa abordagem permite uma compreensão mais profunda e contextualizada.<br /> <br />
            3. Anúncio e Lançamento (Dezembro de 2023):

            O Google anunciou o Gemini em 6 de dezembro de 2023, marcando um passo significativo em seus esforços de IA. Na época do lançamento, o Google o descreveu como seu modelo de IA mais capaz e geral.
            Três tamanhos diferentes foram introduzidos para atender a diferentes necessidades:
            Gemini Ultra: O modelo mais poderoso, destinado a tarefas complexas.
            Gemini Pro: Um modelo avançado com foco em escalabilidade.
            Gemini Nano: Um modelo eficiente para tarefas em dispositivos móveis.
            Juntamente com o anúncio, o Google demonstrou as capacidades multimodais do Gemini, mostrando como ele podia entender e gerar conteúdo em diferentes formatos.<br /> <br />
            4. Integração em Produtos Google:

            Após o lançamento, o Google começou a integrar o Gemini em seus diversos produtos e serviços, incluindo a Pesquisa (com AI Overviews), Gmail, Docs, Sheets, Slides, Meet e Android (substituindo o Google Assistente em alguns dispositivos). O objetivo era melhorar a experiência do usuário com recursos de IA mais avançados e contextuais.<br /> <br />
            5. Evolução do Bard para Gemini:

            O chatbot de IA conversacional do Google, anteriormente chamado Bard, foi renomeado para Gemini em fevereiro de 2024. Essa mudança refletiu a integração dos modelos Gemini como a base tecnológica do chatbot, buscando torná-lo mais capaz e versátil.<br /> <br />
            6. Gemini Advanced e Gemini API:

            O Google lançou o Gemini Advanced, uma assinatura paga através do Google One AI Premium, oferecendo acesso ao modelo Gemini Ultra e recursos aprimorados.
            A Gemini API e o Google AI Studio foram disponibilizados para desenvolvedores criarem seus próprios aplicativos e serviços utilizando os modelos Gemini.<br /> <br />
            7. Lançamentos e Atualizações Contínuas:

            Desde o lançamento inicial, o Google tem continuamente lançado novas versões e atualizações dos modelos Gemini, incluindo:
            Gemini 1.5: Introduzido em fevereiro de 2024, com uma janela de contexto significativamente maior.
            Gemini 2.0: Lançado em diferentes versões (Pro, Flash, Flash-Lite) com foco em melhorias de desempenho, velocidade e novas funcionalidades como "Thinking".
            Gemini 2.5: Anunciado em março de 2025, com foco em raciocínio aprimorado e liderança em benchmarks.<br /> <br />
            8. Gemini Deep Research:
            O Google também introduziu recursos como o Gemini Deep Research, uma ferramenta para auxiliar na pesquisa online complexa.
            Em resumo, a história do desenvolvimento do Gemini é marcada pela convergência de duas potentes equipes de IA do Google, um foco desde o início na multimodalidade, uma integração estratégica em seus produtos e uma rápida evolução com o lançamento contínuo de modelos mais avançados. O objetivo declarado é criar uma IA cada vez mais geral e capaz de resolver problemas complexos e auxiliar as pessoas em diversas tarefas.

            Para uma visão mais detalhada, você pode consultar o artigo de pesquisa oficial do Gemini: "[2312.11805] Gemini: A Family of Highly Capable Multimodal Models" disponível no arXiv.
            </p>
        </div>
    </section>
  )
}

export default about