import styles from "../responsabilities/rspn.module.css";
import Trail from "../../assets/OkPvii8KHh8AnK4lJITCKYDf8Unr5_ja.jpg";
import Lines from "../../assets/1G0Qe-CimP0LgqFJplCxdpDCc9e1fXhF.jpg";
import { ArrowRight } from "lucide-react";
import { SquareArrowOutUpRight } from "lucide-react";
import { useEffect } from 'react';

const Responsabilities = () => {
  const withReveal = (className) => `${className} reveal`;
  const isMobile = window.matchMedia("(max-width: 600px)").matches;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        const target = entry.target;

        if (entry.isIntersecting) {
          target.style.transitionDelay = `${index * 100}ms`;
          target.classList.add('active');
          target.classList.remove('inactive');
        } else {
          target.style.transitionDelay = '0ms';
          target.classList.remove('active');
          target.classList.add('inactive');
        }
      });
    }, {
      threshold: isMobile ? 0.1 : 0.2,
      rootMargin: isMobile ? "0px 0px -15% 0px" : "0px 0px -10% 0px",
    });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => observer.observe(reveal));

    return () => {
      reveals.forEach(reveal => observer.unobserve(reveal));
    };
  }, [isMobile]);

  return (
    <section className={withReveal(styles.Rspn)} id="rspn">
      <div className={withReveal(styles.wrapperRspn)}>
        <div className={withReveal(styles.rspnContainer)}>
          <h2 className="reveal">Responsabilidade</h2>
          <p className="reveal">
            Queremos que a IA beneficie o mundo, por isso
            <br /> devemos ser cuidadosos sobre como ela é <br /> construída e
            usada.
          </p>
        </div>
        <div className={withReveal(styles.RspnCards)}>
          {/* Card 1 */}
          <a
            href="https://deepmind.google/about/responsibility-safety/"
            rel="noopener noreferrer"
            target="blank"
          >
            <div className={withReveal(styles.cardWrapper)}>
              <div className={withReveal(styles.imgCard)}>
                <img
                  src={Trail}
                  alt="Responsabilidade e Segurança"
                  className="reveal"
                />
              </div>
              <div className={withReveal(styles.cardContent)}>
                <h2 className="reveal">Responsabilidade e Segurança</h2>
                <p className="reveal">
                  A IA pode fornecer benefícios extraordinários, mas, como toda
                  tecnologia transformacional, pode ter impactos negativos.
                </p>
              </div>
              <div className={withReveal(styles.arrowIcon)}>
                <ArrowRight />
              </div>
            </div>
          </a>

          {/* Card 2 */}
          <a
            href="https://blog.google/technology/ai/ai-principles/"
            rel="noopener noreferrer"
            target="blank"
          >
            <div className={withReveal(styles.cardWrapper)}>
              <div className={withReveal(styles.imgCard)}>
                <img src={Lines} alt="Princípios de IA" className="reveal" />
              </div>
              <div className={withReveal(styles.cardContent)}>
                <h2 className="reveal">Princípios de IA</h2>
                <p className="reveal">
                  Embora estejamos otimistas sobre o potencial da IA,
                  reconhecemos que as tecnologias avançadas podem levantar
                  desafios importantes.
                </p>
              </div>
              <div className={withReveal(styles.SquareArrowIcon)}>
                <SquareArrowOutUpRight />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Responsabilities;
