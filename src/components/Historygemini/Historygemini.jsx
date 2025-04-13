import style from "../Historygemini/Historygemini.module.css";
import Img from "../../assets/701541.png";
import icon from "../../assets/baixados.png";
import Falcu from "../../assets/facudade.jpg";
import { useEffect } from 'react';
export default function Historygemini() {

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
    <section>
      <div className={withReveal (style.section)}>
        <div className={withReveal (style.imgBox)}>
          <img src={Img} alt="logo gemini" />
        </div>
        <div className={withReveal (style.boxText)}>
          <h3>
            <img src={icon} alt="" /> Breve Historia
          </h3>

          <h5>
            A Gemini é uma plataforma de inteligência artificial desenvolvida
            pela Google,
          </h5>
          

          <p>
            lançada em 2023. Seu objetivo é competir com outras grandes
            ferramentas de IA, como o ChatGPT da OpenAI, e redefinir a forma
            como interagimos com a tecnologia.
          </p>
        </div>
      </div>
    </section>
  );
}
