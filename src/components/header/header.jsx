import { useState } from "react";
import styles from "../header/header.module.css";
import LogoHeader from "../../assets/logoheader.png";
import iconCloser from "../../assets/menu-closer.svg";
import iconBars from "../../assets/menu-togle.svg";
// import Background from '../../assets/background1-1.png'
import { Search } from "lucide-react";
import { Sparkle } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  }

  return (
    <header className={`${styles.Header} ${menuActive ? styles.active : ""}`}>
      <div className={styles.wrapperHeader}>
        <div className={styles.logoHeader}>
          <Link to="/">
            <img src={LogoHeader} alt="" />
          </Link>         
        </div>
        <button onClick={toggleMenu} id={styles.buttonMobile}>
          <img
            src={menuActive ? iconCloser : iconBars}
            id={styles.menuIcons}
            alt=""
          />
        </button>
        <nav className={menuActive ? styles.active: ""}>  
          <ul className={styles.ulMenu}>
            <li>
              <a href={"#method"}>Método de aprendizado</a>
            </li>
            <li>
              <a href={"#introducing"}>Introdução</a>
            </li>
            <li>
              <a href={"#tech"}>Tecnologias</a>
            </li>
            <li>
              <a href={"#news"}>Últimas noticias</a>
            </li>
            <li>
              <a href={"#rspn"}>Responsabilidade</a>
            </li>
            <div className={styles.iconsHeader}>
              <a href="">
                <Search />
              </a>
              <a href="">
                <Sparkle />
            </a>
          </div>
          </ul>
        </nav>
          <div className={styles.iconsHeaderActive}>
          <a href="">
              <Search />
            </a>
            <a href="https://gemini.google.com/app?hl=pt-BR" target="_blank" rel="noopenreferrer">
              <Sparkle />
            </a>
          </div>
      </div>
    </header>
  );
};

export default Header;
