import React from "react";
import SkillsCard from "./SkillsCard";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles["skills"]} id="skills">


      <div className={styles["skills_container"]}>
        <div className={styles["skills_container"]}>
          <div className={styles["skills_wrapper"]}>
            <div className={styles.skill} > <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="js"/><p>javascript</p></div>
            <div className={styles.skill}><img src="https://img.icons8.com/color/48/000000/css3.png"  alt="js"/><p>css</p></div>
            <div className={styles.skill}><img src="https://img.icons8.com/color/48/000000/react-native.png"  alt="js"/><p>Reactjs</p></div>
            <div className={styles.skill}><img src="https://img.icons8.com/ios-filled/512/typescript.png"  width="48" height="48"  alt="js"/><p>Typescript</p></div>
            <div className={styles.skill}><img src="https://img.icons8.com/color/48/000000/redux.png"  alt="js"/><p>Redux</p></div>
            <div className={styles.skill}><img src="https://img.icons8.com/fluency/48/000000/node-js.png"  alt="js"/><p>JS</p></div>
            <div className={styles.skill}><img src="https://img.icons8.com/color/512/mongodb.png" width="48" height="48"  alt="js"/><p>Mongo</p></div>
            <div className={styles.skill}><img src="https://img.icons8.com/color/48/000000/bootstrap.png" width="48" height="48"  alt="js"/><p>Bootstrap</p></div>
            <div className={styles.skill}> <img src="https://img.icons8.com/color/512/chakra-ui.png" width="48" height="48"  alt="js"/><p>Chakra-UI</p></div>
            <div className={styles.skill}><img src="https://img.icons8.com/color/512/material-ui.png" width="48" height="48"  alt="js"/><p>Material-UI</p></div>
            <div className={styles.skill}><img src="https://img.icons8.com/color/512/heroku.png" width="48" height="48"  alt="js"/><p>swagger</p></div>
            <div className={styles.skill}><img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="45" height="45"/><p>PostMan</p></div>
            <div className={styles.skill}> <img src="https://img.icons8.com/color/48/000000/git.png"  alt="js"/><p>Git</p></div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
// https://img.icons8.com/color/48/000000/bootstrap.png