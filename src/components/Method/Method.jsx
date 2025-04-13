import style from '../Method/Method.module.css'
import Icon from '../../assets/baixados.png'
import { useEffect } from 'react';
import Robot from '../../assets/robot_IA.png'
import Button from '../btnBlack/black';
export default function Method() {

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
        <section className={style.method}>
          <div className={withReveal(style.section)}>
            <div className={style.backgroundWrapper}>
              <img src={Robot} alt="" className={withReveal (style.backgroundImg)} />
            </div>
            <div className={withReveal(style.boxText)}>
              <h4 className={withReveal("")}>
                <img src={Icon} alt="" /> Método de Aprendizado
              </h4>
              <p className={withReveal("")}>
                O método de aprendizado usado pelo Gemini envolve técnicas avançadas de inteligência artificial, incluindo aprendizado de máquina e redes neurais. O sistema é projetado para processar grandes volumes de dados, permitindo que ele aprenda padrões e faça previsões com base nas informações que recebe. Além disso, Gemini pode se adaptar e melhorar continuamente seu desempenho à medida que é exposto a novos dados, tornando-o uma ferramenta poderosa para diversas aplicações. Se precisar de mais detalhes ou informações específicas, estou aqui para ajudar!
              </p>
              <div className="">
                <Button>Saiba Mais</Button>
              </div>
            </div>
          </div>
        </section>
      );
    }
