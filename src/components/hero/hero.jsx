import styles from './hero.module.css';
import Blue from '../btnBlue/blue';
import Black from '../btnBlack/black';
import Background from '../../assets/background1-1.png';
import Gemini from '../../assets/gemini-text.png'
import { useEffect } from 'react';


const Hero = () => {

  const isMobile = window.matchMedia("(max-width: 600px)").matches;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          entry.target.classList.remove('inactive');
        } else {
          entry.target.classList.remove('active');
          entry.target.classList.add('inactive');
        }
      });
    }, {
      threshold: isMobile ? 0.05 : 0.1, // Mais sensível no mobile e quando da tela precisa estar visivel
    rootMargin: isMobile ? "0px 0px -10% 0px" : "0px", // Antecipar entrada no mobile // Quanto da tela precisa estar visível
    });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => observer.observe(reveal));

    return () => {
      reveals.forEach(reveal => observer.unobserve(reveal));
    };
  }, );

  return (
    <section className={`${styles.hero} reveal`} id="hero">
  <img src={Background} alt="background-img" className={styles.heroImg} />
  <div className={`${styles.heroWrapper} reveal`}>
    <div className={`${styles.heroContent} reveal`}>
      <img src={Gemini} alt="Gemini-text-logo" className={`${styles.logoHero} reveal`} />
      <p className={`${styles.pHero} reveal`}>
        Nossos modelos de IA mais inteligentes, desenvolvidos para a era dos agentes
      </p>
      <div className={`${styles.btnHero} reveal`}>
        <Blue href="https://gemini.google.com/app?hl=pt-BR" target="_blank" rel="noopener noreferrer"> Bater papo com o Gemini ❯ </Blue>
        <Black href="https://aistudio.google.com/prompts/new_chat" target="_blank" rel="noopener noreferrer"> experimente o Google IA Studio ❯ </Black>
      </div>
      <div className={`${styles.btnHeroMobile} reveal`}>
        <Blue> Gemini ❯ </Blue>
        <Black> Google IA Studio ❯ </Black>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero;
