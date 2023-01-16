import React from "react";
import SkillsCard from "./SkillsCard";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles["skills"]} id="skills">


      <div className={styles["skills_container"]}>
        <div className={styles["skills_container"]}>
          <div className={styles["skills_wrapper"]}>
            <div className={styles.skill} > <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="js"/> </div>
            <div className={styles.skill}><img src="https://img.icons8.com/color/48/000000/css3.png"  alt="js"/></div>
            <div className={styles.skill}><img src="https://img.icons8.com/color/48/000000/react-native.png"  alt="js"/></div>
            <div className={styles.skill}><img src="https://img.icons8.com/ios-filled/512/typescript.png"  width="48" height="48"  alt="js"/></div>
            <div className={styles.skill}><img src="https://img.icons8.com/color/48/000000/redux.png"  alt="js"/></div>
            <div className={styles.skill}><img src="https://img.icons8.com/fluency/48/000000/node-js.png"  alt="js"/></div>
            <div className={styles.skill}> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"    alt="express" width="40" height="40"/></div>
            <div className={styles.skill}><img src="https://img.icons8.com/color/512/mongodb.png" width="48" height="48"  alt="js"/></div>
            <div className={styles.skill}><img src="https://img.icons8.com/color/48/000000/bootstrap.png" width="48" height="48"  alt="js"/></div>
            <div className={styles.skill}> <img src="https://img.icons8.com/color/512/chakra-ui.png" width="48" height="48"  alt="js"/></div>
            <div className={styles.skill}><img src="https://img.icons8.com/color/512/material-ui.png" width="48" height="48"  alt="js"/></div>
            <div className={styles.skill}><img src="https://img.icons8.com/color/512/heroku.png" width="48" height="48"  alt="js"/></div>
            <div className={styles.skill}><img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="45" height="45"/></div>
            <div className={styles.skill}> <img src="https://img.icons8.com/color/48/000000/git.png"  alt="js"/></div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
// https://img.icons8.com/color/48/000000/bootstrap.png