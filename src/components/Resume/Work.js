import React from "react";
import styles from "./Work.module.css";
import { BsFillBriefcaseFill } from "react-icons/bs";

const Work = () => {
  return (
    <div className={styles.container}>
      <div className={styles.timeline_wrapper}>
        <div>
          <div className={styles.timeline_icon}>
            <BsFillBriefcaseFill />
          </div>
          <div className={styles.timeline_start}></div>
          {/* <h3>Work</h3> */}
        </div>
        <div className={styles.timeline}>
          <div className={styles.timeline_item}>
            <h4 className={styles.timeline_title}>
              System Engineer - Tata Consultancy Services
            </h4>
            <p className={styles.timeline_date}>November,2020 - present</p>
            <p className={styles.timeline_desc}>
              Working as an innovative front end developer, creating scalable
              web apps using plain HTML CSS and JavaScript, using frameworks
              like React and Adobe Magento CMS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
