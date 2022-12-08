import React from "react";
import SkillsCard from "./SkillsCard";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles["skills"]} id="skills">
      {/* <h1>My current skills</h1> */}
      <div className={styles["skills_container"]}>
        <div className={styles["skills_wrapper"]}>
          <div className={styles.skill}>Javascript</div>
          <div className={styles.skill}>React.js</div>
          <div className={styles.skill}>Redux</div>
          <div className={styles.skill}>HTML</div>
          <div className={styles.skill}>CSS</div>
          <div className={styles.skill}>TypeScript</div>
          <div className={styles.skill}>Bootstrap</div>
          <div className={styles.skill}>Chkra-UI</div>
          <div className={styles.skill}>Mongo DB</div>
          <div className={styles.skill}>Matrial-UI</div>
          <div className={styles.skill}>Express JS</div>
          <div className={styles.skill}>StoryBook</div>
          <div className={styles.skill}>Node JS</div>
          <div className={styles.skill}>Django</div>
          <div className={styles.skill}>Next JS</div>
          <div className={styles.skill}>JSON</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
