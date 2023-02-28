import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
// import { Tooltip as ReactTooltip } from "react-tooltip";
// import { Tooltip as ReactTooltip } from 'react-tooltip'
import  ReactTooltip  from 'react-tooltip';
import "./githubStats.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaCode, FaGit } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { BiUserVoice } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";

//import { ThemeContext } from '../context/ThemeContext';
// import { useContext } from 'react';

const selectLastHalfYear = (contributions) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 12;

  return contributions.filter((day) => {
    const date = new Date(day.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

const GitHubStats = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
   //const { Themes, currentTheme } = useContext(ThemeContext)
  return (
    <div id="githubID">
      <h1 className="heading">
        <span className="heading-highlight">Github</span>
      </h1>
      {/* Contribution status */}
      <div data-aos="zoom-in-up">
        <GitHubCalendar
          style={{ margin: "auto" }}
          blockSize={18}
          fontSize={16}
          blockMargin={4}
          blockRadius={6}
          username="kali2498"
          //  transformData={selectLastHalfYear}
        >
          <ReactTooltip delayShow={20} html />
        </GitHubCalendar>

        <div className="githubInfo">
        <div>
          <div className="texts" ><FaCode size="30px" /> <h1 >1300+ Hours Practical Coding</h1></div>
          <div className="texts" ><RiLightbulbFlashLine size="30px" /> <h1 >500+ Hours Data Structures & Algorithms</h1></div>
          <div className="texts" alignItems="center"><BiUserVoice size="30px" /> <h1 >100+ Hours Soft Skill Development</h1></div>

        </div>


        <div>

          <div className="texts" ><AiOutlineFundProjectionScreen size="30px" /> <h1 >8+ Projects</h1></div>
          <div className="texts"  ><VscGraph size="30px" /> <h1 >60+ Mini Projects</h1></div>
          <div className="texts" ><FaGit size="30px" /> <h1 >400+ Git Commits</h1></div>


        </div>


      </div>
        <div className="stats_container">
          <img
          src="https://github-readme-activity-graph.cyclic.app/graph?username=kali2498&theme=react-dark&hide_border=true"
          alt="Github stats"
          data-aos="flip-left"
        />
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;



// <img
// src="https://github-readme-stats.vercel.app/api?username=kali2498&show_icons=true&theme=tokyonight"
// alt="Github Stats"
// data-aos="flip-right"
// />