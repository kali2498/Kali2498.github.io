import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import styles from "./Footer.module.css";

function Footer() {
  const year = () => {
    const d = new Date();
    let y = d.getFullYear();
    return y;
  };

  return (
    <div className={styles.footer}>
      <div>
        <a
          className={styles.socialIcon}
          href="https://github.com/kali2498"
          target="_blank"
        >
          <FiGithub />
        </a>
        <a
          className={styles.socialIcon}
          href="https://www.linkedin.com/in/akash-more-680180258/"
          target="_blank"
        >
          <FiLinkedin />
        </a>
        <a
          className={styles.socialIcon}
          href="https://www.instagram.com/akash_more_2410/"
          target="_blank"
        >
          <FiInstagram />
        </a>
      </div>

      <p class="copyright">
        © <span class="year">{year()}</span> -{" "}
        <span class="bold">Akash More</span>
      </p>
    </div>
  );
}

export default Footer;
