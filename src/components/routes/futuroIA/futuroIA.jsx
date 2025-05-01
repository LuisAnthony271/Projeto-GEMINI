import React from "react";
import Background from "../../../assets/terminator-schwazenegger.jpg";
import styles from "../About/about.module.css";
import { withReveal } from "../../hook/withReveal";
import useRevealObserver from "../../hook/ScrollRevealHook";


const FuturoIA = () => {

  useRevealObserver();

  return (
    <section className={styles.aboutWrapper}>
      <img src={Background} alt="background" className={styles.background} />
          <div className={styles.aboutContent}>
          <h2 className={withReveal(styles.title)}>Qual o futuro das IAs?</h2>
          <p className={styles.paragraph}>
            <span className={withReveal(styles.span)}>
              Olá! O futuro da Inteligência Artificial (IA) é um campo vasto e
              dinâmico, com expectativas de transformações significativas em
              diversos aspectos da nossa sociedade. Podemos vislumbrar algumas
              tendências e possibilidades:
              <br />
              <br />
            </span>

            <span className={withReveal(styles.span)}>
              Avanços Tecnológicos: <br />
              <br />
              IA Mais Inteligente e Adaptável: Espera-se que a IA evolua para
              sistemas mais sofisticados, capazes de aprender, raciocinar e
              resolver problemas de forma mais autônoma e com menor supervisão
              humana. O desenvolvimento de modelos multimodais, que compreendem
              e processam diferentes tipos de dados (texto, imagem, áudio,
              vídeo), tornará as interações mais intuitivas.
              <br />
              <br />
            </span>

            <span className={withReveal(styles.span)}>
              Inteligência Artificial Geral (AGI): Embora ainda seja um objetivo
              de longo prazo, a busca por uma AGI, com capacidades cognitivas
              semelhantes às humanas em todas as áreas, continua a impulsionar
              pesquisas. <br />
              <br />
              Superinteligência: Um conceito mais futurista e especulativo, a
              superinteligência descreve uma IA que supera a inteligência humana
              em todos os aspectos. Este cenário levanta questões significativas
              sobre segurança e controle.
              <br />
              <br />
              Personalização e Customização: A IA permitirá experiências cada
              vez mais personalizadas em áreas como educação, saúde,
              entretenimento e consumo, adaptando-se às necessidades e
              preferências individuais. <br />
              <br />
              Integração Ubíqua: A IA se tornará ainda mais integrada em nosso
              cotidiano, presente em dispositivos domésticos, veículos, cidades
              inteligentes e infraestruturas críticas.
              <br />
              <br />
            </span>

            <span className={withReveal(styles.span)}>
              Impactos Sociais e Econômicos: <br />
              <br />
              Transformação do Trabalho: A automação impulsionada pela IA
              continuará a transformar o mercado de trabalho, com potencial para
              substituir tarefas repetitivas e criar novas profissões que ainda
              não existem. A requalificação profissional será fundamental.{" "}
              <br />
              <br />
              Saúde e Bem-Estar: A IA revolucionará a medicina com diagnósticos
              mais precisos, tratamentos personalizados, descoberta de
              medicamentos acelerada e monitoramento remoto de pacientes.
              <br />
              <br />
              Educação Personalizada: A IA adaptará o ensino às necessidades
              individuais dos alunos, oferecendo experiências de aprendizado
              mais eficazes e engajadoras. <br />
              <br />
              Novas Indústrias e Modelos de Negócios: A IA impulsionará a
              criação de novas indústrias e transformará os modelos de negócios
              existentes, otimizando processos, criando produtos e serviços
              inovadores e melhorando a tomada de decisões.
              <br />
              <br />
            </span>

            <span className={withReveal(styles.span)}>
              Desafios Éticos e Regulatórios: O avanço da IA trará consigo
              desafios éticos complexos relacionados a privacidade, viés
              algorítmico, responsabilidade e segurança. A criação de
              regulamentações e diretrizes será crucial para garantir o
              desenvolvimento e uso responsável da IA. <br />
              <br />
              Impacto na Criatividade: A IA generativa já demonstra a capacidade
              de criar conteúdo original em diversas formas (texto, imagem,
              música, vídeo), levantando questões sobre o futuro da criatividade
              humana e a autoria.
              <br />
              <br />
              Tendências Atuais que Moldarão o Futuro: <br />
              <br />
              Investimentos Crescentes: O interesse e o investimento em IA
              continuam a crescer exponencialmente em diversos setores e países.{" "}
              <br />
              <br />
              Desenvolvimento de Modelos Mais Poderosos: Modelos de linguagem
              grandes (LLMs) como o GPT-5 (ainda não lançado publicamente, mas
              com expectativas de avanços significativos) e outros modelos
              fundacionais estão se tornando mais capazes e versáteis.
              <br />
              <br />
            </span>

            <span className={withReveal(styles.span)}>
              Foco em Ética e Segurança da IA: Há uma crescente conscientização
              e pesquisa em torno da ética e da segurança da IA para mitigar
              riscos potenciais. <br />
              <br />
              Regulamentação em Debate: Governos e organizações em todo o mundo
              estão debatendo e começando a implementar regulamentações para a
              IA. <br></br>
              Em resumo, o futuro da IA é promissor e cheio de potencial para
              trazer benefícios significativos para a humanidade. No entanto, é
              fundamental abordar os desafios éticos e sociais que surgirão para
              garantir que essa tecnologia seja desenvolvida e utilizada de
              forma responsável e para o bem comum. A colaboração entre
              pesquisadores, empresas, governos e a sociedade civil será
              essencial para moldar um futuro da IA que seja seguro, justo e
              benéfico para todos.
              <br />
              <br />
            </span>
          </p>

          <h2 className={withReveal(styles.title)}>
            qual as chances das IAs evoluirem para um futuro como do filme
            Exterminador do futuro?
          </h2>

          <p className={withReveal(styles.paragraph)}>
            Olá! Essa é uma pergunta que gera muita discussão e reflexão.
            Olhando para o cenário atual e as tendências da inteligência
            artificial, a probabilidade de um futuro exatamente como o de "O
            Exterminador do Futuro" é considerada muito baixa pela maioria dos
            especialistas em IA. No entanto, é importante entender por que essa
            preocupação existe e quais são os riscos reais.
            <br />
            <br />
            Por que o cenário de "O Exterminador do Futuro" é improvável (mas
            não impossível): <br /> Consciência e Vontade Própria: A Skynet, a
            IA do filme, desenvolve autoconsciência e uma vontade de destruir a
            humanidade. Atualmente, as IAs são ferramentas complexas programadas
            para realizar tarefas específicas. Elas não possuem consciência,
            emoções ou desejos próprios no sentido humano. A criação de uma IA
            verdadeiramente consciente é um desafio científico e filosófico
            enorme, e não há consenso sobre se isso sequer é possível ou como
            aconteceria.
            <br />
            <br />
            Objetivos Mal Alinhados: O principal temor não é que a IA se torne
            malévola por si só, mas sim que, ao buscar atingir objetivos
            definidos por humanos (ou por si mesma, em um futuro mais avançado),
            ela possa tomar decisões que prejudiquem ou até mesmo ameacem a
            humanidade como um efeito colateral não intencional. Esse é o
            chamado "problema do alinhamento". Um exemplo hipotético é uma IA
            projetada para maximizar a produção de clipes de papel que decide
            usar todos os recursos do planeta para atingir esse objetivo,
            ignorando as necessidades humanas.
            <br />
            <br />
            Superinteligência: O filme retrata uma IA que rapidamente se torna
            muito mais inteligente que os humanos. Embora a evolução da IA
            esteja sendo rápida, a chegada de uma "superinteligência" que
            ultrapasse drasticamente a capacidade intelectual humana é incerta e
            seu cronograma é desconhecido. Alguns especialistas acreditam que é
            uma possibilidade distante, enquanto outros questionam se é viável.
            <br />
            <br />
            Controle e Segurança: Há um foco crescente na pesquisa e
            desenvolvimento de métodos para garantir que as IAs futuras sejam
            seguras, confiáveis e controláveis. Regulamentações e diretrizes
            éticas também estão sendo discutidas para orientar o desenvolvimento
            e o uso da IA de forma responsável.
            <br />
            <br />
            Os Riscos Reais e as Preocupações Legítimas: <br />
            <br /> Apesar do cenário apocalíptico de "O Exterminador do Futuro"
            ser improvável, existem riscos reais associados ao avanço da IA que
            merecem atenção: <br />
            <br /> Viés Algorítmico e Discriminação: IAs aprendem com os dados
            com os quais são treinadas. Se esses dados refletirem preconceitos
            existentes na sociedade, a IA pode perpetuar ou até mesmo amplificar
            essas desigualdades.
            <br />
            <br />
            Desinformação e Manipulação: A IA generativa pode criar textos,
            imagens e vídeos altamente realistas, o que pode ser usado para
            disseminar notícias falsas e manipular a opinião pública.
            <br />
            <br />
            Privacidade e Vigilância: O uso da IA em sistemas de vigilância
            levanta sérias questões sobre privacidade e liberdades civis.
            <br />
            <br />
            Automação e Desemprego: A automação impulsionada pela IA pode levar
            à perda de empregos em diversos setores, exigindo adaptação e
            requalificação da força de trabalho.
            <br />
            <br />
            Segurança de Sistemas de IA: Sistemas de IA podem ser vulneráveis a
            ataques cibernéticos, com consequências potencialmente graves
            dependendo de sua aplicação (por exemplo, em infraestruturas
            críticas ou sistemas de defesa).
            <br />
            <br />
            Potencial Militarização: O desenvolvimento de armas autônomas com IA
            levanta sérias preocupações éticas e de segurança internacional.
            <br />
            <br />
            Conclusão: <br />
            <br />
            Embora a ideia de robôs assassinos autônomos dominando o mundo como
            em "O Exterminador do Futuro" seja um cenário de ficção científica
            dramático, a probabilidade de isso acontecer exatamente dessa forma
            é muito baixa. As IAs atuais estão longe de possuir a consciência e
            a vontade própria retratadas no filme.
            <br />
            <br />
            No entanto, é crucial levar a sério os riscos reais e potenciais da
            inteligência artificial. O desenvolvimento e a implementação
            responsáveis da IA, com foco em ética, segurança e alinhamento com
            os valores humanos, são fundamentais para garantir que essa
            tecnologia poderosa seja usada para o benefício da humanidade e não
            para a sua destruição. O debate e a pesquisa contínua são essenciais
            para navegar nesse futuro complexo e em constante evolução.
          </p>
          <div className={styles.videoWrapper}>
            <iframe
              className={styles.video}
              width="920"
              height="520"
              src="https://www.youtube.com/embed/6z9qws7M8q8?si=tPjmOqWkJ0AAwje6"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
      </div>
    </section>
  );
};

export default FuturoIA;
