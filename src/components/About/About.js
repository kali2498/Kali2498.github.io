import React from "react";
import styles from "./About.module.css";
import Skills from "./Skills";

const About = () => {
  return (
    <section className={styles.about_section} id="about">
      <div className={styles.heading}>
        <h2 className={styles["title"]}>About Me</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <h3>Get to Know me!</h3>
          <p className={styles.desc}>
          A passionate learner who loves to explore new technologies
          and leverage them to solve real-life problems. Currently into
          web development with hands-on experience in building
          websites with MERN stack and various web technologies
          including HTML, CSS, and JS, and looking forward to working in
          a fast-paced environment and playing a key role in the
          company's growth.✨✨            
          </p>
          <p className={styles.desc}>
            I build websites with a focus on React, Redux, JavaScript. I enjoy
            turning complex problems into simple and beautiful designs.
          </p>
        </div>
        <div className={styles.right}>
          <h3>My Skills</h3>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
