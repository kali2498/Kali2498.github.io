import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsGithub, BsLink } from "react-icons/bs";
import styles from "./ProjectCard.module.css";

const ProjectCard = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
  
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const projects = [
    {
      img: "/projects/IKEA.png",
      name: "E-Commerce  Website",
      tech: ["ReactJs", "Aos", "Redux", "Redux-Thunks"],
      dec: "IKEA sell the  kitchen appliances, decoration, home accessories etc.",
      link: "https://rococo-sawine-4218f1.netlify.app/",
      glink: "https://github.com/pgariya/fleet-purpose-8648",
    },
    {
      img: "/projects/Wrike.png",
      name: "Management Website",
      tech: ["ReactJs", "Redux", "Redux-Thunks", "Chakra-UI"],
      dec: "Wrike is a work management platform that helps business teams collaborate",
      link: "https://proflow.netlify.app",
      glink: "https://github.com/VIC-PAUL/Wrike-Clone",
    },
    {
      img: "/projects/niftyPM.png",
      name: "Nifty-Managment Website.",
      tech: ["JavaScript", "HTML", "CSS", "font-awosome"],
      dec: "Nifty is the remote collaboration hub to manage projects, tasks",
      link: "https://nifty-pm.netlify.app/",
      glink: "https://github.com/piyush-agrawal6/NiftyPM-clone",
    },
    {
      img: "/projects/mailchimp.png",
      name: "E-mail marketing Website",
      tech: ["HTML", "CSS", "Javascript", "font-awosome"],
      dec: "Mailchimp is a marketing automation platform and email  service.",
      link: "https://peaceful-concha-590692.netlify.app",
      glink: "https://github.com/kali2498/MailChimp_website-Clone",
    },
    {
      img: "/projects/beuty-bebo.png",
      name: "E-Commerce Website.",
      tech: ["ReactJS", "ChakraUI", "React-Icon"],
      dec: "Beauty Bebo is India's fastest growing online retail store day to day.",
      link: "https://incredible-rolypoly-ca9c8f.netlify.app/",
      glink: "https://github.com/kali2498/BeutyBebo-website-Clone",
    },
    {
      img: "/projects/anthro.png",
      name: "E-Commerce Website.",
      tech: ["ReactJS", "ChakraUI", "React-Icon"],
      dec: " Anthropologie's unique collection of women's clothing,gifts and more.",
      link: "https://shiny-crumble-fca118.netlify.app/",
      glink: "https://github.com/kali2498/Anthropologie-website-Clone",
    },
  ];

  return (
    <div className={styles.content}>
      <div className={styles.controls}>
        <button onClick={sliderRef?.slickPrev}>
          <FaChevronLeft />
        </button>
        <button onClick={sliderRef?.slickNext}>
          <FaChevronRight />
        </button>
      </div>
      <Slider ref={setSliderRef} {...sliderSettings}>
        {projects.map((card, index) => (
          <div key={index} className={styles.card}>
            <img
              src={process.env.PUBLIC_URL + card.img}
              alt={card.name}
              className={styles.card_img}
            />
            <div className={styles.text_info}>
              <div className={styles.card_header}>
                <h2>{card.name}</h2>
              </div>
              <div className={styles.techContainer}>
                {card.tech.map((item) => (
                  <div className={styles.tech}>{item}</div>
                ))}
              </div>

              <div className={styles.card_header}>
                <h6>{card.dec}</h6>
              </div>

              <div className={styles.linkdiv}>
                <a className={styles.link} href={card.link} target="_blank">
                  <BsLink />
                </a>
                <a className={styles.link} href={card.glink} target="_blank">
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectCard;
