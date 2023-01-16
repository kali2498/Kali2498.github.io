import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
// import { Tooltip as ReactTooltip } from "react-tooltip";
// import { Tooltip as ReactTooltip } from 'react-tooltip'
import  ReactTooltip  from 'react-tooltip';
import "./githubStats.css";
import Aos from "aos";
import "aos/dist/aos.css";
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
          fontSize={14}
          blockMargin={4}
          blockRadius={6}
          username="kali2498"
          //  transformData={selectLastHalfYear}
        >
          <ReactTooltip delayShow={20} html />
        </GitHubCalendar>

        <div className="stats_container">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=kali2498&theme=nightowl&border_radius=7"
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