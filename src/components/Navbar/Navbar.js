import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { HiOutlineMoon } from "react-icons/hi";
import { CgSun } from "react-icons/cg";
import { useState, useContext } from "react";
import { ThemeContext } from "../../App";
import fw19_0797_Akash_More_Resume from "./fw19_0797_Akash_More_Resume.pdf";

function Navbar() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const { changeTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    changeTheme();
  };

  const toggleMobileMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <nav className={styles.nav_container}>
      <div className={styles.desktopMenu}>
        <div className={styles.nav_left}>
          <a href="#home">Akash.</a>
        </div>
        <div className={styles.nav}>
          <a href="#about" className={styles.nav_link}>
            About
          </a>
          <a href="#Skills" className={styles.nav_link}>
            Skills
          </a>
          <a href="#resume" className={styles.nav_link}>
            Education
          </a>

          <a href="#projects" className={styles.nav_link}>
            Projects
          </a>
          <a href="#contact" className={styles.nav_link}>
            Contact
          </a>
        </div>
        <div className={styles.nav_right}>
          <div className={styles.theme_icon} onClick={toggleTheme}>
            {darkTheme ? <CgSun /> : <HiOutlineMoon />}
          </div>

          <a href={fw19_0797_Akash_More_Resume} target="_blank" download>
            <button
              onClick={() => window.open(`https://drive.google.com/file/d/1nP4lNdvcTE1nprRiHRsqQ7MXWq8IZn2t/view?usp=sharing`)}
              className={styles.nav_resume_btn}
            >
              Resume
            </button>
          </a>
        </div>
      </div>

      <div className={styles.mobileMenu}>
        {/* Hamburger menu */}
        <div className={styles.nav_left}>
          <a href="#home">Akash.</a>
        </div>
        <div
          className={`${styles.navMobile} ${
            isMenuClicked ? styles.active : ""
          }`}
        >
          <a href="#about" onClick={toggleMobileMenu} className={styles.nav_link}>
            About
          </a>
          <a href="#Skills" onClick={toggleMobileMenu} className={styles.nav_link}>
            Skills
          </a>
          <a href="#resume" onClick={toggleMobileMenu} className={styles.nav_link}>
            Education
          </a>

          <a href="#projects" onClick={toggleMobileMenu} className={styles.nav_link}>
            Projects
          </a>
          <a href="#contact" onClick={toggleMobileMenu} className={styles.nav_link}>
            Contact
          </a>
          <a href={fw19_0797_Akash_More_Resume} target="_blank" download>
            <button
              onClick={() => window.open(`https://drive.google.com/file/d/1nP4lNdvcTE1nprRiHRsqQ7MXWq8IZn2t/view?usp=sharing`)}
              className={styles.nav_resume_btn}
            >
              Resume
            </button>
          </a>
        </div>
        <div className={styles.nav_right}>
          <div className={styles.theme_icon} onClick={toggleTheme}>
            {darkTheme ? <CgSun /> : <HiOutlineMoon />}
          </div>
          <div className={styles.hamburgerMenu} onClick={toggleMobileMenu}>
            {isMenuClicked ? <IoClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
