import React, { useEffect, useRef } from 'react';
import './styles/about.css';
import VanillaTilt from 'vanilla-tilt';
import Skill from './Skill';
import "./styles/skill.css"


const About = () => {
  // const tiltRef = useRef(null);

  // useEffect(() => {
  //   if (window.VanillaTilt) {
  //     VanillaTilt.init(tiltRef.current, {
  //       max: 25,
  //       speed: 400,
  //       glare: true,
  //       'max-glare': 0.5,
  //     });
  //   }

  //   return () => {
  //     if (tiltRef.current?.vanillaTilt) {
  //       tiltRef.current.vanillaTilt.destroy();
  //     }
  //   };
  // }, []);

  return (
    <div className="about">
      <h1 className="font1 abouthead" data-aos="fade-up">ABOUT</h1>
      <div  className="education" data-aos="fade-up">
        <h2 className="font3 h201">EDUCATION</h2>
        <p className="p01">
          I completed my high school from NARAYANA SCHOOLS. My educational journey has been marked by a
          commitment to excellence and a thirst for knowledge. Through intensive coursework, hands-on
          projects, and collaborative learning experiences, I've gained a comprehensive understanding of
          fundamental computer science concepts, including data structures, algorithms, software
          engineering principles, and more. As I continue to pursue my degree in SWAMI VIVEKANANDA
          UNIVERSITY, I am eager to delve deeper into specialized areas of interest within computer
          science, such as web development, game development, app development, and many more, and leverage my
          education to make meaningful contributions to the tech industry.
        </p>
      </div>
      {/* skill section */}
      <Skill/>
      <div className="achivment" data-aos="fade-up">
        <h2 className="font3">ACHIEVEMENT</h2>
        <div className="document"></div>
      </div>
    </div>
  );
};

export default About;
