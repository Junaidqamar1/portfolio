import React, { useEffect } from 'react';
import './styles/header.css';
import facebook from './assets/fcaebook.svg';
import instagram from './assets/instagram.svg';
import linkedin from './assets/linkedin-svgrepo-com.svg';

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      
      if (window.scrollY > 0) {
        navbar.classList.add('sticky');
        document.querySelector(".change-col").style.color="black"
      } else {
        navbar.classList.remove('sticky');
        document.querySelector(".change-col").style.color="#FFF5E1"

      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header">
      <div className="navbar">
        <div className='nav-name font3'>
          JUNAID<span className='font2 change-col'>.portfolio</span>
        </div>
        <div className="nav">
          <ul>
            <li className="homebtn" data-aos="fade-left" style={{transition:"all 0.4s"}}>Home</li>
            <li className="aboutbtn" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000" style={{transition:"all 0.4s"}}>About</li>
            <li className="projectbtn" data-aos="fade-left" data-aos-delay="250" data-aos-duration="1000"style={{transition:"all 0.4s"}}>Project</li>
            <li className="contactbtn" data-aos="fade-left" data-aos-delay="350" data-aos-duration="1000" style={{transition:"all 0.4s"}}>Contact</li>
          </ul>
        </div>
      </div>
      <div className="left">
        <div className="link">
          <img src={linkedin} alt="linkedin" />
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
      <div className="welcome font1">
        <h1>Hello and Welcome</h1>
        <p>To my portfolio, I am Md Junaid Qamar</p>
        <div className="btn">
          <button className="btn0 resume fillelipse font1" data-aos="fade-left" style={{transition:"all 0.6s"}}>Resume</button>
          <button className="btn0 fillelipse btn2 font1" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000" style={{transition:"all 0.6s"}}>Start</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
