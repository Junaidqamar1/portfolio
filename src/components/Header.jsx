import React, { useEffect } from 'react';
import './styles/header.css';
import facebook from './assets/fcaebook.svg';
import instagram from './assets/instagram.svg';
import linkedin from './assets/linkedin-svgrepo-com.svg';
import { sprinkleFireCursor } from './sprinkleFireCursor';

function Header() {
  useEffect(() => {
    const headerContainer = document.querySelector('#header');
    const cursorEffect = sprinkleFireCursor({ container: headerContainer });

    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');

      if (window.scrollY > 0) {
        navbar.classList.add('sticky');
        document.querySelector('.change-col').style.color = 'black';
      } else {
        navbar.classList.remove('sticky');
        document.querySelector('.change-col').style.color = '#FFF5E1';
      }
    };

    window.addEventListener('scroll', handleScroll);


    return () => {
      cursorEffect.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header" id="header">
      <div className="navbar">
        <div className="nav-name font3">
          JUNAID<span className="font2 change-col">.portfolio</span>
        </div>
        <div className="nav">
        <img className='ham' src="hamburger.svg" alt=""/>
          <ul>
            <li className='cross'>
            <img src="cross.svg" alt=""/>
            </li>
            <li className="homebtn" data-aos="fade-left" style={{ transition: 'all 0.4s' }}>
              Home
            </li>
            <li
              className="aboutbtn"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
              style={{ transition: 'all 0.4s' }}
            >
              About
            </li>
            <li
              className="projectbtn"
              data-aos="fade-left"
              data-aos-delay="250"
              data-aos-duration="1000"
              style={{ transition: 'all 0.4s' }}
            >
              Project
            </li>
            <li
              className="contactbtn"
              data-aos="fade-left"
              data-aos-delay="350"
              data-aos-duration="1000"
              style={{ transition: 'all 0.4s' }}
            >
              Contact
            </li>
          </ul>
          {/* <ul className='sec-nav'>
            <li className=''>Home</li>
            <li className=''>About</li>
            <li className=''>Project</li>
            <li className=''>Contact</li>
          </ul> */}
        </div>
      </div>
      <div className="left">
        <div className="link">
          <a href='www.linkedin.com/in/junaidqamar12'>
            <svg fill="white" width="800px" height="800px" viewBox="-5.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 8.219v15.563c0 1.469 1.156 2.625 2.625 2.625h15.563c0.719 0 1.406-0.344 1.844-0.781 0.469-0.469 0.781-1.063 0.781-1.844v-15.563c0-1.469-1.156-2.625-2.625-2.625h-15.563c-0.781 0-1.375 0.313-1.844 0.781-0.438 0.438-0.781 1.125-0.781 1.844zM2.813 10.281c0-1 0.813-1.875 1.813-1.875 1.031 0 1.875 0.875 1.875 1.875 0 1.031-0.844 1.844-1.875 1.844-1 0-1.813-0.813-1.813-1.844zM7.844 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.656c0.375 0 0.375 0.438 0.375 0.719 0.75-0.75 1.719-0.938 2.719-0.938 2.438 0 4 1.156 4 3.719v6.438c0 0.219-0.188 0.406-0.375 0.406h-2.75c-0.219 0-0.375-0.219-0.375-0.406v-5.813c0-0.969-0.281-1.5-1.375-1.5-1.375 0-1.719 0.906-1.719 2.125v5.188c0 0.219-0.219 0.406-0.438 0.406h-2.719c-0.156 0-0.375-0.219-0.375-0.406zM2.875 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.719c0.25 0 0.406 0.156 0.406 0.406v9.531c0 0.219-0.188 0.406-0.406 0.406h-2.719c-0.188 0-0.375-0.219-0.375-0.406z"></path>
            </svg>
          </a>
          <a href='https://www.facebook.com/junaid.qamar.9849?mibextid=ZbWKwL'>
            <svg fill="white" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z" />
            </svg>
          </a>
          <a href='#'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>
      <div className="welcome font1">
        <h1>Hello and Welcome</h1>
        <p>To my portfolio, I am Md Junaid Qamar</p>
        <div className="btn">
          <button className="btn0 resume fillelipse font1" data-aos="fade-left" style={{ transition: 'all 0.6s' }}>
            Resume
          </button>
          <button
            className="btn0 fillelipse btn2 font1"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            style={{ transition: 'all 0.6s' }}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
  document.getElementsByClassName("ham").addEventListener("click",()=>{
    document.getElementsByClassName("sec-nav").style.diplay="block"
  })
  document.getElementsByClassName("").addEventListener("click",()=>{
    document.getElementsByClassName("sec-nav").style.diplay="block"
  })
}

export default Header;
