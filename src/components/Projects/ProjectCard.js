import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsLink } from "react-icons/bs";
import styles from "./ProjectCard.module.css";

const ProjectCard = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
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
      img: "/projects/mailchimp.png",
      name: "e-mail marketing Website",
      tech: ["HTML", "CSS", "Javascript"],
      link: "https://peaceful-concha-590692.netlify.app",
    },
    {
      img: "/projects/niftyPM.png",
      name: "Nifty-Managment Website.",
      tech: ["ReactJS", "ChakraUI", "HTML", "CSS"],
      link: "https://nifty-pm.netlify.app/",
    },
    {
      img: "/projects/beuty-bebo.png",
      name: "e-Commerce Website.",
      tech: ["ReactJS", "ChakraUI", "HTML", "CSS"],
      link: "https://incredible-rolypoly-ca9c8f.netlify.app/",
    },
    {
      img: "/projects/anthro.png",
      name: "e-Commerce Website.",
      tech: ["ReactJS", "ChakraUI", "HTML", "CSS"],
      link: "https://shiny-crumble-fca118.netlify.app/",
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
              <a className={styles.link} href={card.link} target="_blank">
                <BsLink />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectCard;
