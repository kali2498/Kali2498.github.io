import React from "react";
import styles from "./Education.module.css";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <div className={styles.container}>
      <div className={styles.timeline_wrapper}>
        <div className={styles.timeline_icon}>
          <FaGraduationCap />
        </div>
        <div className={styles.timeline}>
          <div className={styles.timeline_item}>
            <h4 className={styles.timeline_title}>Masai School</h4>
            <p className={styles.timeline_date}>Mar-2022 - Jan-2023</p>
            <p className={styles.timeline_desc}>Full-stack web devlopement</p>
          </div>

          <div className={styles.timeline_item}>
            <h4 className={styles.timeline_title}>
              Central Institute of Petrochemicals Engineering & Technology
            </h4>
            <p className={styles.timeline_date}>2017-2020</p>
            <p className={styles.timeline_desc}>Diploma In Plactic Technology</p>
          </div>

          <div className={styles.timeline_item}>
            <h4 className={styles.timeline_title}>
              Yashwantrao Chavan Maharashtra Open University
            </h4>
            <p className={styles.timeline_date}>2018-2021</p>
            <p className={styles.timeline_desc}>Bachlor of Arts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
